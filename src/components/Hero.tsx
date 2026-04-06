'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import DotBackground from './DotBackground'
import { HERO_CARDS, DEPTH } from '@/lib/heroMedia'

const STATS = [
  { number: '15+', label: 'Years' },
  { number: '50+', label: 'Products' },
  { number: '3',   label: 'Systems' },
  { number: 'AA',  label: 'WCAG' },
]

const sweepWord = (index: number) => ({
  initial: { y: '100%' },
  animate: { y: '0%' },
  transition: {
    duration: 0.9,
    delay: 0.3 + index * 0.12,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
})

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [mounted, setMounted] = useState(false)

  const mouseRef = useRef({ cx: 0, cy: 0 })
  const phaseRef = useRef<number[]>(HERO_CARDS.map((_, i) => i * 0.8))
  const cardElemsRef = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    let start: number | null = null

    const loop = (ts: number) => {
      if (!start) start = ts
      const t = (ts - start) / 1000

      HERO_CARDS.forEach((card, i) => {
        const d = DEPTH[card.depth]
        const phase = phaseRef.current[i] ?? 0
        const floatY = Math.sin(t * d.float.speed + phase) * d.float.amp
        const floatR = Math.sin(t * d.float.speed * 0.6 + phase) * 0.45
        const px = mouseRef.current.cx * d.parallax.x
        const py = mouseRef.current.cy * d.parallax.y

        const el = cardElemsRef.current[i]
        if (el) {
          el.style.transform = `translate(${px + floatY * 0.25}px, ${py + floatY}px) rotate(${card.rotate + floatR}deg) scale(${d.scale})`
        }
      })

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [mounted])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseRef.current = {
      cx: (e.clientX - rect.left - rect.width / 2) / (rect.width / 2),
      cy: (e.clientY - rect.top - rect.height / 2) / (rect.height / 2),
    }
  }

  const handleMouseLeave = () => {
    mouseRef.current = { cx: 0, cy: 0 }
  }

  return (
    <section
      ref={ref}
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'var(--cream)',
        minHeight: '92vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {/* Dot grid background */}
      <DotBackground config={{
        bgColor:       [245, 242, 237],
        dotColors:     [[79, 166, 161], [201, 106, 74], [143, 168, 158], [79, 166, 161]],
        dotRadius:     3,
        spacing:       32,
        repelDist:     100,
        repelForce:    0.22,
        returnSpeed:   0.06,
        opacity:       0.45,
        animated:      true,
        mouseReactive: true,
      }} />

      {/* Cream overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, rgba(245,242,237,0.75), rgba(245,242,237,0.6))',
        pointerEvents: 'none',
      }} />

      {/* ── FLOATING CARDS LAYER ── */}
      {mounted && (
        <div style={{
          position: 'absolute', inset: 0,
          zIndex: 5,
          pointerEvents: 'none',
        }}>
          {HERO_CARDS.map((card, i) => {
            const d = DEPTH[card.depth]
            return (
              <div
                key={card.id}
                ref={el => { cardElemsRef.current[i] = el }}
                style={{
                  position: 'absolute',
                  ...card.position,
                  width: card.width,
                  height: card.height,
                  borderRadius: 3,
                  overflow: 'hidden',
                  zIndex: d.zIndex,
                  opacity: d.opacity,
                  filter: `blur(${d.blur}px) brightness(${d.brightness})`,
                  willChange: 'transform',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.28), 0 4px 12px rgba(0,0,0,0.14)',
                  transform: `rotate(${card.rotate}deg) scale(${d.scale})`,
                }}
              >
                {card.type === 'video' ? (
                  <video
                    autoPlay muted loop playsInline
                    poster={card.poster}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  >
                    <source src={card.src} type="video/mp4" />
                    {card.poster && (
                      <Image
                        src={card.poster}
                        alt={card.title}
                        fill
                        sizes="200px"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </video>
                ) : (
                  <Image
                    src={card.src}
                    alt={card.title.replace('\n', ' ')}
                    fill
                    sizes="230px"
                    style={{ objectFit: 'cover' }}
                    onError={e => {
                      const p = (e.target as HTMLElement).closest('div') as HTMLElement
                      if (p) p.style.display = 'none'
                    }}
                  />
                )}

                {/* Card label */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '1.5rem 0.65rem 0.55rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 7, fontWeight: 700,
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                    color: card.accent, marginBottom: 2,
                    lineHeight: 1,
                  }}>
                    {card.client}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 8, fontWeight: 300,
                    color: 'rgba(255,255,255,0.88)',
                    lineHeight: 1.35,
                    whiteSpace: 'pre-line',
                  }}>
                    {card.title}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ── LEFT COLUMN ── */}
      <div
        style={{
          padding: '4rem 2.5rem 3rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 10,
          minHeight: '92vh',
        }}
      >
        {/* Top labels */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'block', width: 32, height: 1.5, background: 'var(--teal)' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--teal)' }}>
                Senior Product &amp; Visual Designer
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'block', width: 32, height: 1.5, background: 'var(--terra)' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--terra)' }}>
                Fintech · Enterprise · Regulated Industries
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 12, fontStyle: 'italic', color: 'rgba(28,27,24,0.25)' }}
          >
            Toronto, Canada · 2026
          </motion.p>
        </div>

        {/* Name block */}
        <div style={{ lineHeight: 0.85, letterSpacing: '-0.04em' }}>
          {/* Line 1: Fate + meh */}
          <div style={{ display: 'flex', gap: '0.12em', overflow: 'hidden' }}>
            <div style={{ overflow: 'visible' }}>
              <motion.span
                {...sweepWord(0)}
                style={{
                  display: 'block', whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(4.5rem, 8vw, 8.5rem)',
                  fontWeight: 400, color: 'var(--ink)',
                }}
              >
                Fate
              </motion.span>
            </div>
            <div style={{ overflow: 'visible' }}>
              <motion.span
                {...sweepWord(1)}
                style={{
                  display: 'block', whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(4.5rem, 8vw, 8.5rem)',
                  fontWeight: 400, fontStyle: 'italic',
                  color: 'var(--teal)',
                }}
              >
                meh
              </motion.span>
            </div>
          </div>

          {/* Line 2: Azad + bakht */}
          <div style={{ display: 'flex', gap: '0.12em', overflow: 'hidden' }}>
            <div style={{ overflow: 'visible' }}>
              <motion.span
                {...sweepWord(2)}
                style={{
                  display: 'block', whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(4.5rem, 8vw, 8.5rem)',
                  fontWeight: 400, fontStyle: 'italic',
                  color: 'transparent',
                  WebkitTextStroke: '1.5px var(--ink)',
                }}
              >
                Azad
              </motion.span>
            </div>
            <div style={{ overflow: 'visible' }}>
              <motion.span
                {...sweepWord(3)}
                style={{
                  display: 'block', whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(4.5rem, 8vw, 8.5rem)',
                  fontWeight: 400, fontStyle: 'italic',
                  color: 'var(--terra)',
                }}
              >
                bakht
              </motion.span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 13, fontWeight: 300,
            color: 'var(--ink)', opacity: 0.55,
            maxWidth: 400, lineHeight: 1.7,
            margin: '1.5rem 0',
          }}
        >
          15 years building design systems and product experiences for fintech, enterprise, and regulated institutions in Canada.
        </motion.p>

        {/* Bottom stats row */}
        <div
          className="hero-bottom"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
            borderTop: '1px solid rgba(28,27,24,0.1)',
            paddingTop: '2rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(28,27,24,0.35)', lineHeight: 1.8 }}>
              <div>Senior Product</div>
              <div>and Visual</div>
              <div>Designer</div>
              <div style={{ height: '0.6em' }} />
              <div>15+ Years</div>
              <div>Toronto CA</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ borderLeft: '2px solid var(--teal)', paddingLeft: '1.25rem' }}
          >
            <p style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.5,
            }}>
              I build systems that make complex products feel simple — at TD Bank, the Law Society of Ontario, and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            {STATS.map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1 }}>
                  {stat.number}
                </div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: 8, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(28,27,24,0.35)', marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── RIGHT COLUMN (spacer — cards float freely over it) ── */}
      <div className="hero-right-col" style={{ position: 'relative', zIndex: 2 }} />

      <style>{`
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr !important; }
          .hero-right-col { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
