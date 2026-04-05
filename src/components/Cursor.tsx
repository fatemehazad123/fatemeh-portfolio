'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const svgRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let svgX   = 0, svgY   = 0
    let frame: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseDown = () => {
      if (dotRef.current)  dotRef.current.style.transform  = `translate(-50%, -50%) scale(0.6)`
      if (ringRef.current) ringRef.current.style.transform = `translate(-50%, -50%) scale(0.85)`
    }

    const onMouseUp = () => {
      if (dotRef.current)  dotRef.current.style.transform  = `translate(-50%, -50%) scale(1)`
      if (ringRef.current) ringRef.current.style.transform = `translate(-50%, -50%) scale(1)`
    }

    const onHoverIn = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '52px'
        ringRef.current.style.height = '52px'
        ringRef.current.style.borderColor = 'rgba(255,255,255,0.6)'
      }
      if (dotRef.current) {
        dotRef.current.style.width  = '8px'
        dotRef.current.style.height = '8px'
      }
    }

    const onHoverOut = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '32px'
        ringRef.current.style.height = '32px'
        ringRef.current.style.borderColor = 'white'
      }
      if (dotRef.current) {
        dotRef.current.style.width  = '5px'
        dotRef.current.style.height = '5px'
      }
    }

    const addHoverListeners = () => {
      const els = document.querySelectorAll('a, button, [data-cursor="pointer"]')
      els.forEach(el => {
        el.addEventListener('mouseenter', onHoverIn)
        el.addEventListener('mouseleave', onHoverOut)
      })
    }

    const tick = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t

      ringX = lerp(ringX, mouseX, 0.08)
      ringY = lerp(ringY, mouseY, 0.08)
      svgX  = lerp(svgX,  mouseX, 0.08)
      svgY  = lerp(svgY,  mouseY, 0.08)

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top  = `${mouseY}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top  = `${ringY}px`
      }
      if (svgRef.current) {
        svgRef.current.style.left = `${svgX}px`
        svgRef.current.style.top  = `${svgY}px`
      }

      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup',   onMouseUp)
    addHoverListeners()
    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup',   onMouseUp)
      cancelAnimationFrame(frame)
    }
  }, [])

  const CURSOR_TEXT = 'PRODUCT DESIGN · FA · '

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: 'white',
          pointerEvents: 'none',
          zIndex: 9999,
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          transition: 'width 0.2s, height 0.2s',
          willChange: 'left, top',
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid white',
          pointerEvents: 'none',
          zIndex: 9998,
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          transition: 'width 0.25s, height 0.25s, border-color 0.25s',
          willChange: 'left, top',
        }}
      />

      {/* SVG text ring */}
      <div
        ref={svgRef}
        style={{
          position: 'fixed',
          width: 64,
          height: 64,
          pointerEvents: 'none',
          zIndex: 9997,
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          animation: 'svgRotate 8s linear infinite',
          willChange: 'left, top',
          opacity: 0.35,
        }}
      >
        <svg viewBox="0 0 64 64" width="64" height="64">
          <defs>
            <path id="circle-path" d="M 32,32 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0" />
          </defs>
          <text style={{ fontSize: 7, fontFamily: 'var(--font-inter)', fontWeight: 500, letterSpacing: '0.1em' }} fill="white">
            <textPath href="#circle-path">
              {CURSOR_TEXT}{CURSOR_TEXT}
            </textPath>
          </text>
        </svg>
      </div>

      <style>{`
        @keyframes svgRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @media (max-width: 768px) {
          .cursor-dot, .cursor-ring { display: none !important; }
        }
      `}</style>
    </>
  )
}
