'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import DotBackground from './DotBackground'
import ScreenStack from './ScreenStack'

const STATS = [
  { number: '15+', label: 'Years' },
  { number: '50+', label: 'Products' },
  { number: '3',   label: 'Systems' },
  { number: 'AA',  label: 'WCAG' },
]

// Base delay 0.3s, 0.12s stagger between each word
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

  return (
    <section
      ref={ref}
      className="hero"
      style={{
        background: 'var(--cream)',
        minHeight: '92vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'visible',
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

      {/* Cream overlay above canvas */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, rgba(245,242,237,0.75), rgba(245,242,237,0.6))',
        pointerEvents: 'none',
      }} />

      {/* ── LEFT COLUMN ── */}
      <div
        style={{
          padding: '4rem 2.5rem 3rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2,
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
                Senior Product Designer
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'block', width: 32, height: 1.5, background: 'var(--terra)' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--terra)' }}>
                Fintech · Enterprise · SaaS
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
                  display: 'block',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
                  fontWeight: 400,
                  color: 'var(--ink)',
                }}
              >
                Fate
              </motion.span>
            </div>
            <div style={{ overflow: 'visible' }}>
              <motion.span
                {...sweepWord(1)}
                style={{
                  display: 'block',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
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
                  display: 'block',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
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
                  display: 'block',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--terra)',
                }}
              >
                bakht
              </motion.span>
            </div>
          </div>
        </div>

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
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.5,
            }}>
              I don&apos;t make things beautiful.
              <br />
              I make complexity disappear.
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

      {/* ── RIGHT COLUMN ── */}
      <motion.div
        className="hero-stack-col"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <ScreenStack />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr !important; }
          .hero-stack-col { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
