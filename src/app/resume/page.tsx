'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import DotBackground from '@/components/DotBackground';

/* ── Data ──────────────────────────────────────────────── */
const EXPERIENCE = [
  {
    title: 'Founder & Lead Designer',
    company: 'OOBE — Out of Box Experience',
    location: 'Toronto',
    period: 'September 2010 — Present · 15 yrs 7 mos',
    bullets: [
      'Founded and led a multidisciplinary design studio delivering brand, digital, and experiential design systems',
      'Owned creative strategy and end-to-end design execution for 50+ client accounts',
      'Designed scalable brand systems to support consistency across platforms, campaigns, and teams',
      'Partnered directly with clients to translate business goals, audience needs, and constraints into effective visual frameworks',
      'Oversaw projects from early concept through polished execution, ensuring quality, clarity, and alignment',
      'Introduced structured, AI-assisted workflows to improve efficiency while maintaining design governance and standards',
    ],
  },
  {
    title: 'Designer and Marketer',
    company: 'FIRST Insurance Funding of Canada',
    location: 'Toronto',
    period: 'January 2015 — January 2026 · 11 yrs 1 mo',
    bullets: [
      'Led visual and brand system execution across marketing, sales, and operations in an enterprise environment',
      'Maintained and evolved brand systems to support organizational growth and changing business needs',
      'Designed high-visibility assets including event signage, stage visuals, presentations, internal communications, and digital materials',
      'Collaborated cross-functionally with stakeholders to align visual decisions with business objectives and operational realities',
      'Ensured consistency, clarity, and trust across all brand touchpoints',
      'Integrated AI-supported workflows to accelerate exploration while preserving consistency and design integrity',
    ],
  },
  {
    title: 'Web and Graphic Designer',
    company: 'Mako Invent',
    location: 'Toronto',
    period: 'July 2014 — September 2014 · 3 mos',
    bullets: [
      'Designed web and brand visuals in close collaboration with development teams',
      'Supported UX/UI through wireframes, layouts, and design documentation',
    ],
  },
  {
    title: 'Graphic Designer & Visual Communicator',
    company: 'Dept. of Media',
    location: '',
    period: 'September 2013 — June 2014 · 10 mos',
    bullets: [
      'Delivered event branding, photography, and video content',
      'Supported video editing and post-production workflows',
    ],
  },
  {
    title: 'Graphic Designer',
    company: 'World Service Cargo',
    location: '',
    period: 'April 2010 — December 2011 · 1 yr 9 mos',
    bullets: [
      'Designed web, marketing, and trade show materials',
      'Supported corporate branding through visual assets and photography',
    ],
  },
];

const EDUCATION = [
  {
    school: 'OCAD University',
    degree: 'Certificate, User Experience (UX) Design and Development',
    years: '2019 — 2020',
  },
  {
    school: 'Humber College',
    degree: 'Diploma, Advertising and Graphic Design',
    years: '2012 — 2014',
  },
  {
    school: 'Iran University of Medicine',
    degree: "Bachelor's degree, Public Health",
    years: '2000 — 2004',
  },
];

const STATS = [
  { value: '15+', label: 'Years' },
  { value: '50+', label: 'Clients' },
  { value: 'AA',  label: 'WCAG' },
  { value: '3',   label: 'Industries' },
];

const SKILLS = [
  'Product Design', 'Figma', 'Accessibility (WCAG, AODA)',
  'Design Systems', 'UX Strategy', 'Prototyping',
  'Fintech', 'Enterprise SaaS',
];

const LANGUAGES = [
  { name: 'Farsi',   level: 'Native or Bilingual', pct: 100 },
  { name: 'English', level: 'Full Professional',   pct: 90  },
  { name: 'French',  level: 'Limited Working',     pct: 30  },
];

const CERTS = [
  'Photoshop for UX Design',
  'UX Design Techniques',
  'User Experience (UX) Design and Development Skills',
  'Critical Thinking',
  'Firefly Custom Models and Services Foundations',
];

const AWARDS = [
  'Next Generation Dinner Series Candidate 2014',
  'Finalist Poster Designer for Markham Board of Trade',
  'Top 5 Humber Representative at CBC show',
  'Certificate of Recognition — City of Toronto',
];

/* ── Sub-components ────────────────────────────────────── */
function SectionHead({ label }: { label: string }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <p style={{
        fontFamily:    'var(--font-inter)',
        fontSize:       10,
        fontWeight:     600,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color:          '#4FA6A1',
        marginBottom:  '0.4rem',
      }}>
        {label}
      </p>
      <div style={{ height: 1, background: 'rgba(79,166,161,0.25)' }} />
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span aria-hidden="true" style={{
      position: 'absolute', left: 0, top: '0.6em',
      width: 3, height: 3,
      background: color,
      borderRadius: '50%',
      display: 'block',
    }} />
  );
}

