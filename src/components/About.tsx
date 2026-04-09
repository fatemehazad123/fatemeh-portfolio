'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useState } from 'react'

const CORE_SKILLS = ['Design Systems', 'Figma', 'WCAG/AODA', 'Fintech UX']
const OTHER_SKILLS = ['UX Strategy', 'Enterprise SaaS', 'Prototyping', 'Component Libraries', 'Design Tokens', 'Product Strategy', 'Cross-functional', 'Accessibility']

const STATS = [
  { number: '15+', label: 'Years', color: 'white' },
  { number: '50+', label: 'Products', color: 'white' },
  { number: 'AA',  label: 'WCAG', color: 'var(--teal)' },
  { number: '3',   label: 'Systems', color: 'var(--terra)' },
]

export default function About() {
  const [hasPortrait, setHasPortrait] = useState(true)

  return (
    <section
      id="about"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(4rem,6vw,5rem) clamp(1.5rem,3vw,3rem)',
      }}
    >
      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem,5vw,5rem)',
          alignItems: 'start',
        }}
      >
        {/* LEFT: portrait + stats */}
        <motion.div
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.25 }}
        >
          {/* Portrait */}
          <div
            className="about-img"
            style={{
              height: 420,
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.04)',
              border: hasPortrait ? 'none' : '1px dashed rgba(255,255,255,0.12)',
              position: 'relative',
              marginBottom: '1.5px',
            }}
          >
            {hasPortrait && (
              <Image
                src="/images/portrait.jpg"
                alt="Fatemeh Azadbakht, Senior Product and Visual Designer based in Toronto"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                onError={() => setHasPortrait(false)}
              />
            )}
            {!hasPortrait && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '4rem', color: 'rgba(255,255,255,0.08)' }}>FA</span>
              </div>
            )}
          </div>

          {/* Stats 2x2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'rgba(255,255,255,0.06)' }}>
            {STATS.map(stat => (
              <div
                key={stat.label}
                style={{
                  background: 'var(--ink)',
                  padding: '1.25rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.8rem', fontWeight: 400, color: stat.color, lineHeight: 1 }}>
                  {stat.number}
                </div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: 9, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: text */}
        <motion.div
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.25, delay: 0.05 }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--teal)' }} />
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--teal)' }}>
              03 - About
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, color: 'white', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Designing at the intersection of clarity and complexity
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              I have spent 15 years designing in environments where mistakes have real consequences — financial products that move money, legal systems that govern professionals, civic infrastructure that represents communities. That pressure produces a different kind of designer. One who treats clarity as a safety feature, not a design preference.
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              I work fluently across product, engineering, and business stakeholders, which means faster alignment, better trade-off decisions, and fewer surprises at handoff.
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              My work in regulated industries has shaped a design practice grounded in clarity, accessibility, and measurable outcomes.
            </p>
          </div>

          {/* Pull quote */}
          <div style={{ borderLeft: '2px solid var(--teal)', paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontStyle: 'italic', color: 'white', opacity: 0.75, lineHeight: 1.7, margin: 0 }}>
              &ldquo;I don&apos;t make things beautiful. I make complexity disappear.&rdquo;
            </p>
          </div>

          {/* Testimonials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <blockquote style={{ borderLeft: '2px solid var(--teal)', paddingLeft: '1.25rem', margin: 0 }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontStyle: 'italic', color: 'white', opacity: 0.75, lineHeight: 1.7, marginBottom: '0.6rem' }}>
                &ldquo;Her dedication, speed and collaborative skills were exceptional. She is creative, highly skilled and fantastic at communicating and interpreting complexity. I would recommend her without hesitation.&rdquo;
              </p>
              <cite style={{ fontFamily: 'var(--font-inter)', fontSize: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--teal)', fontStyle: 'normal', display: 'block' }}>
                Dwayne Matthews O.C.T &nbsp;·&nbsp; TD Bank · Innovation Evangelist
              </cite>
            </blockquote>
            <blockquote style={{ borderLeft: '2px solid var(--teal)', paddingLeft: '1.25rem', margin: 0 }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontStyle: 'italic', color: 'white', opacity: 0.75, lineHeight: 1.7, marginBottom: '0.6rem' }}>
                &ldquo;Her ability to translate complex cultural narratives into clear and effective visual systems has made her a valued creative partner. I confidently recommend her for senior-level branding and experiential design work.&rdquo;
              </p>
              <cite style={{ fontFamily: 'var(--font-inter)', fontSize: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--teal)', fontStyle: 'normal', display: 'block' }}>
                Orkideh Salehi &nbsp;·&nbsp; CEO · Silk Road Event &amp; Orkid Gallery
              </cite>
            </blockquote>
          </div>

          {/* Skills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {CORE_SKILLS.map(skill => (
              <span key={skill} style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, letterSpacing: '0.06em', padding: '0.35rem 0.85rem', borderRadius: 20, border: '1px solid rgba(79,166,161,0.5)', color: 'var(--teal)', background: 'rgba(79,166,161,0.08)' }}>
                {skill}
              </span>
            ))}
            {OTHER_SKILLS.map(skill => (
              <span key={skill} style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 400, letterSpacing: '0.06em', padding: '0.35rem 0.85rem', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', background: 'transparent' }}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-img { height: 260px !important; }
        }
      `}</style>
    </section>
  )
}
