'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

// ── SCREEN DATA ───────────────────────────────────────
const SCREENS = [
  { label: 'Onboarding Flow', title: 'Identity Verification' },
  { label: 'Error State · WCAG AA',  title: 'Payment Form'   },
  { label: 'Design System',  title: 'Component Library'      },
]

// ── SPRING CONSTANTS ──────────────────────────────────
const K = 0.12   // stiffness
const D = 0.72   // damping

interface SpringState {
  x:number; y:number; z:number
  rX:number; rY:number; rZ:number
  sc:number; op:number
  vx:number; vy:number; vz:number
  vrX:number; vrY:number; vrZ:number
  vsc:number; vop:number
}

function makeState(): SpringState {
  return {
    x:0,y:0,z:0,rX:0,rY:0,rZ:0,sc:1,op:0,
    vx:0,vy:0,vz:0,vrX:0,vrY:0,vrZ:0,vsc:0,vop:0
  }
}

interface Target {
  x:number; y:number; z:number
  rX:number; rY:number; rZ:number
  sc:number; op:number
}

function getTarget(diff: number): Target {
  if (diff === 0) return { x:0,  y:0,  z:0,   rX:0, rY:0,  rZ:0,   sc:1,    op:1    }
  if (diff === 1) return { x:18, y:22, z:-60,  rX:1, rY:-4, rZ:2,   sc:0.93, op:0.85 }
  if (diff === 2) return { x:34, y:40, z:-120, rX:2, rY:-7, rZ:3.5, sc:0.86, op:0.65 }
  return                 { x:0,  y:-600, z:-200, rX:0, rY:0, rZ:0,  sc:0.8,  op:0    }
}

function stepSpring(s: SpringState, t: Target) {
  s.vx  += (t.x  - s.x)  * K; s.x  += s.vx;  s.vx  *= D
  s.vy  += (t.y  - s.y)  * K; s.y  += s.vy;  s.vy  *= D
  s.vz  += (t.z  - s.z)  * K; s.z  += s.vz;  s.vz  *= D
  s.vrX += (t.rX - s.rX) * K; s.rX += s.vrX; s.vrX *= D
  s.vrY += (t.rY - s.rY) * K; s.rY += s.vrY; s.vrY *= D
  s.vrZ += (t.rZ - s.rZ) * K; s.rZ += s.vrZ; s.vrZ *= D
  s.vsc += (t.sc - s.sc) * K; s.sc += s.vsc; s.vsc *= D
  s.vop += (t.op - s.op) * K; s.op += s.vop; s.vop *= D
}