function LanguageBar({ name, level, pct, delay }: {
  name: string; level: string; pct: number; delay: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 500, color: '#2E2E2C' }}>
          {name}
        </span>
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, color: 'rgba(46,46,44,0.55)', letterSpacing: '0.06em' }}>
          {level}
        </span>
      </div>
      <div style={{ height: 3, background: 'rgba(79,166,161,0.15)', borderRadius: 2, overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', background: '#4FA6A1', borderRadius: 2 }}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${pct}%` } : { width: '0%' }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function ResumePage() {
  return (
    <div style={{ background: '#F4F6F4', minHeight: '100vh' }}>

      {/* ── Hero header ────────────────────────────────── */}
      <div
        className="page-hero"
        style={{
          background: '#2E2E2C',
          padding:    'clamp(6rem, 10vw, 8rem) clamp(2rem, 6vw, 6rem) clamp(3rem, 5vw, 4rem)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{
            fontFamily:    'var(--font-inter)',
            fontSize:       10,
            fontWeight:     600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color:          '#4FA6A1',
            marginBottom:  '1rem',
          }}>
            Resume
          </p>

          <h1 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize:    'clamp(2.5rem, 5vw, 4rem)',
            fontWeight:  400,
            color:       '#F4F6F4',
            lineHeight:  1.1,
            margin:      '0 0 0.75rem',
          }}>
            Fatemeh Azadbakht
          </h1>

          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize:    'clamp(11px, 1.1vw, 13px)',
            fontWeight:  400,
            color:       'rgba(244,246,244,0.65)',
            lineHeight:  1.6,
            margin:      '0 0 1.75rem',
            maxWidth:    600,
          }}>
            Senior Product &amp; Visual Designer · UI, UX, Design Systems · Fintech &amp; SaaS · Figma Expert
          </p>

          {/* Contact row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: 11, color: 'rgba(244,246,244,0.5)', letterSpacing: '0.06em' }}>
              Toronto, Canada
            </span>
            {[
              { label: 'info@fatemeh.ca',              href: 'mailto:info@fatemeh.ca' },
              { label: 'fatemeh.ca',                   href: 'https://fatemeh.ca' },
              { label: 'linkedin.com/in/fazadbakht',   href: 'https://linkedin.com/in/fazadbakht' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  fontFamily:    'var(--font-inter)',
                  fontSize:       11,
                  fontWeight:     500,
                  letterSpacing: '0.06em',
                  color:          '#4FA6A1',
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Download PDF */}
          <button
            onClick={() => window.print()}
            aria-label="Download resume as PDF"
            style={{
              fontFamily:    'var(--font-inter)',
              fontSize:       11,
              fontWeight:     600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding:        '0.65rem 1.5rem',
              border:         '1px solid #4FA6A1',
              color:          '#4FA6A1',
              background:     'transparent',
              borderRadius:   2,
              cursor:         'none',
              transition:     'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = '#4FA6A1'; el.style.color = '#2E2E2C'; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = '#4FA6A1'; }}
          >
            ↓ Download PDF
          </button>
        </div>
      </div>

      {/* ── Body: two-column ───────────────────────────── */}
      <div
        className="resume-grid"
        style={{
          maxWidth:            1200,
          margin:              '0 auto',
          padding:             'clamp(3rem, 5vw, 5rem) clamp(2rem, 6vw, 6rem)',
          display:             'grid',
          gridTemplateColumns: '1fr 340px',
          gap:                 'clamp(2.5rem, 4vw, 5rem)',
          alignItems:          'start',
        }}
      >

        {/* ── LEFT: Experience + Education ─────────────── */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <DotBackground config={{
            bgColor:      [255, 255, 255],
            dotColors:    [[79, 166, 161], [201, 106, 74], [143, 168, 158]],
            dotRadius:    1.2,
            spacing:      40,
            repelDist:    0,
            repelForce:   0,
            opacity:      0.07,
            animated:     false,
            mouseReactive: false,
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Experience */}
          <section aria-label="Work experience" style={{ marginBottom: '3.5rem' }}>
            <SectionHead label="Experience" />
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={job.company + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  marginBottom:  '2.25rem',
                  paddingBottom: '2.25rem',
                  borderBottom:  i < EXPERIENCE.length - 1 ? '1px solid rgba(46,46,44,0.09)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize:    'clamp(1rem, 1.2vw, 1.15rem)',
                    fontWeight:  500,
                    color:       '#2E2E2C',
                    margin:      0,
                  }}>
                    {job.title}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 400, color: 'rgba(46,46,44,0.45)', letterSpacing: '0.06em', whiteSpace: 'nowrap', paddingTop: '0.2rem' }}>
                    {job.period}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', color: '#4FA6A1', marginBottom: '0.875rem' }}>
                  {job.company}{job.location ? ` · ${job.location}` : ''}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} style={{ position: 'relative', paddingLeft: '0.875rem', marginBottom: '0.35rem', fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 300, lineHeight: 1.75, color: 'rgba(46,46,44,0.78)' }}>
                      <Dot color="#4FA6A1" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </section>

          {/* Education */}
          <section aria-label="Education">
            <SectionHead label="Education" />
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginBottom: '1.5rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 500, color: '#2E2E2C', margin: 0 }}>
                    {edu.school}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, color: 'rgba(46,46,44,0.45)', letterSpacing: '0.06em' }}>
                    {edu.years}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 400, color: 'rgba(46,46,44,0.65)', marginTop: '0.2rem' }}>
                  {edu.degree}
                </p>
              </motion.div>
            ))}
          </section>
          </div>{/* end zIndex wrapper */}
        </div>

        {/* ── RIGHT: Sidebar ────────────────────────────── */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <DotBackground config={{
            bgColor:      [28, 27, 24],
            dotColors:    [[79, 166, 161], [201, 106, 74], [143, 168, 158]],
            dotRadius:    2,
            spacing:      22,
            repelDist:    0,
            repelForce:   0,
            opacity:      0.2,
            animated:     false,
            mouseReactive: false,
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  background:  '#2E2E2C',
                  borderRadius: 4,
                  padding:     '1rem 0.875rem',
                  textAlign:   'center',
                }}
              >
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.75rem', fontWeight: 700, color: '#4FA6A1', margin: '0 0 0.2rem', lineHeight: 1 }}>
                  {s.value}
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(191,207,198,0.7)', margin: 0 }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '2.5rem' }}>
            <SectionHead label="Summary" />
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: 'rgba(46,46,44,0.75)' }}>
              Senior Product &amp; Visual Designer with 15+ years designing scalable digital products, UX strategy, and design systems across fintech, insurance, and enterprise environments. Specializes in translating complex requirements into clear, accessible, and scalable product experiences with a strong focus on usability and engineering efficiency.
            </p>
          </div>

          {/* Testimonial */}
          <div style={{ marginBottom: '2.5rem' }}>
            <SectionHead label="Testimonial" />
            <blockquote style={{ margin: 0, padding: '1rem 1.1rem', background: 'rgba(79,166,161,0.06)', borderLeft: '2px solid #4FA6A1', borderRadius: '0 4px 4px 0' }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: 12, fontStyle: 'italic', lineHeight: 1.75, color: 'rgba(46,46,44,0.8)', marginBottom: '0.75rem' }}>
                &ldquo;Her dedication, speed and collaborative skills were exceptional. She is creative, highly skilled and fantastic at communicating and interpreting complexity. I would recommend her without hesitation.&rdquo;
              </p>
              <footer style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(46,46,44,0.5)' }}>
                — Dwayne Matthews O.C.T, Innovation Evangelist
              </footer>
            </blockquote>
          </div>

          {/* Top Skills */}
          <div style={{ marginBottom: '2.5rem' }}>
            <SectionHead label="Top Skills" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily:    'var(--font-inter)',
                    fontSize:       10,
                    fontWeight:     500,
                    letterSpacing: '0.04em',
                    padding:        '0.3rem 0.7rem',
                    borderRadius:   20,
                    border:         '1px solid rgba(79,166,161,0.3)',
                    color:          '#4FA6A1',
                    background:     'rgba(79,166,161,0.06)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div style={{ marginBottom: '2.5rem' }}>
            <SectionHead label="Languages" />
            {LANGUAGES.map((lang, i) => (
              <LanguageBar key={lang.name} {...lang} delay={i * 0.15} />
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: '2.5rem' }}>
            <SectionHead label="Certifications" />
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {CERTS.map((cert) => (
                <li key={cert} style={{ position: 'relative', paddingLeft: '0.875rem', marginBottom: '0.35rem', fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 400, lineHeight: 1.7, color: 'rgba(46,46,44,0.72)' }}>
                  <Dot color="#C96A4A" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Honours & Awards */}
          <div>
            <SectionHead label="Honours & Awards" />
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {AWARDS.map((award) => (
                <li key={award} style={{ position: 'relative', paddingLeft: '0.875rem', marginBottom: '0.35rem', fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 400, lineHeight: 1.7, color: 'rgba(46,46,44,0.72)' }}>
                  <Dot color="#C96A4A" />
                  {award}
                </li>
              ))}
            </ul>
          </div>
          </div>{/* end zIndex wrapper */}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .resume-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
