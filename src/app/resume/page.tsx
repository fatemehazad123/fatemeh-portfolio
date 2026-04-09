'use client'
import React from 'react'

const sectionLabel: React.CSSProperties = {
  fontSize: 8,
  fontWeight: 700,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#4FA6A1',
  marginBottom: '1.25rem',
  paddingBottom: '0.5rem',
  borderBottom: '1px solid rgba(79,166,161,0.2)',
}

const bodyText: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 300,
  color: '#2E2E2C',
  opacity: 0.7,
  lineHeight: 1.85,
}

export default function ResumePage() {
  return (
    <div style={{ background: '#F4F6F4', minHeight: '100vh' }}>
      <main style={{
        maxWidth: 860,
        margin: '0 auto',
        padding: '5rem 2rem 6rem',
      }}>

        {/* HEADER */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'flex-start',
          gap: '2rem',
          paddingBottom: '2.5rem',
          borderBottom: '2px solid #4FA6A1',
          marginBottom: '3rem',
        }}>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#2E2E2C',
              marginBottom: '0.5rem',
              lineHeight: 1.1,
            }}>Fatemeh Azadbakht</h1>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 13,
              fontWeight: 400,
              color: '#4FA6A1',
              letterSpacing: '0.04em',
              marginBottom: '1rem',
            }}>
              Senior Product &amp; Visual Designer · Fintech · Enterprise · SaaS
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              {[
                { label: 'Toronto, Canada' },
                { label: 'info@fatemeh.ca',              href: 'mailto:info@fatemeh.ca' },
                { label: 'fatemeh.ca',                   href: 'https://fatemeh.ca' },
                { label: 'linkedin.com/in/fazadbakht',   href: 'https://linkedin.com/in/fazadbakht' },
              ].map(item => (
                item.href
                  ? <a key={item.label} href={item.href} style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 11, color: '#2E2E2C', opacity: 0.55,
                      textDecoration: 'none',
                    }}>{item.label}</a>
                  : <span key={item.label} style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 11, color: '#2E2E2C', opacity: 0.55,
                    }}>{item.label}</span>
              ))}
            </div>
          </div>

          <a
            href="/Fatemeh_Azadbakht_Resume.pdf"
            download
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 9, fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: '#2E2E2C',
              color: '#F4F6F4',
              padding: '0.7rem 1.4rem',
              borderRadius: 100,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >↓ Download PDF</a>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="resume-cols" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }}>

          {/* LEFT — main content */}
          <div>

            {/* SUMMARY */}
            <section style={{ marginBottom: '2.5rem' }}>
              <div style={sectionLabel}>Summary</div>
              <p style={bodyText}>
                Senior Product &amp; Visual Designer with 15+ years designing scalable
                digital products, UX strategy, and design systems across fintech,
                insurance, and enterprise environments. Specializes in translating
                complex requirements into clear, accessible, and scalable product
                experiences with a strong focus on usability and engineering efficiency.
              </p>
            </section>

            {/* EXPERIENCE */}
            <section style={{ marginBottom: '2.5rem' }}>
              <div style={sectionLabel}>Experience</div>

              {([
                {
                  title: 'Founder & Lead Designer',
                  company: 'OOBE — Out of Box Experience',
                  period: 'Sep 2010 — Present · 15 yrs',
                  location: 'Toronto',
                  bullets: [
                    'Founded and led a multidisciplinary design studio delivering brand, digital, and experiential design systems',
                    'Owned creative strategy and end-to-end design execution for 50+ client accounts',
                    'Designed scalable brand systems to support consistency across platforms, campaigns, and teams',
                    'Introduced structured, AI-assisted workflows to improve efficiency while maintaining design governance',
                  ],
                },
                {
                  title: 'Designer and Marketer',
                  company: 'FIRST Insurance Funding of Canada',
                  period: 'Jan 2015 — Jan 2026 · 11 yrs',
                  location: 'Toronto',
                  bullets: [
                    'Led visual and brand system execution across marketing, sales, and operations in an enterprise environment',
                    'Maintained and evolved brand systems to support organizational growth and changing business needs',
                    'Designed high-visibility assets including event signage, stage visuals, and presentations',
                    'Collaborated cross-functionally with stakeholders to align visual decisions with business objectives',
                  ],
                },
                {
                  title: 'Web and Graphic Designer',
                  company: 'Mako Invent',
                  period: 'Jul 2014 — Sep 2014 · 3 mos',
                  location: 'Toronto',
                  bullets: [
                    'Designed web and brand visuals in close collaboration with development teams',
                    'Supported UX/UI through wireframes, layouts, and design documentation',
                  ],
                },
                {
                  title: 'Graphic Designer',
                  company: 'World Service Cargo',
                  period: 'Apr 2010 — Dec 2011 · 1 yr 9 mos',
                  location: 'Toronto',
                  bullets: [
                    'Designed web, marketing, and trade show materials',
                    'Supported corporate branding through visual assets and photography',
                  ],
                },
              ] as { title: string; company: string; period: string; location: string; bullets: string[] }[]).map((job, i) => (
                <div key={i} style={{
                  paddingBottom: '2rem',
                  marginBottom: '2rem',
                  borderBottom: i < 3 ? '1px solid rgba(46,46,44,0.08)' : 'none',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.25rem',
                    gap: '1rem',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 15, fontWeight: 500,
                      color: '#2E2E2C',
                    }}>{job.title}</div>
                    <div style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 10, color: '#2E2E2C',
                      opacity: 0.4, whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}>{job.period}</div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 11, fontWeight: 600,
                    color: '#4FA6A1',
                    letterSpacing: '0.04em',
                    marginBottom: '0.75rem',
                  }}>{job.company} · {job.location}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {job.bullets.map((b, bi) => (
                      <li key={bi} style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: 12, fontWeight: 300,
                        color: '#2E2E2C', opacity: 0.7,
                        lineHeight: 1.75,
                        paddingLeft: '1rem',
                        position: 'relative',
                        marginBottom: '0.3rem',
                      }}>
                        <span style={{
                          position: 'absolute', left: 0,
                          color: '#4FA6A1', fontWeight: 600,
                        }}>·</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* EDUCATION */}
            <section>
              <div style={sectionLabel}>Education</div>
              {([
                {
                  degree: 'Certificate, UX Design and Development',
                  school: 'OCAD University',
                  year: '2019 — 2020',
                },
                {
                  degree: 'Diploma, Advertising and Graphic Design',
                  school: 'Humber College',
                  year: '2012 — 2014',
                },
                {
                  degree: "Bachelor's degree, Public Health",
                  school: 'Iran University of Medicine',
                  year: '2000 — 2004',
                },
              ] as { degree: string; school: string; year: string }[]).map((ed, i) => (
                <div key={i} style={{
                  marginBottom: '1.25rem',
                  paddingBottom: '1.25rem',
                  borderBottom: i < 2 ? '1px solid rgba(46,46,44,0.06)' : 'none',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: 13, fontWeight: 600,
                        color: '#2E2E2C', marginBottom: 2,
                      }}>{ed.degree}</div>
                      <div style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: 11, color: '#4FA6A1',
                        fontWeight: 500,
                      }}>{ed.school}</div>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 10, color: '#2E2E2C',
                      opacity: 0.35, whiteSpace: 'nowrap',
                    }}>{ed.year}</div>
                  </div>
                </div>
              ))}
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {/* STATS */}
            <div style={{
              background: '#2E2E2C',
              borderRadius: 16,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              {([
                { n: '15+', l: 'Years Experience', c: '#4FA6A1' },
                { n: '50+', l: 'Clients',          c: 'white'   },
                { n: 'AA',  l: 'WCAG Compliant',   c: '#BFCFC6' },
                { n: '3',   l: 'Industries',        c: '#C96A4A' },
              ] as { n: string; l: string; c: string }[]).map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  paddingBottom: i < 3 ? '1.25rem' : 0,
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.8rem', color: s.c,
                    lineHeight: 1, flexShrink: 0, width: 52,
                  }}>{s.n}</span>
                  <span style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 10, fontWeight: 500,
                    color: 'white', opacity: 0.4,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>{s.l}</span>
                </div>
              ))}
            </div>

            {/* SKILLS */}
            <div>
              <div style={sectionLabel}>Top Skills</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[
                  'Product Design', 'Figma', 'Design Systems',
                  'WCAG / AODA', 'UX Strategy', 'Prototyping',
                  'Fintech UX', 'Enterprise SaaS',
                  'Visual Identity', 'Component Libraries',
                ].map(skill => (
                  <span key={skill} style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 10, fontWeight: 500,
                    color: '#2E2E2C',
                    background: 'rgba(46,46,44,0.07)',
                    border: '1px solid rgba(46,46,44,0.12)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 100,
                  }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* LANGUAGES */}
            <div>
              <div style={sectionLabel}>Languages</div>
              {([
                { lang: 'Farsi',   level: 'Native' },
                { lang: 'English', level: 'Full Professional' },
                { lang: 'French',  level: 'Limited Working' },
              ] as { lang: string; level: string }[]).map((l, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: 'var(--font-inter)',
                  fontSize: 12, color: '#2E2E2C',
                  padding: '0.5rem 0',
                  borderBottom: i < 2 ? '1px solid rgba(46,46,44,0.07)' : 'none',
                }}>
                  <span style={{ fontWeight: 500 }}>{l.lang}</span>
                  <span style={{ opacity: 0.45, fontSize: 11 }}>{l.level}</span>
                </div>
              ))}
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <div style={sectionLabel}>Certifications</div>
              {[
                'Photoshop for UX Design',
                'UX Design Techniques',
                'UX Design and Development Skills',
                'Critical Thinking',
                'Firefly Custom Models & Services',
              ].map((c, i) => (
                <div key={i} style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11, fontWeight: 300,
                  color: '#2E2E2C', opacity: 0.65,
                  padding: '0.4rem 0',
                  borderBottom: i < 4 ? '1px solid rgba(46,46,44,0.06)' : 'none',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ color: '#4FA6A1', fontWeight: 700 }}>·</span>
                  {c}
                </div>
              ))}
            </div>

            {/* RECOGNITION */}
            <div>
              <div style={sectionLabel}>Recognition</div>
              {[
                'Next Generation Dinner Series 2014',
                'Finalist — Markham Board of Trade',
                'Top 5 Humber Representative at CBC',
                'Certificate of Recognition — City of Toronto',
              ].map((h, i) => (
                <div key={i} style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11, fontWeight: 300,
                  color: '#2E2E2C', opacity: 0.65,
                  padding: '0.4rem 0',
                  borderBottom: i < 3 ? '1px solid rgba(46,46,44,0.06)' : 'none',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ color: '#C96A4A', fontWeight: 700 }}>·</span>
                  {h}
                </div>
              ))}
            </div>

            {/* TESTIMONIAL */}
            <div style={{ borderLeft: '2px solid #4FA6A1', paddingLeft: '1rem' }}>
              <p style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 12, fontStyle: 'italic',
                color: '#2E2E2C', opacity: 0.7,
                lineHeight: 1.7, marginBottom: '0.6rem',
              }}>
                &ldquo;Her dedication, speed and collaborative skills were
                exceptional. I would recommend her without hesitation.&rdquo;
              </p>
              <span style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 9, fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4FA6A1',
              }}>Dwayne Matthews O.C.T · TD Bank</span>
            </div>

          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .resume-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
