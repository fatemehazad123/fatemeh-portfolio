'use client'
import { useEffect, useRef } from 'react'

interface DotConfig {
  bgColor?: [number, number, number]
  dotColors?: Array<[number, number, number]>
  dotRadius?: number
  spacing?: number
  repelDist?: number
  repelForce?: number
  returnSpeed?: number
  opacity?: number
  animated?: boolean
  mouseReactive?: boolean
}

export default function DotBackground({
  config = {},
  className = '',
  style = {},
}: {
  config?: DotConfig
  className?: string
  style?: React.CSSProperties
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => { // eslint-disable-line react-hooks/exhaustive-deps
    const canvas = canvasRef.current
    if (!canvas) return

    const {
      bgColor      = [245, 242, 237],
      dotColors    = [[79, 166, 161], [201, 106, 74], [143, 168, 158]],
      dotRadius    = 2.5,
      spacing      = 28,
      repelDist    = 90,
      repelForce   = 0.18,
      returnSpeed  = 0.07,
      opacity      = 0.45,
      animated     = true,
      mouseReactive = true,
    } = config

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const ctx = canvas.getContext('2d')!
    const W = () => canvas.width
    const H = () => canvas.height

    type Dot = {
      ox: number; oy: number
      x: number;  y: number
      vx: number; vy: number
      color: [number, number, number]
      r: number
    }

    const buildDots = (): Dot[] => {
      const dots: Dot[] = []
      const cols = Math.ceil(W() / spacing) + 1
      const rows = Math.ceil(H() / spacing) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * spacing
          const oy = r * spacing
          const ci = Math.floor(Math.random() * dotColors.length)
          dots.push({
            ox, oy, x: ox, y: oy, vx: 0, vy: 0,
            color: dotColors[ci],
            r: dotRadius * (0.7 + Math.random() * 0.6),
          })
        }
      }
      return dots
    }

    let dots = buildDots()
    let mx = -999, my = -999

    const onMove = (e: MouseEvent) => {
      if (!mouseReactive) return
      const rect = canvas.getBoundingClientRect()
      mx = e.clientX - rect.left
      my = e.clientY - rect.top
    }
    const onLeave = () => { mx = -999; my = -999 }

    window.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    let t = 0
    let raf: number

    const render = () => {
      t += 0.008
      ctx.clearRect(0, 0, W(), H())
      ctx.fillStyle = `rgb(${bgColor[0]},${bgColor[1]},${bgColor[2]})`
      ctx.fillRect(0, 0, W(), H())

      dots.forEach(d => {
        if (animated) {
          const breathe = Math.sin(t + d.ox * 0.08 + d.oy * 0.06) * 1.5
          const dx = d.x - mx
          const dy = d.y - my
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < repelDist && dist > 0.1) {
            const force = (repelDist - dist) / repelDist
            d.vx += (dx / dist) * force * repelForce * 8
            d.vy += (dy / dist) * force * repelForce * 8
          }

          d.vx += (d.ox - d.x) * returnSpeed
          d.vy += (d.oy - d.y) * returnSpeed
          d.vx *= 0.78
          d.vy *= 0.78
          d.x += d.vx
          d.y += d.vy

          const alpha = opacity * (0.6 + Math.sin(t * 1.2 + d.ox * 0.1) * 0.4)
          const dr = Math.max(0.5, d.r + breathe * 0.3)

          ctx.beginPath()
          ctx.arc(d.x, d.y, dr, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${d.color[0]},${d.color[1]},${d.color[2]},${alpha})`
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(d.ox, d.oy, d.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${d.color[0]},${d.color[1]},${d.color[2]},${opacity})`
          ctx.fill()
        }
      })

      raf = requestAnimationFrame(render)
    }

    render()

    const onResize = () => {
      resize()
      dots = buildDots()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        ...style,
      }}
    />
  )
}
