'use client'
import { useEffect, useRef } from 'react'

const VERTEX = `
  attribute vec2 a_pos;
  void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`

const FRAGMENT = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_res;
  uniform vec2 u_mouse;

  vec3 permute(vec3 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
  }

  float snoise(vec2 v) {
    const vec4 C = vec4(
      0.211324865405187,
      0.366025403784439,
      -0.577350269189626,
      0.024390243902439
    );
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y)
      ? vec2(1.0, 0.0)
      : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0)
    );
    vec3 m = max(0.5 - vec3(
      dot(x0,x0),
      dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)
    ), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159
      - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_res.xy;
    vec2 m  = u_mouse / u_res.xy;
    float t = u_time * 0.18;

    vec2 p = uv * 3.5;
    float n1 = snoise(p + vec2(t*0.7, t*0.4));
    float n2 = snoise(
      p * 1.8
      + vec2(-t*0.5, t*0.6)
      + vec2(n1 * 0.4)
    );
    float n3 = snoise(p * 0.6 + vec2(t*0.3, -t*0.25));

    float mouseDist = length(uv - m);
    float mouseInfluence =
      smoothstep(0.6, 0.0, mouseDist) * 0.15;

    float combined = (
      n1 * 0.5 + n2 * 0.3
      + n3 * 0.2 + mouseInfluence
    );
    combined = combined * 0.5 + 0.5;

    vec3 cream = vec3(0.961, 0.949, 0.929);
    vec3 teal  = vec3(0.310, 0.651, 0.631);
    vec3 terra = vec3(0.788, 0.416, 0.290);
    vec3 sage  = vec3(0.561, 0.659, 0.620);

    vec3 col = cream;
    col = mix(col, sage,
      smoothstep(0.3, 0.55, combined) * 0.18);
    col = mix(col, teal,
      smoothstep(0.55, 0.75, combined) * 0.22);
    col = mix(col, terra,
      smoothstep(0.72, 0.9, combined) * 0.14);

    float vignette = 1.0 - smoothstep(
      0.5, 1.3,
      length((uv - 0.5) * 1.5)
    );
    col = mix(cream, col, vignette * 0.7);
    col = mix(col, cream, 0.55);

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function ShaderBackground() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const gl = (
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    ) as WebGLRenderingContext | null
    if (!gl) return

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)
      if (!s) return null
      gl.shaderSource(s, src)
      gl.compileShader(s)
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s))
        gl.deleteShader(s)
        return null
      }
      return s
    }

    const vert = compile(gl.VERTEX_SHADER,   VERTEX)
    const frag = compile(gl.FRAGMENT_SHADER, FRAGMENT)
    if (!vert || !frag) return

    const prog = gl.createProgram()
    if (!prog) return
    gl.attachShader(prog, vert)
    gl.attachShader(prog, frag)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog))
      return
    }
    gl.useProgram(prog)

    // Full-screen quad (two triangles)
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1,  1, -1, -1,  1,
                        -1,  1,  1, -1,  1,  1]),
      gl.STATIC_DRAW,
    )

    const aPos = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uTime  = gl.getUniformLocation(prog, 'u_time')
    const uRes   = gl.getUniformLocation(prog, 'u_res')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')

    const mouse = { x: canvas.width * 0.5, y: canvas.height * 0.5 }
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      // WebGL origin is bottom-left, DOM origin is top-left
      mouse.y = canvas.height - (e.clientY - rect.top)
    }
    window.addEventListener('mousemove', onMouseMove)

    const start = performance.now()
    let raf: number

    const render = () => {
      const t = (performance.now() - start) * 0.001
      gl.uniform1f(uTime,  t)
      gl.uniform2f(uRes,   canvas.width, canvas.height)
      gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      gl.deleteProgram(prog)
      gl.deleteShader(vert)
      gl.deleteShader(frag)
      gl.deleteBuffer(buf)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position:  'absolute',
        inset:     0,
        width:     '100%',
        height:    '100%',
        display:   'block',
        pointerEvents: 'none',
      }}
    />
  )
}
