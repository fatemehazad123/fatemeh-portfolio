'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface HeroGLProps {
  texturePath?: string
}

export default function HeroGL({ texturePath }: HeroGLProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = canvas.offsetWidth
    const H = canvas.offsetHeight

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x060604, 1)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x060604, 0.08)

    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100)
    camera.position.set(0, 0, 5)

    // CUBE CAMERA — real-time environment reflections
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
      type: THREE.HalfFloatType,
    })
    const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeRenderTarget)
    cubeCamera.position.set(2.8, 0.2, 0)
    scene.add(cubeCamera)

    // PRIMARY SHAPE — Chrome liquid-metal sphere
    const geometry = new THREE.SphereGeometry(1.4, 128, 128)

    // Store original positions for vertex displacement (breathing morph)
    const rawArr = geometry.attributes.position.array
    const originalPositions = new Float32Array(rawArr.length)
    for (let i = 0; i < rawArr.length; i++) originalPositions[i] = rawArr[i]

    const material = new THREE.MeshStandardMaterial({
      color: 0x4FA6A1,
      metalness: 1.0,
      roughness: 0.0,
      envMap: cubeRenderTarget.texture,
      envMapIntensity: 2.0,
    })

    if (texturePath) {
      const textureLoader = new THREE.TextureLoader()
      const tex = textureLoader.load(texturePath)
      material.map = tex
      material.metalness = 0.3
      material.roughness = 0.4
    }

    const sphere = new THREE.Mesh(geometry, material)
    sphere.position.set(2.8, 0.2, 0)
    scene.add(sphere)

    // SECONDARY — Terra sphere orbiting
    const terraGeo = new THREE.SphereGeometry(0.3, 32, 32)
    const terraMat = new THREE.MeshStandardMaterial({ color: 0xC96A4A, metalness: 0.9, roughness: 0.05 })
    const terraSphere = new THREE.Mesh(terraGeo, terraMat)
    scene.add(terraSphere)

    // TERTIARY — Sage icosahedron orbiting
    const icoGeo = new THREE.IcosahedronGeometry(0.2, 1)
    const icoMat = new THREE.MeshStandardMaterial({ color: 0xBFCFC6, metalness: 0.7, roughness: 0.15 })
    const ico = new THREE.Mesh(icoGeo, icoMat)
    scene.add(ico)

    // PARTICLE FIELD
    const pCount = 2000
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    const pCol = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount; i++) {
      const r = 2 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta) + 2.8
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pPos[i * 3 + 2] = r * Math.cos(phi)
      const t = Math.random()
      if (t < 0.5)      { pCol[i*3]=0.31; pCol[i*3+1]=0.65; pCol[i*3+2]=0.63 }
      else if (t < 0.8) { pCol[i*3]=0.79; pCol[i*3+1]=0.42; pCol[i*3+2]=0.29 }
      else              { pCol[i*3]=0.75; pCol[i*3+1]=0.81; pCol[i*3+2]=0.78 }
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    pGeo.setAttribute('color',    new THREE.BufferAttribute(pCol, 3))
    const pMat = new THREE.PointsMaterial({ size: 0.018, vertexColors: true, transparent: true, opacity: 0.7, sizeAttenuation: true })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // LIGHTING — 4-light rig for chrome reflections
    scene.add(new THREE.AmbientLight(0xffffff, 0.15))
    const pl1 = new THREE.PointLight(0x4FA6A1, 4, 12); pl1.position.set(-4, 4, 3);  scene.add(pl1)
    const pl2 = new THREE.PointLight(0xC96A4A, 3, 12); pl2.position.set(4, -3, 2);  scene.add(pl2)
    const pl3 = new THREE.PointLight(0xFFFFFF, 2, 12); pl3.position.set(0, 5, -3);  scene.add(pl3)
    const pl4 = new THREE.PointLight(0xBFCFC6, 1.5, 12); pl4.position.set(-2, -4, 4); scene.add(pl4)

    // MOUSE
    let targetRotX = 0, targetRotY = 0
    let currentRotX = 0, currentRotY = 0
    const onMouseMove = (e: MouseEvent) => {
      targetRotY = (e.clientX / window.innerWidth  - 0.5) *  0.8
      targetRotX = (e.clientY / window.innerHeight - 0.5) * -0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    // ANIMATION LOOP
    const clock = new THREE.Clock()
    let rafId: number
    const posArr = geometry.attributes.position.array as unknown as Float32Array

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const time = clock.getElapsedTime()

      currentRotX += (targetRotX - currentRotX) * 0.04
      currentRotY += (targetRotY - currentRotY) * 0.04

      // Vertex displacement — sphere breathes and morphs
      for (let i = 0; i < posArr.length; i += 3) {
        const ox = originalPositions[i]
        const oy = originalPositions[i + 1]
        const oz = originalPositions[i + 2]
        const noise = Math.sin(time * 0.8 + ox * 2.1 + oy * 1.7 + oz * 1.3) * 0.04
        posArr[i]     = ox + ox * noise
        posArr[i + 1] = oy + oy * noise
        posArr[i + 2] = oz + oz * noise
      }
      geometry.attributes.position.needsUpdate = true
      geometry.computeVertexNormals()

      sphere.rotation.x = time * 0.1 + currentRotX * 0.5
      sphere.rotation.y = time * 0.15 + currentRotY * 0.8

      // Cube camera update — hide sphere to avoid self-reflection artifact
      sphere.visible = false
      cubeCamera.position.copy(sphere.position)
      cubeCamera.update(renderer, scene)
      sphere.visible = true

      // Orbiting secondary shapes
      terraSphere.position.x = 2.8 + Math.cos(time * 0.6) * 2.2
      terraSphere.position.y = 0.2 + Math.sin(time * 0.5) * 1.2
      terraSphere.position.z = Math.sin(time * 0.4) * 0.8
      terraSphere.rotation.y = time * 0.8

      ico.position.x = 2.8 + Math.cos(time * 0.7 + Math.PI) * 1.8
      ico.position.y = 0.2 + Math.sin(time * 0.8) * 1.5
      ico.rotation.x = time * 0.5
      ico.rotation.z = time * 0.3

      particles.rotation.y = time * 0.04 + currentRotY * 0.3
      particles.rotation.x = time * 0.02 + currentRotX * 0.2

      // Animate key lights
      pl1.position.x = -4 + Math.sin(time * 0.5) * 2
      pl2.position.y = -3 + Math.cos(time * 0.4) * 2

      camera.position.x = currentRotY * 0.3
      camera.position.y = currentRotX * -0.2
      camera.lookAt(2.5, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // RESIZE
    const onResize = () => {
      const W2 = canvas.offsetWidth
      const H2 = canvas.offsetHeight
      camera.aspect = W2 / H2
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geometry.dispose(); material.dispose()
      terraGeo.dispose(); terraMat.dispose()
      icoGeo.dispose(); icoMat.dispose()
      pGeo.dispose(); pMat.dispose()
      cubeRenderTarget.texture.dispose()
    }
  }, [texturePath])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
    />
  )
}
