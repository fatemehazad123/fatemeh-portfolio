'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { caseStudies } from '@/lib/caseStudies'
import type { CaseStudy } from '@/lib/caseStudies'

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
  return (
    <main id="main-content" style={{ background: '#F4F6F4' }}>

      {/* ═══ SECTION 1: HERO ═══ */}
      <section style={{
        position: 'relative',
        minHeight: '80vh',
        background: study.cardColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}>
        {/* Background video or image */}
        {study.heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.5,
              zIndex: 1,
            }}
          >
            <source src={study.heroVideo} type="video/mp4" />
          </video>
        ) : study.heroImage ? (
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.35 }}
            onError={() => {}}
          />
        ) : null}

        {/* Gradient overlays */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
        }} />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 60%)',
        }} />

        {/* Back link */}
        <Link
          href="/work"
          style={{
            position: 'absolute',
            top: 'clamp(5.5rem, 8vw, 7rem)',
            left: 'clamp(1.5rem, 5vw, 4rem)',
            zIndex: 10,
            fontFamily: 'var(--font-inter)',
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'white', opacity: 0.4,
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            textDecoration: 'none', transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '0.4')}
        >
          <span aria-hidden="true">←</span> All Work
        </Link>

        {/* Hero content */}
        <motion.div
          {...fadeUp}
          style={{
            position: 'relative', zIndex: 10,
            padding: 'clamp(2rem, 5vw, 4rem)',
            maxWidth: '900px',
          }}
        >
          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {study.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'white', background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '2px', padding: '4px 10px',
              }}>{tag}</span>
            ))}
            <span style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: study.cardTextColor,
              background: `${study.cardTextColor}20`,
              border: `1px solid ${study.cardTextColor}40`,
              borderRadius: '2px', padding: '4px 10px',
            }}>{study.client}</span>
          </div>

          {/* Counter */}
          <div style={{
            fontFamily: 'var(--font-playfair), Playfair Display, serif',
            fontSize: '1rem', color: 'white', opacity: 0.3,
            marginBottom: '0.5rem', letterSpacing: '0.1em',
          }}>
            {study.number} / 0{caseStudies.length}
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-playfair), Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 400, color: 'white', lineHeight: 1.0,
            letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            {study.title}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 300, color: 'white', opacity: 0.65,
            lineHeight: 1.6, margin: 0,
          }}>
            {study.subtitle}
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: '2rem', right: '2rem',
          zIndex: 10, textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '8px', fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'white', opacity: 0.35,
          }}>Scroll</div>
          <div style={{
            width: '1px', height: '32px',
            margin: '6px auto 0',
            background: 'rgba(255,255,255,0.15)',
            overflow: 'hidden',
          }}>
            <div style={{
              width: '100%', height: '100%',
              background: '#4FA6A1',
              animation: 'scrollLine 2s ease-in-out infinite',
            }} />
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: OVERVIEW STRIP ═══ */}
      <section style={{
        background: 'white',
        borderBottom: '1px solid rgba(46,46,44,0.08)',
      }}>
        <motion.div
          {...fadeUp}
          style={{
            maxWidth: '1100px', margin: '0 auto',
            padding: '2.5rem clamp(1.5rem, 5vw, 4rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
          }}
        >
          {[
            { label: 'Client', value: study.client },
            { label: 'Year',   value: study.year },
            { label: 'Role',   value: study.role },
            { label: 'Tools',  value: study.tools.join(', ') },
          ].map((item, i) => (
            <motion.div key={item.label} {...staggerItem(i * 0.1)}>
              <div style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#4FA6A1', marginBottom: '0.5rem',
              }}>{item.label}</div>
              <div style={{
                fontFamily: 'var(--font-playfair), Playfair Display, serif',
                fontSize: '1rem', color: '#2E2E2C', lineHeight: 1.4,
              }}>{item.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══ SECTION 3: SUMMARY / PULL QUOTE ═══ */}
      <section style={{
        background: '#2E2E2C',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <motion.div {...fadeUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
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
          <p style={{
            fontFamily: 'var(--font-playfair), Playfair Display, serif',
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            fontStyle: 'italic', fontWeight: 400,
            color: 'white', lineHeight: 1.5,
            opacity: 0.92, margin: 0,
          }}>
            {study.summary}
          </p>
        </motion.div>
      </section>

      {/* ═══ SECTION 4: THE PROBLEM ═══ */}
      <section style={{
        background: '#F4F6F4',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem', alignItems: 'start',
        }}>
          <motion.div {...fadeUp}>
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#4FA6A1' }} />
              The Problem
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 400, color: '#2E2E2C',
              lineHeight: 1.15, letterSpacing: '-0.01em',
              margin: 0,
            }}>
              {study.problem}
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {study.problemDetails.map((detail, i) => (
                <motion.li
                  key={i}
                  {...staggerItem(i * 0.08)}
                  style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    padding: '1rem 1.25rem',
                    background: 'white',
                    borderRadius: '4px',
                    border: '1px solid rgba(46,46,44,0.06)',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px', fontWeight: 300,
                    color: '#2E2E2C', lineHeight: 1.7,
                  }}
                >
                  <span style={{ color: '#4FA6A1', fontWeight: 700, fontSize: '16px', lineHeight: 1.4, flexShrink: 0 }}>-</span>
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 5: FIRST IMAGE ═══ */}
      {study.images && study.images[0] && (
        <motion.section
          {...fadeUp}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(300px, 50vw, 580px)',
            overflow: 'hidden',
            background: study.cardColor,
          }}
        >
          <Image
            src={study.images[0]}
            alt={`${study.title} - project visual`}
            fill
            quality={100}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            onError={e => {
              const parent = (e.target as HTMLElement).closest('section') as HTMLElement
              if (parent) parent.style.display = 'none'
            }}
          />
        </motion.section>
      )}

      {/* ═══ SECTION 6: MY ROLE ═══ */}
      <section style={{
        background: 'white',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <motion.div {...fadeUp} style={{
          maxWidth: '800px', margin: '0 auto',
          borderLeft: '2px solid #4FA6A1',
          paddingLeft: '3rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '9px', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#4FA6A1', marginBottom: '1.5rem',
          }}>My Role</div>
          <p style={{
            fontFamily: 'var(--font-playfair), Playfair Display, serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 400, color: '#2E2E2C',
            lineHeight: 1.7, fontStyle: 'italic', margin: 0,
          }}>
            {study.myRole}
          </p>
        </motion.div>
      </section>

      {/* ═══ SECTION 7: PROCESS ═══ */}
      <section style={{
        background: '#F4F6F4',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ marginBottom: '4rem' }}>
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '1rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#4FA6A1' }} />
              Process
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 400, color: '#2E2E2C', lineHeight: 1.15, margin: 0,
            }}>
              How I approached it
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
          }}>
            {study.process.map((step, i) => (
              <motion.div
                key={i}
                {...staggerItem(i * 0.12)}
                style={{
                  background: 'white',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-playfair), Playfair Display, serif',
                  fontSize: '4rem', fontWeight: 400,
                  color: '#4FA6A1', opacity: 0.1,
                  lineHeight: 1, marginBottom: '1.5rem',
                }}>
                  0{i + 1}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-playfair), Playfair Display, serif',
                  fontSize: '1.1rem', fontWeight: 400,
                  color: '#2E2E2C', marginBottom: '0.85rem',
                  lineHeight: 1.3,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px', fontWeight: 300,
                  color: '#2E2E2C', opacity: 0.65,
                  lineHeight: 1.8, margin: 0,
                }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: IMAGE GALLERY ═══ */}
      {study.images && study.images.length > 1 && (() => {
        const galleryImages = study.images ? study.images.slice(1) : []
        const [firstImg, ...restImgs] = galleryImages
        const isLarge = restImgs.length >= 9

        return (
          <section style={{ background: '#2E2E2C', padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <motion.div {...fadeUp} style={{ marginBottom: '2.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '9px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#4FA6A1', marginBottom: '0.75rem',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                }}>
                  <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#4FA6A1' }} />
                  Selected Visuals
                </div>
                {study.confidentialityNote && (
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '12px', fontWeight: 300,
                    color: 'white', opacity: 0.35,
                    fontStyle: 'italic', lineHeight: 1.6, margin: 0,
                  }}>
                    {study.confidentialityNote}
                  </p>
                )}
              </motion.div>

              {/* First gallery image: full width */}
              {firstImg && (
                <motion.div
                  {...fadeUp}
                  className="gallery-item"
                  style={{
                    position: 'relative', width: '100%', height: '500px',
                    overflow: 'hidden', marginBottom: '2px',
                    background: 'rgba(79,166,161,0.04)',
                  }}
                >
                  <Image
                    src={firstImg}
                    alt={`${study.title} - Visual 1`}
                    fill
                    quality={100}
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    onError={e => {
                      const parent = (e.target as HTMLElement).closest('.gallery-item') as HTMLElement
                      if (parent) parent.style.display = 'none'
                    }}
                  />
                </motion.div>
              )}

              {/* Remaining images: grid with optional Silk Road divider */}
              {restImgs.length > 0 && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isLarge ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
                  gap: '2px',
                }}>
                  {restImgs.map((img, i) => {
                    const showDivider =
                      study.slug === 'silk-road-identity' &&
                      restImgs.length > 5 &&
                      i === 5

                    return (
                      <>
                        {showDivider && (
                          <div key={`divider-${i}`} style={{
                            gridColumn: '1 / -1',
                            padding: '2rem',
                            textAlign: 'center',
                            borderTop: '1px solid rgba(191,207,198,0.1)',
                            borderBottom: '1px solid rgba(191,207,198,0.1)',
                          }}>
                            <span style={{
                              fontSize: '9px',
                              fontWeight: 700,
                              letterSpacing: '0.2em',
                              textTransform: 'uppercase',
                              color: '#4FA6A1',
                              fontFamily: 'var(--font-inter)',
                            }}>
                              Beyond the Silk Concert
                            </span>
                          </div>
                        )}
                        <motion.div
                          key={img}
                          {...staggerItem(i * 0.08)}
                          className="gallery-item"
                          style={{
                            position: 'relative',
                            height: isLarge ? '280px' : '340px',
                            overflow: 'hidden',
                            background: 'rgba(79,166,161,0.04)',
                          }}
                        >
                          <Image
                            src={img}
                            alt={`${study.title} - Visual ${i + 2}`}
                            fill
                            quality={100}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            onError={e => {
                              const parent = (e.target as HTMLElement).closest('.gallery-item') as HTMLElement
                              if (parent) parent.style.display = 'none'
                            }}
                          />
                        </motion.div>
                      </>
                    )
                  })}
                </div>
              )}
            </div>
          </section>
        )
      })()}

      {/* ═══ SECTION 9: SOLUTION ═══ */}
      <section style={{
        background: '#2E2E2C',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
        }}>
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
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 400, color: 'white', lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}>
              {study.solution}
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
            <ul style={{ listStyle: 'none', margin: '3rem 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {study.solutionPoints.map((point, i) => (
                <motion.li
                  key={i}
                  {...staggerItem(i * 0.08)}
                  style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    padding: '0 0 1rem',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px', fontWeight: 300,
                    color: 'rgba(244,246,244,0.75)', lineHeight: 1.7,
                  }}
                >
                  <span style={{ color: '#4FA6A1', fontWeight: 700, flexShrink: 0, fontSize: '12px', marginTop: '3px' }}>+</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 10: OUTCOMES ═══ */}
      <section style={{
        background: 'white',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ marginBottom: '3.5rem' }}>
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '1rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#4FA6A1' }} />
              Outcomes
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 400, color: '#2E2E2C', lineHeight: 1.15, margin: 0,
            }}>
              What changed
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            {study.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                {...staggerItem(i * 0.12)}
                style={{
                  background: '#F4F6F4',
                  borderTop: '3px solid #4FA6A1',
                  borderRadius: '4px',
                  padding: '2rem 1.75rem',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-playfair), Playfair Display, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 400, color: '#2E2E2C',
                  lineHeight: 1, marginBottom: '0.5rem',
                }}>
                  {outcome.metric}
                </div>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#4FA6A1', marginBottom: '0.75rem',
                }}>
                  {outcome.label}
                </div>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px', fontWeight: 300,
                  color: '#2E2E2C', opacity: 0.6, lineHeight: 1.7, margin: 0,
                }}>
                  {outcome.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 11: TESTIMONIAL ═══ */}
      {study.testimonial && (
        <section style={{
          background: '#4FA6A1',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
          textAlign: 'center',
        }}>
          <motion.div {...fadeUp} style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize: '5rem', color: '#1a1a18',
              opacity: 0.12, lineHeight: 1,
              marginBottom: '1.5rem',
            }} aria-hidden="true">
              &ldquo;
            </div>
            <blockquote style={{ margin: 0, padding: 0 }}>
              <p style={{
                fontFamily: 'var(--font-playfair), Playfair Display, serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontStyle: 'italic', fontWeight: 400,
                color: '#1a1a18', lineHeight: 1.65,
                marginBottom: '2.5rem',
              }}>
                {study.testimonial.quote}
              </p>
              <footer>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px', fontWeight: 600,
                  color: '#1a1a18', opacity: 0.8,
                  marginBottom: '0.25rem',
                }}>
                  {study.testimonial.name}
                </div>
                <div style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '12px', fontWeight: 300,
                  color: '#1a1a18', opacity: 0.55,
                }}>
                  {study.testimonial.role}
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </section>
      )}

      {/* ═══ SECTION 12: NEXT PROJECT ═══ */}
      <section style={{
        background: '#2E2E2C',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '2rem',
        }}>
          <motion.div {...fadeUp}>
            <Link
              href="/work"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'white', opacity: 0.3,
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                textDecoration: 'none', marginBottom: '2rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '0.3')}
            >
              <span aria-hidden="true">←</span> Back to Work
            </Link>
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#4FA6A1', marginBottom: '0.75rem',
              display: 'block',
            }}>
              Next Project
            </div>
            <Link href={`/work/${study.nextSlug}`} style={{ textDecoration: 'none' }}>
              <h3 style={{
                fontFamily: 'var(--font-playfair), Playfair Display, serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 400, color: 'white', lineHeight: 1.15, margin: 0,
              }}>
                {study.nextTitle}
              </h3>
            </Link>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
            <Link
              href={`/work/${study.nextSlug}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '64px', height: '64px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white', textDecoration: 'none',
                fontSize: '20px',
                transition: 'background 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#4FA6A1'
                el.style.borderColor = '#4FA6A1'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.borderColor = 'rgba(255,255,255,0.2)'
              }}
              aria-label={`Next project: ${study.nextTitle}`}
            >
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
