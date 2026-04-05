'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { caseStudies } from '@/lib/caseStudies'

const ACCENT = ['var(--teal)', 'var(--terra)', 'var(--teal)', 'var(--sage)', 'var(--teal)']
const IMG_BG = ['var(--ink)', '#F0EAE2', '#E8F0EF', '#EDE8F0', 'var(--ink)']

export default function Work() {
  return (
    <section
      id="work"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(4rem,6vw,5rem) clamp(1.5rem,3vw,3rem)',
      }}
    >
      {/* Header */}
      <div
        className="work-header"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'end',
          marginBottom: '3rem',
          gap: '1rem',
        }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-playfair)', fontSize: 11, fontStyle: 'italic', color: 'rgba(28,27,24,0.25)', marginBottom: '0.5rem' }}>
            01 - Selected Work
          </p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--ink)', marginBottom: '0.75rem' }}>
            Case Studies
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 300, color: 'rgba(28,27,24,0.5)', maxWidth: 360, lineHeight: 1.7 }}>
            Selected work across fintech, civic design, and enterprise systems.
          </p>
        </div>
        <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', fontWeight: 400, color: 'rgba(28,27,24,0.06)', lineHeight: 1, userSelect: 'none' }}>
          0{caseStudies.length}
        </span>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5px',
          background: 'rgba(28,27,24,0.06)',
        }}
      >
        {caseStudies.map((study, i) => {
          const isFeatured = i === 0
          const isDark = i === 0 || i === caseStudies.length - 1
          const accent = ACCENT[i] ?? 'var(--teal)'
          const imgBg = IMG_BG[i] ?? 'var(--mid)'
          const imgHeight = isFeatured ? 340 : 220

          if (isFeatured) {
            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{ gridColumn: '1 / -1' }}
              >
                <Link
                  href={`/work/${study.slug}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    background: 'var(--ink)',
                    minHeight: imgHeight,
                    textDecoration: 'none',
                  }}
                  className="work-card work-card-featured"
                >
                  {/* Image */}
                  <div style={{ position: 'relative', overflow: 'hidden', minHeight: imgHeight, background: imgBg }}>
                    {study.heroImage && (
                      <Image
                        src={study.heroImage}
                        alt={study.title}
                        fill
                        sizes="50vw"
                        style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                        className="work-card-img"
                      />
                    )}
                  </div>
                  {/* Body */}
                  <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: 9, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--teal)', marginBottom: '1rem' }}>
                        {study.number} - {study.tags[0]}
                      </p>
                      <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 400, color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>
                        {study.title}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                        {study.cardDescription}
                      </p>
                      {study.statLine && (
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, color: 'var(--teal)', marginBottom: '1.5rem' }}>
                          {study.statLine}
                        </p>
                      )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {study.tags.slice(0, 2).map(tag => (
                          <span key={tag} style={{ fontFamily: 'var(--font-inter)', fontSize: 9, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 0.7rem', border: '1px solid rgba(79,166,161,0.3)', color: 'var(--teal)', borderRadius: 20 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="work-card-arrow" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 14, transition: 'transform 0.3s ease' }}>
                        &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          }

          return (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                href={`/work/${study.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: isDark ? 'var(--ink)' : 'var(--cream)',
                  height: '100%',
                  textDecoration: 'none',
                  transition: 'background 0.25s',
                }}
                className="work-card"
              >
                {/* Image */}
                <div style={{ position: 'relative', overflow: 'hidden', height: imgHeight, background: imgBg, flexShrink: 0 }}>
                  {study.heroImage && (
                    <Image
                      src={study.heroImage}
                      alt={study.title}
                      fill
                      sizes="50vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                      className="work-card-img"
                    />
                  )}
                </div>
                {/* Body */}
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: 9, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.16em', color: accent, marginBottom: '0.75rem' }}>
                      {study.number} - {study.tags[0]}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 400, color: isDark ? 'white' : 'var(--ink)', lineHeight: 1.2, marginBottom: '0.75rem' }}>
                      {study.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 300, color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(28,27,24,0.55)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                      {study.cardDescription}
                    </p>
                    {study.statLine && (
                      <p style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, color: 'var(--teal)', marginBottom: '1.5rem' }}>
                        {study.statLine}
                      </p>
                    )}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {study.tags.slice(0, 2).map(tag => (
                        <span key={tag} style={{ fontFamily: 'var(--font-inter)', fontSize: 9, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 0.7rem', border: `1px solid ${accent}44`, color: accent, borderRadius: 20 }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="work-card-arrow" style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(28,27,24,0.15)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: isDark ? 'white' : 'var(--ink)', fontSize: 13, transition: 'transform 0.3s ease' }}>
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>

      <style>{`
        .work-card:hover .work-card-img { transform: scale(1.03); }
        .work-card:hover .work-card-arrow { transform: translateX(4px); }
        .work-card-featured:hover .work-card-img { transform: scale(1.03); }
        .work-card-featured:hover .work-card-arrow { transform: translateX(4px); }
        @media (max-width: 768px) {
          .work-card { flex-direction: column !important; }
        }
      `}</style>
    </section>
  )
}