// ── SCREEN 1: IDENTITY VERIFICATION ──────────────────
function Screen1() {
  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', background:'white' }}>
      {/* Status bar */}
      <div style={{ height:44, padding:'14px 16px 0', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
        <span style={{ fontSize:9, fontWeight:700, color:'#2E2E2C' }}>9:41</span>
        <div style={{ width:14, height:7, border:'1.5px solid #2E2E2C', borderRadius:2, opacity:0.5, position:'relative' }}>
          <div style={{ position:'absolute', inset:1, width:'70%', background:'#2E2E2C', borderRadius:1 }} />
        </div>
      </div>
      {/* Progress */}
      <div style={{ padding:'0 16px', marginTop:6 }}>
        <div style={{ height:3, background:'#E8EAE8', borderRadius:2, overflow:'hidden' }}>
          <div style={{ width:'33%', height:'100%', background:'#4FA6A1', borderRadius:2 }} />
        </div>
        <div style={{ fontSize:7, color:'#2E2E2C', opacity:0.35, marginTop:3, textAlign:'right' }}>Step 1 of 3</div>
      </div>
      {/* Body */}
      <div style={{ padding:'18px 16px 0', flex:1, display:'flex', flexDirection:'column', gap:14 }}>
        <div>
          <div style={{ fontSize:16, fontWeight:700, color:'#2E2E2C', marginBottom:4 }}>Verify Identity</div>
          <div style={{ fontSize:10, color:'#2E2E2C', opacity:0.45, lineHeight:1.5 }}>
            Securely confirm your information to continue with your application.
          </div>
        </div>
        {/* Upload card */}
        <div style={{ border:'1.5px dashed rgba(79,166,161,0.4)', borderRadius:16, padding:'20px 16px', display:'flex', flexDirection:'column', alignItems:'center', gap:8, background:'rgba(79,166,161,0.03)' }}>
          <div style={{ width:44, height:44, borderRadius:'50%', background:'rgba(79,166,161,0.1)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ width:18, height:22, border:'2.5px solid #4FA6A1', borderRadius:4, position:'relative' }}>
              <div style={{ position:'absolute', top:-7, left:'50%', transform:'translateX(-50%)', width:0, height:0, borderLeft:'6px solid transparent', borderRight:'6px solid transparent', borderBottom:'7px solid #4FA6A1' }} />
            </div>
          </div>
          <div style={{ fontSize:11, fontWeight:700, color:'#4FA6A1' }}>Upload Government ID</div>
          <div style={{ fontSize:9, color:'#2E2E2C', opacity:0.35, textAlign:'center', lineHeight:1.5 }}>
            Passport, driver&apos;s licence, or provincial ID accepted
          </div>
        </div>
        {/* OR */}
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ flex:1, height:1, background:'rgba(46,46,44,0.08)' }} />
          <div style={{ fontSize:9, color:'#2E2E2C', opacity:0.3 }}>or</div>
          <div style={{ flex:1, height:1, background:'rgba(46,46,44,0.08)' }} />
        </div>
        {/* Camera */}
        <div style={{ border:'1px solid rgba(46,46,44,0.1)', borderRadius:14, padding:'12px 14px', display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:34, height:34, borderRadius:'50%', background:'#BFCFC6', opacity:0.6, flexShrink:0 }} />
          <div>
            <div style={{ fontSize:10, fontWeight:600, color:'#2E2E2C' }}>Take a photo</div>
            <div style={{ fontSize:9, color:'#2E2E2C', opacity:0.4 }}>Use your camera directly</div>
          </div>
          <div style={{ marginLeft:'auto', width:18, height:18, borderRadius:'50%', border:'1.5px solid rgba(46,46,44,0.15)' }} />
        </div>
        {/* WCAG */}
        <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:'auto' }}>
          <div style={{ width:16, height:16, borderRadius:4, background:'rgba(79,166,161,0.1)', border:'1px solid rgba(79,166,161,0.25)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <span style={{ fontSize:8, fontWeight:800, color:'#4FA6A1' }}>✓</span>
          </div>
          <div style={{ fontSize:8, color:'#2E2E2C', opacity:0.35 }}>256-bit encrypted · WCAG AA compliant</div>
        </div>
      </div>
      {/* CTA */}
      <div style={{ padding:'12px 16px 28px' }}>
        <div style={{ height:46, borderRadius:100, background:'#4FA6A1', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ fontSize:11, fontWeight:700, color:'white', letterSpacing:'0.06em' }}>Continue</span>
        </div>
      </div>
    </div>
  )
}

// ── SCREEN 2: PAYMENT FORM + ERROR STATE ──────────────
function Screen2() {
  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', background:'white' }}>
      <div style={{ height:44, padding:'14px 16px 0', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
        <span style={{ fontSize:9, fontWeight:700, color:'#2E2E2C' }}>9:41</span>
        <div style={{ width:14, height:7, border:'1.5px solid #2E2E2C', borderRadius:2, opacity:0.5, position:'relative' }}>
          <div style={{ position:'absolute', inset:1, width:'70%', background:'#2E2E2C', borderRadius:1 }} />
        </div>
      </div>
      <div style={{ padding:'0 16px', marginTop:6 }}>
        <div style={{ height:3, background:'#E8EAE8', borderRadius:2, overflow:'hidden' }}>
          <div style={{ width:'66%', height:'100%', background:'#4FA6A1', borderRadius:2 }} />
        </div>
        <div style={{ fontSize:7, color:'#2E2E2C', opacity:0.35, marginTop:3, textAlign:'right' }}>Step 2 of 3</div>
      </div>
      <div style={{ padding:'16px 16px 0', flex:1, display:'flex', flexDirection:'column', gap:12 }}>
        <div>
          <div style={{ fontSize:16, fontWeight:700, color:'#2E2E2C', marginBottom:3 }}>Payment Details</div>
          <div style={{ fontSize:10, color:'#2E2E2C', opacity:0.4 }}>Enter your billing information</div>
        </div>
        {/* Card — valid */}
        <div>
          <div style={{ fontSize:9, fontWeight:600, color:'#2E2E2C', opacity:0.5, marginBottom:5, letterSpacing:'0.05em' }}>CARD NUMBER</div>
          <div style={{ height:44, borderRadius:12, border:'1.5px solid rgba(79,166,161,0.5)', background:'rgba(79,166,161,0.03)', display:'flex', alignItems:'center', padding:'0 14px', gap:10 }}>
            <span style={{ fontSize:12, fontWeight:600, color:'#2E2E2C', letterSpacing:'0.12em' }}>•••• •••• •••• 4242</span>
            <div style={{ marginLeft:'auto', width:22, height:16, borderRadius:3, background:'rgba(79,166,161,0.15)' }} />
          </div>
        </div>
        {/* Expiry — error */}
        <div>
          <div style={{ fontSize:9, fontWeight:600, color:'#C96A4A', marginBottom:5, letterSpacing:'0.05em' }}>EXPIRY DATE</div>
          <div style={{ height:44, borderRadius:12, border:'1.5px solid #C96A4A', background:'rgba(201,106,74,0.04)', display:'flex', alignItems:'center', padding:'0 14px', gap:8 }}>
            <span style={{ fontSize:12, fontWeight:600, color:'#C96A4A', letterSpacing:'0.1em' }}>01/22</span>
            <div style={{ marginLeft:'auto', width:20, height:20, borderRadius:'50%', background:'rgba(201,106,74,0.12)', border:'1.5px solid #C96A4A', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <span style={{ fontSize:10, fontWeight:900, color:'#C96A4A' }}>!</span>
            </div>
          </div>
          <div style={{ fontSize:9, color:'#C96A4A', fontWeight:500, marginTop:5 }}>Card expired. Please use a valid card.</div>
        </div>
        {/* CVV */}
        <div>
          <div style={{ fontSize:9, fontWeight:600, color:'#2E2E2C', opacity:0.5, marginBottom:5, letterSpacing:'0.05em' }}>CVV</div>
          <div style={{ height:44, borderRadius:12, border:'1px solid rgba(46,46,44,0.12)', display:'flex', alignItems:'center', padding:'0 14px' }}>
            <span style={{ fontSize:14, color:'#2E2E2C', opacity:0.25, letterSpacing:'0.2em' }}>•••</span>
          </div>
        </div>
        {/* Summary */}
        <div style={{ background:'#F8FAF9', borderRadius:12, padding:'12px 14px', border:'1px solid rgba(46,46,44,0.07)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
            <span style={{ fontSize:9, color:'#2E2E2C', opacity:0.5 }}>Premium Plan</span>
            <span style={{ fontSize:9, fontWeight:600, color:'#2E2E2C' }}>$49.00</span>
          </div>
          <div style={{ height:1, background:'rgba(46,46,44,0.07)', margin:'6px 0' }} />
          <div style={{ display:'flex', justifyContent:'space-between' }}>
            <span style={{ fontSize:10, fontWeight:700, color:'#2E2E2C' }}>Total</span>
            <span style={{ fontSize:10, fontWeight:700, color:'#4FA6A1' }}>$55.37</span>
          </div>
        </div>
      </div>
      {/* Disabled CTA */}
      <div style={{ padding:'10px 16px 28px' }}>
        <div style={{ height:46, borderRadius:100, background:'rgba(46,46,44,0.1)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'not-allowed' }}>
          <span style={{ fontSize:10, fontWeight:700, color:'rgba(46,46,44,0.3)', letterSpacing:'0.05em' }}>Fix errors to continue</span>
        </div>
      </div>
    </div>
  )
}

// ── SCREEN 3: DESIGN SYSTEM (DARK) ───────────────────
function Screen3() {
  const tokens = [
    ['#4FA6A1','--teal','Primary'],
    ['#C96A4A','--terra','Accent'],
    ['#BFCFC6','--sage','Muted'],
    ['#F4F6F4','--cream','BG'],
  ]
  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', background:'#2E2E2C' }}>
      <div style={{ height:44, padding:'14px 16px 0', display:'flex', justifyContent:'space-between', flexShrink:0 }}>
        <span style={{ fontSize:9, fontWeight:700, color:'rgba(255,255,255,0.5)' }}>9:41</span>
      </div>
      <div style={{ padding:'14px 16px', flex:1, display:'flex', flexDirection:'column', gap:11, overflow:'hidden' }}>
        <div>
          <div style={{ fontSize:8, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'#4FA6A1', marginBottom:3 }}>Design System</div>
          <div style={{ fontSize:15, fontWeight:700, color:'white' }}>Component Library</div>
        </div>
        {/* Buttons */}
        <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:12, padding:11, border:'1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ fontSize:7, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.28)', marginBottom:8 }}>Buttons · 3 States</div>
          <div style={{ display:'flex', gap:6 }}>
            <div style={{ flex:1, height:30, borderRadius:100, background:'#4FA6A1', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <span style={{ fontSize:8, fontWeight:700, color:'white' }}>Default</span>
            </div>
            <div style={{ flex:1, height:30, borderRadius:100, background:'#3d8a86', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 3px 10px rgba(79,166,161,0.35)' }}>
              <span style={{ fontSize:8, fontWeight:700, color:'white' }}>Hover</span>
            </div>
            <div style={{ flex:1, height:30, borderRadius:100, background:'rgba(255,255,255,0.07)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <span style={{ fontSize:8, fontWeight:700, color:'rgba(255,255,255,0.25)' }}>Off</span>
            </div>
          </div>
        </div>
        {/* Badges */}
        <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:12, padding:11, border:'1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ fontSize:7, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.28)', marginBottom:8 }}>Status Badges</div>
          <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
            {[
              ['Active','rgba(79,166,161,0.15)','#7fd4d0','rgba(79,166,161,0.3)'],
              ['Review','rgba(201,106,74,0.15)','#e8956a','rgba(201,106,74,0.3)'],
              ['Inactive','rgba(255,255,255,0.07)','rgba(255,255,255,0.4)','rgba(255,255,255,0.1)'],
              ['Pending','rgba(191,207,198,0.12)','#BFCFC6','rgba(191,207,198,0.25)'],
            ].map(([label,bg,color,border]) => (
              <span key={label} style={{ fontSize:8, fontWeight:700, background:bg, color, border:`1px solid ${border}`, padding:'3px 9px', borderRadius:100 }}>{label}</span>
            ))}
          </div>
        </div>
        {/* Tokens */}
        <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:12, padding:11, border:'1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ fontSize:7, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.28)', marginBottom:8 }}>Color Tokens</div>
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            {tokens.map(([color,name,role]) => (
              <div key={name} style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:14, height:14, borderRadius:4, background:color, border:color==='#F4F6F4'?'1px solid rgba(255,255,255,0.15)':'none', flexShrink:0 }} />
                <span style={{ fontSize:8, color:'rgba(255,255,255,0.45)', fontFamily:'monospace' }}>{name}</span>
                <span style={{ marginLeft:'auto', fontSize:7, color:'rgba(255,255,255,0.2)' }}>{role}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Type scale */}
        <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:12, padding:11, border:'1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ fontSize:7, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.28)', marginBottom:7 }}>Type Scale</div>
          <div style={{ fontSize:16, fontWeight:700, color:'white', lineHeight:1.1 }}>Display 28</div>
          <div style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.55)', marginTop:3 }}>Heading 18</div>
          <div style={{ fontSize:9, color:'rgba(255,255,255,0.3)', marginTop:2 }}>Body 14 · Regular · 1.6lh</div>
        </div>
      </div>
    </div>
  )
}

const SCREEN_COMPONENTS = [Screen1, Screen2, Screen3]

// ── MAIN COMPONENT ────────────────────────────────────
export default function ScreenStack() {
  const [mounted, setMounted] = useState(false)
  const [cur, setCur] = useState(0)
  const [tag, setTag] = useState<{label:string;title:string}|null>(null)
  const stateRef  = useRef<SpringState[]>(SCREENS.map(makeState))
  const tiltRef   = useRef({ x:0, y:0, tx:0, ty:0 })
  const cardRefs  = useRef<(HTMLDivElement|null)[]>([])
  const stackRef  = useRef<HTMLDivElement>(null)
  const rafRef    = useRef<number>(0)
  const autoRef   = useRef<ReturnType<typeof setInterval>|null>(null)
  const curRef    = useRef(0)
  const tagTimer  = useRef<ReturnType<typeof setTimeout>|null>(null)

  useEffect(() => setMounted(true), [])

  // Initialize first card visible
  useEffect(() => {
    stateRef.current[0].op = 0
    stateRef.current[0].y  = 80
  }, [])

  const goTo = useCallback((n: number) => {
    const prev = curRef.current
    if (n === prev) return
    // Kick outgoing card
    const s = stateRef.current[prev]
    s.vy  -= 14
    s.vrZ -= 2
    s.vrX += 1
    curRef.current = n
    setCur(n)
    // Show label tag
    if (tagTimer.current) clearTimeout(tagTimer.current)
    setTag(SCREENS[n])
    tagTimer.current = setTimeout(() => setTag(null), 2200)
  }, [])

  // Animation loop
  useEffect(() => {
    const loop = () => {
      const t = tiltRef.current
      t.x += (t.tx - t.x) * 0.05
      t.y += (t.ty - t.y) * 0.05

      const total = SCREENS.length
      const c = curRef.current

      stateRef.current.forEach((s, i) => {
        const diff = ((i - c) + total) % total
        stepSpring(s, getTarget(diff))

        const el = cardRefs.current[i]
        if (!el) return

        const depth  = 1 - diff / total
        const tiltRX = t.y * -6
        const tiltRY = t.x *  8

        el.style.zIndex    = String(total - diff)
        el.style.opacity   = String(Math.max(0, s.op))
        el.style.transform = `
          translateX(${s.x}px)
          translateY(${s.y}px)
          translateZ(${s.z}px)
          rotateX(${s.rX + tiltRX}deg)
          rotateY(${s.rY + tiltRY}deg)
          rotateZ(${s.rZ}deg)
          scale(${s.sc})
        `
        el.style.boxShadow = `
          0 ${20 + depth*20}px ${40 + depth*40}px rgba(46,46,44,${0.08 + depth*0.14}),
          0 ${4 + depth*6}px ${10 + depth*14}px rgba(46,46,44,0.06)
        `
      })

      if (stackRef.current) {
        stackRef.current.style.transform =
          `rotateX(${t.y * -3}deg) rotateY(${t.x * 4}deg)`
      }

      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // Mouse tilt — hero section
  useEffect(() => {
    const hero = document.querySelector('section') as HTMLElement
    if (!hero) return
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      tiltRef.current.tx = ((e.clientX - r.left) / r.width  - 0.5) * 2
      tiltRef.current.ty = ((e.clientY - r.top)  / r.height - 0.5) * 2
    }
    const onLeave = () => {
      tiltRef.current.tx = 0
      tiltRef.current.ty = 0
    }
    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  // Auto-advance
  useEffect(() => {
    autoRef.current = setInterval(() => {
      goTo((curRef.current + 1) % SCREENS.length)
    }, 3400)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [goTo])

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goTo((curRef.current + 1) % SCREENS.length)
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goTo((curRef.current - 1 + SCREENS.length) % SCREENS.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goTo])

  if (!mounted) return (
    <div style={{ width: 300, aspectRatio: '9/16' }} />
  )

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 300,
        aspectRatio: '9/16',
        perspective: 900,
        perspectiveOrigin: '50% 40%',
      }}
    >
      {/* Card stack */}
      <div
        ref={stackRef}
        style={{
          position: 'absolute',
          inset: 0,
          transformStyle: 'preserve-3d',
          transition: 'none',
        }}
      >
        {SCREENS.map((screen, i) => {
          const ScreenComp = SCREEN_COMPONENTS[i]
          return (
            <div
              key={screen.label}
              ref={el => { cardRefs.current[i] = el }}
              onClick={() => {
                if (autoRef.current) clearInterval(autoRef.current)
                goTo((curRef.current + 1) % SCREENS.length)
              }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 28,
                overflow: 'hidden',
                cursor: 'pointer',
                willChange: 'transform, opacity',
                transformOrigin: 'center center',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              <ScreenComp />
            </div>
          )
        })}
      </div>

      {/* Floating label tag */}
      {tag && (
        <div
          style={{
            position: 'absolute',
            bottom: -44,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--ink)',
            color: 'white',
            borderRadius: 100,
            padding: '6px 16px',
            fontSize: 10,
            fontFamily: 'var(--font-inter)',
            fontWeight: 500,
            letterSpacing: '0.06em',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            animation: 'tagFade 2.2s ease forwards',
          }}
        >
          {tag.label}
        </div>
      )}

      {/* Dot indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: -72,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 6,
        }}
      >
        {SCREENS.map((_, i) => (
          <button
            key={i}
            aria-label={`Screen ${i + 1}`}
            onClick={() => {
              if (autoRef.current) clearInterval(autoRef.current)
              goTo(i)
            }}
            style={{
              width: cur === i ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: cur === i ? 'var(--teal)' : 'rgba(46,46,44,0.2)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes tagFade {
          0%   { opacity: 0; transform: translateX(-50%) translateY(6px); }
          15%  { opacity: 1; transform: translateX(-50%) translateY(0); }
          70%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
