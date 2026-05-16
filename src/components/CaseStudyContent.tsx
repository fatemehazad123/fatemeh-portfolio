'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import type { CaseStudy } from '@/lib/caseStudies'
import Lightbox from './Lightbox'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
}

function staggerItem(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true } as const,
    transition: { delay, duration: 0.65 },
  }
}

export default function CaseStudyContent({ study }: { study: CaseStudy }) {
  const galleryImages = study.images ? study.images.slice(1) : []

  const galleryButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const processScrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt })
  const closeLightbox = () => {
    const trigger = lightbox ? galleryButtonRefs.current[lightbox.src] : null
    setLightbox(null)
    trigger?.focus()
  }

  useEffect(() => {
    const el = processScrollRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      setScrollProgress(max > 0 ? el.scrollLeft / max : 0)
    }
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && e.deltaY !== 0) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    el.addEventListener('wheel', onWheel, { passive: false })
    onScroll()
    return () => {
      el.removeEventListener('scroll', onScroll)
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <main id="main-content" style={{ background: 'var(--cream)' }}>

      {/* ═══ 1: HERO ═══ */}
      <section style={{
        position: 'relative',
        minHeight: '72vh',
        background: 'var(--ink)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}>
        {study.heroVideo ? (
          <video autoPlay muted loop playsInline aria-hidden="true" style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            opacity: 0.45, zIndex: 1,
          }}>
            <source src={study.heroVideo} type="video/mp4" />
          </video>
        ) : study.heroImage ? (
          <Image
            src={study.heroImage}
            alt={study.title}
            fill priority quality={100} sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.45 }}
          />
        ) : null}

        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to top, rgba(28,27,24,0.92) 0%, rgba(28,27,24,0.4) 55%, rgba(28,27,24,0.1) 100%)',
        }} />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to right, rgba(28,27,24,0.5) 0%, transparent 60%)',
        }} />

        {/* Back link */}
        <Link
          href="/#work"
          style={{
            position: 'absolute',
            top: 'clamp(5.5rem, 8vw, 7rem)',
            left: 'clamp(1.5rem, 5vw, 4rem)',
            zIndex: 10,
            fontFamily: 'var(--font-inter)',
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'white', opacity: 0.35,
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            textDecoration: 'none', transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '0.35')}
        >
          <span aria-hidden="true">←</span> All Work
        </Link>

        {/* Bottom bar: title left, meta right */}
        <div
          className="hero-bottom"
          style={{
            position: 'relative', zIndex: 10,
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'flex-end',
            gap: '3rem',
            padding: 'clamp(2rem, 5vw, 4rem)',
          }}
        >
          <motion.div {...fadeUp}>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '1rem',
            }}>
              {study.number} — {study.tags[0]}
            </p>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 400, color: 'white', lineHeight: 1.0,
              letterSpacing: '-0.02em', marginBottom: '1rem',
            }}>
              {study.title}
            </h1>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
              fontWeight: 300, color: 'white', opacity: 0.6,
              lineHeight: 1.65, margin: 0, maxWidth: '560px',
            }}>
              {study.subtitle}
            </p>
          </motion.div>

          <motion.div
            {...staggerItem(0.3)}
            className="hero-meta"
            style={{
              display: 'flex', flexDirection: 'column',
              gap: '1.25rem', alignItems: 'flex-end',
            }}
          >
            {([
              { label: 'Client', value: study.client },
              { label: 'Year',   value: study.year },
              { label: 'Role',   value: study.role },
            ] as { label: string; value: string }[]).map(item => (
              <div key={item.label} style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '8px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.28)', marginBottom: '0.2rem',
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '12px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.75)',
                  maxWidth: '220px', lineHeight: 1.4,
                }}>
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 2: OUTCOME STRIP ═══ */}
      <section style={{ background: '#4FA6A1' }}>
        <motion.div
          {...fadeUp}
          style={{
            maxWidth: '1100px', margin: '0 auto',
            padding: '3rem clamp(1.5rem, 5vw, 4rem)',
            display: 'grid',
            gridTemplateColumns: `repeat(${study.outcomes.length}, 1fr)`,
          }}
        >
          {study.outcomes.map((outcome, i) => (
            <div
              key={i}
              style={{
                padding: '0 2.5rem',
                borderRight: i < study.outcomes.length - 1 ? '1px solid rgba(28,27,24,0.12)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400, color: 'var(--ink)',
                lineHeight: 1, marginBottom: '0.4rem',
              }}>
                {outcome.metric}
              </div>
              <div style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(28,27,24,0.65)',
              }}>
                {outcome.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ═══ 3: OVERVIEW ═══ */}
      <section style={{
        background: 'white',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div
          className="overview-grid"
          style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '5rem', alignItems: 'start',
          }}
        >
          {/* Sidebar */}
          <motion.div {...fadeUp}>
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '2rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#4FA6A1' }} />
              Project Details
            </div>

            {([
              { label: 'Client', value: study.client },
              { label: 'Year',   value: study.year },
              { label: 'Role',   value: study.role },
              { label: 'Tools',  value: study.tools.join(' · ') },
            ] as { label: string; value: string }[]).map(item => (
              <div key={item.label} style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '8px', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'rgba(28,27,24,0.32)', marginBottom: '0.3rem',
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px', fontWeight: 300,
                  color: '#2E2E2C', lineHeight: 1.5,
                }}>
                  {item.value}
                </div>
              </div>
            ))}

            {study.statLine && (
              <div style={{
                marginTop: '2rem',
                padding: '1.25rem',
                background: 'rgba(79,166,161,0.06)',
                borderLeft: '3px solid #4FA6A1',
              }}>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '10px', fontWeight: 500,
                  color: '#4FA6A1', lineHeight: 1.55,
                }}>
                  {study.statLine}
                </div>
              </div>
            )}
          </motion.div>

          {/* Editorial column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '2rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#4FA6A1' }} />
              Overview
            </div>

            <blockquote style={{
              borderLeft: '2px solid #4FA6A1',
              paddingLeft: '1.5rem',
              margin: '0 0 2rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                fontStyle: 'italic', fontWeight: 400,
                color: '#2E2E2C', lineHeight: 1.55, margin: 0,
              }}>
                {study.problem}
              </p>
            </blockquote>

            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px', fontWeight: 300,
              color: 'rgba(46,46,44,0.72)',
              lineHeight: 1.85, margin: 0,
            }}>
              {study.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4: FULL BLEED IMAGE ═══ */}
      {study.images?.[0] && (
        <motion.section
          {...fadeUp}
          style={{
            position: 'relative',
            width: '100%',
            height: '480px',
            overflow: 'hidden',
            background: 'var(--ink)',
          }}
        >
          <Image
            src={study.images[0]}
            alt={`${study.title} – overview`}
            fill quality={100} sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'rgba(28,27,24,0.6)',
            backdropFilter: 'blur(4px)',
            padding: '0.75rem clamp(1.5rem, 5vw, 4rem)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 5,
          }}>
            <span style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.42)',
            }}>
              {study.client} · {study.tags[0]}
            </span>
            <span style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 400,
              color: 'rgba(255,255,255,0.28)',
            }}>
              {study.number}
            </span>
          </div>
        </motion.section>
      )}

      {/* ═══ 5: CHALLENGE + ROLE ═══ */}
      <section style={{ background: 'var(--cream)' }}>
        <div
          className="challenge-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5px',
            background: 'rgba(28,27,24,0.06)',
          }}
        >
          {/* Challenge */}
          <motion.div
            {...fadeUp}
            style={{
              background: 'var(--cream)',
              padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: '1.5rem', right: '2rem',
              fontFamily: 'var(--font-playfair)',
              fontSize: '5rem', fontWeight: 400,
              color: 'rgba(28,27,24,0.05)', lineHeight: 1,
              userSelect: 'none',
            }} aria-hidden="true">01</div>

            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#4FA6A1' }} />
              The Challenge
            </div>

            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {study.problemDetails.map((detail, i) => (
                <motion.li
                  key={i}
                  {...staggerItem(i * 0.07)}
                  style={{
                    display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px', fontWeight: 300,
                    color: 'rgba(28,27,24,0.72)', lineHeight: 1.75,
                  }}
                >
                  <span style={{
                    width: 5, height: 5, borderRadius: '50%',
                    background: '#4FA6A1', flexShrink: 0,
                    marginTop: '0.55rem',
                  }} />
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Role */}
          <motion.div
            {...staggerItem(0.15)}
            style={{
              background: 'var(--ink)',
              padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: '1.5rem', right: '2rem',
              fontFamily: 'var(--font-playfair)',
              fontSize: '5rem', fontWeight: 400,
              color: 'rgba(255,255,255,0.04)', lineHeight: 1,
              userSelect: 'none',
            }} aria-hidden="true">02</div>

            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#4FA6A1' }} />
              My Role
            </div>

            <p style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontWeight: 400, color: 'white',
              lineHeight: 1.75, fontStyle: 'italic', margin: 0,
            }}>
              {study.myRole}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6: PROCESS ═══ */}
      <section style={{
        background: 'var(--cream)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ marginBottom: '3.5rem' }}>
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--teal)', marginBottom: '1rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--teal)' }} />
              Process
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 400, color: 'var(--ink)', lineHeight: 1.15, margin: 0,
            }}>
              How I approached it
            </h2>
          </motion.div>

          <div ref={processScrollRef} className="process-scroll">
            {study.process.map((step, i) => {
              const stepNum = `0${i + 1}`

              return (
                <motion.article
                  key={i}
                  {...staggerItem(i * 0.08)}
                  className="process-card"
                >
                  <div className="process-card-step">Step {stepNum}</div>
                  {step.image ? (
                    <button
                      type="button"
                      ref={(el) => { galleryButtonRefs.current[step.image!] = el }}
                      onClick={() => openLightbox(step.image!, `${step.title} — ${study.title}`)}
                      className="process-card-image"
                      aria-label={`Open ${step.title} image`}
                    >
                      <Image
                        src={step.image}
                        alt={`${step.title} — ${study.title}`}
                        fill quality={90}
                        sizes="(max-width: 768px) 80vw, 360px"
                        style={{ objectFit: 'cover' }}
                      />
                    </button>
                  ) : (
                    <div
                      className="process-card-image process-card-image--empty"
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.description}</p>
                </motion.article>
              )
            })}
          </div>

          <div className="process-progress" aria-hidden="true">
            <div style={{ left: `${scrollProgress * 75}%` }} />
          </div>
        </div>
      </section>

      {/* ═══ 7: IMAGE GALLERY ═══ */}
      {galleryImages.length > 0 && (
        <section style={{
          background: 'var(--ink)',
          padding: '2px clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 7rem)',
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {study.confidentialityNote && (
              <motion.p
                {...fadeUp}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.28)',
                  fontStyle: 'italic', lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}
              >
                {study.confidentialityNote}
              </motion.p>
            )}

            {(() => {
              const [first, second, ...rest] = galleryImages
              const isLarge = galleryImages.length >= 9
              return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {first && (
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2px' }}>
                      <motion.button
                        {...fadeUp}
                        type="button"
                        ref={(el) => { galleryButtonRefs.current[first] = el }}
                        onClick={() => openLightbox(first, `${study.title} – Visual 1`)}
                        className="gallery-item"
                        style={{
                          position: 'relative', height: '360px', overflow: 'hidden',
                          background: 'rgba(28,27,24,0.04)',
                          border: 'none', padding: 0, cursor: 'pointer',
                          width: '100%', display: 'block',
                        }}
                      >
                        <Image
                          src={first}
                          alt={`${study.title} – Visual 1`}
                          fill quality={90} sizes="(max-width: 768px) 100vw, 65vw"
                          style={{ objectFit: 'contain' }}
                          onError={e => {
                            const p = (e.target as HTMLElement).closest('.gallery-item') as HTMLElement
                            if (p) p.style.display = 'none'
                          }}
                        />
                      </motion.button>
                      {second && (
                        <motion.button
                          {...staggerItem(0.1)}
                          type="button"
                          ref={(el) => { galleryButtonRefs.current[second] = el }}
                          onClick={() => openLightbox(second, `${study.title} – Visual 2`)}
                          className="gallery-item"
                          style={{
                            position: 'relative', height: '360px', overflow: 'hidden',
                            background: 'rgba(28,27,24,0.04)',
                            border: 'none', padding: 0, cursor: 'pointer',
                            width: '100%', display: 'block',
                          }}
                        >
                          <Image
                            src={second}
                            alt={`${study.title} – Visual 2`}
                            fill quality={90} sizes="(max-width: 768px) 100vw, 35vw"
                            style={{ objectFit: 'contain' }}
                            onError={e => {
                              const p = (e.target as HTMLElement).closest('.gallery-item') as HTMLElement
                              if (p) p.style.display = 'none'
                            }}
                          />
                        </motion.button>
                      )}
                    </div>
                  )}

                  {study.slug === 'silk-road-identity' && rest.length > 4 && (
                    <div style={{
                      padding: '1.5rem',
                      textAlign: 'center',
                      borderTop: '1px solid rgba(191,207,198,0.08)',
                      borderBottom: '1px solid rgba(191,207,198,0.08)',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '9px', fontWeight: 700,
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                        color: '#4FA6A1',
                      }}>
                        Beyond the Silk Concert
                      </span>
                    </div>
                  )}

                  {rest.length > 0 && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isLarge ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
                      gap: '2px',
                    }}>
                      {rest.map((img, i) => (
                        <motion.button
                          key={img}
                          {...staggerItem(i * 0.07)}
                          type="button"
                          ref={(el) => { galleryButtonRefs.current[img] = el }}
                          onClick={() => openLightbox(img, `${study.title} – Visual ${i + 3}`)}
                          className="gallery-item"
                          style={{
                            position: 'relative',
                            height: isLarge ? '200px' : '280px',
                            overflow: 'hidden',
                            background: 'rgba(28,27,24,0.04)',
                            border: 'none', padding: 0, cursor: 'pointer',
                            width: '100%', display: 'block',
                          }}
                        >
                          <Image
                            src={img}
                            alt={`${study.title} – Visual ${i + 3}`}
                            fill quality={90}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'contain' }}
                            onError={e => {
                              const p = (e.target as HTMLElement).closest('.gallery-item') as HTMLElement
                              if (p) p.style.display = 'none'
                            }}
                          />
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })()}
          </div>
        </section>
      )}

      {/* ═══ 8: SOLUTION ═══ */}
      <section style={{
        background: 'var(--ink)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div
          className="solution-grid"
          style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem', alignItems: 'start',
          }}
        >
          {/* Left */}
          <motion.div {...fadeUp}>
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#4FA6A1' }} />
              The Solution
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
              fontWeight: 400, color: 'white', lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              {study.solution}
            </h2>
            <ul style={{ listStyle: 'none', margin: '0 0 2rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {study.solutionPoints.map((point, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                  padding: '0 0 0.75rem',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px', fontWeight: 300,
                  color: 'rgba(244,246,244,0.68)', lineHeight: 1.75,
                }}>
                  <span style={{ color: '#4FA6A1', fontWeight: 700, flexShrink: 0, fontSize: '12px', marginTop: '3px' }}>+</span>
                  {point}
                </li>
              ))}
            </ul>
            {study.statLine && (
              <div style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(79,166,161,0.1)',
                borderLeft: '3px solid #4FA6A1',
              }}>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px', fontWeight: 500,
                  color: '#4FA6A1', lineHeight: 1.5,
                }}>
                  {study.statLine}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: insight cards */}
          <motion.div
            {...staggerItem(0.2)}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5px' }}
          >
            {study.keyDecision && (
              <div style={{
                padding: '2rem',
                background: 'rgba(255,255,255,0.03)',
                borderTop: '2px solid rgba(79,166,161,0.35)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '8px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#4FA6A1', marginBottom: '0.75rem',
                }}>
                  Key Decision
                </div>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, margin: 0,
                }}>
                  {study.keyDecision}
                </p>
              </div>
            )}

            {study.tradeoff && (
              <div style={{
                padding: '2rem',
                background: 'rgba(255,255,255,0.025)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '8px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#4FA6A1', marginBottom: '0.75rem',
                }}>
                  The Tradeoff
                </div>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, margin: 0,
                }}>
                  {study.tradeoff}
                </p>
              </div>
            )}

            {study.retrospective && (
              <div style={{
                padding: '2rem',
                background: 'rgba(255,255,255,0.02)',
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '8px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#4FA6A1', marginBottom: '0.75rem',
                }}>
                  In Retrospect
                </div>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, margin: 0,
                }}>
                  {study.retrospective}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══ 9: TESTIMONIAL ═══ */}
      {study.testimonial && (
        <section style={{
          background: 'var(--cream)',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        }}>
          <motion.div
            {...fadeUp}
            className="testimonial-grid"
            style={{
              maxWidth: '1100px', margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '3rem', alignItems: 'start',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '8rem', fontWeight: 400,
              color: '#4FA6A1', lineHeight: 0.8,
              userSelect: 'none', paddingTop: '0.25rem',
            }} aria-hidden="true">
              &ldquo;
            </div>

            <div>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                  fontStyle: 'italic', fontWeight: 400,
                  color: 'var(--ink)', lineHeight: 1.7,
                  marginBottom: '1.75rem',
                }}>
                  {study.testimonial.quote}
                </p>
                <footer>
                  <div style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '9px', fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: '#4FA6A1',
                  }}>
                    {study.testimonial.name} &nbsp;·&nbsp; {study.testimonial.role}
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </section>
      )}

      {/* ═══ 10: NEXT PROJECT ═══ */}
      <Link
        href={`/work/${study.nextSlug}`}
        aria-label={`Next case study: ${study.nextTitle}`}
        className="next-project"
        style={{
          display: 'block',
          background: 'var(--ink)',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
          textDecoration: 'none',
          transition: 'background 0.35s',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#111110')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--ink)')}
      >
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <motion.div {...fadeUp}>
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '0.75rem',
            }}>
              Next Project
            </div>
            <h3 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 400, color: 'white', lineHeight: 1.15, margin: 0,
            }}>
              {study.nextTitle}
            </h3>
          </motion.div>

          <div
            className="next-arrow"
            style={{
              width: '64px', height: '64px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '20px',
              transition: 'transform 0.35s, border-color 0.35s, background 0.35s',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            →
          </div>
        </div>
      </Link>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .hero-meta { display: none !important; }
          .hero-bottom { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .overview-grid    { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .challenge-grid   { grid-template-columns: 1fr !important; }
          .solution-grid    { grid-template-columns: 1fr !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; }
          .process-card       { flex: 0 0 78vw !important; }
        }
        .process-scroll {
          display: flex;
          gap: 1.25rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 0.25rem;
        }
        .process-scroll::-webkit-scrollbar { display: none; }

        .process-card {
          flex: 0 0 360px;
          height: 480px;
          background: var(--cream);
          border: 1px solid rgba(28,27,24,0.12);
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          transition: border-color 0.2s ease;
        }
        .process-card:hover {
          border-color: rgba(28,27,24,0.25);
        }

        .process-card-step {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 1rem;
        }
        .process-card-step::before {
          content: '';
          display: block;
          width: 3px;
          height: 24px;
          background: var(--teal);
        }

        .process-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: rgba(28,27,24,0.04);
          overflow: hidden;
          border: none;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-bottom: 1rem;
          outline: 1px solid transparent;
          outline-offset: -1px;
          transition: outline-color 0.25s ease;
        }
        button.process-card-image:hover,
        button.process-card-image:focus-visible {
          outline-color: var(--teal);
        }
        .process-card-image--empty {
          background: transparent;
          border: 1px solid rgba(28,27,24,0.12);
          cursor: default;
        }

        .process-card-title {
          font-family: var(--font-playfair);
          font-style: normal;
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--ink);
          line-height: 1.3;
          margin: 0 0 0.5rem;
        }
        .process-card-desc {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 400;
          color: rgba(28,27,24,0.7);
          line-height: 1.65;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .process-progress {
          position: relative;
          height: 2px;
          width: 160px;
          background: rgba(28,27,24,0.08);
          margin: 1.5rem 0 0;
        }
        .process-progress > div {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 25%;
          background: var(--ink);
          transition: left 0.1s linear;
        }
        .gallery-item {
          outline: 1px solid transparent;
          outline-offset: -1px;
          transition: outline-color 0.25s ease;
        }
        .gallery-item:hover,
        .gallery-item:focus-visible {
          outline-color: var(--teal);
        }
        .gallery-item img {
          transition: transform 0.4s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.01);
        }
        .next-project:hover .next-arrow {
          transform: translateX(8px);
          border-color: #4FA6A1;
          background: rgba(79,166,161,0.15);
        }
      `}</style>
    </main>
  )
}
