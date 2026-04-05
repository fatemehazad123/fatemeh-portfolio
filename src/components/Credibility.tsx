'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

const BAND_1 =
  'Product Design · Design Systems · Figma Expert · WCAG/AODA · Fintech · UX Strategy · Enterprise SaaS · Component Libraries · Design Tokens · ';
const BAND_2 =
  'Senior Product Designer · 15+ Years · Toronto · TD Bank · FIRST Insurance · OOBE Studio · Accessibility · Regulated Industries · ';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  display?: string;
}

const STATS: Stat[] = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Products Shipped' },
  { value: 3,  suffix: '',  label: 'Design Systems Built' },
  { value: 0,  suffix: '',  label: 'WCAG AA Compliant', display: 'AA' },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start    = Date.now();
    const tick = () => {
      const elapsed  = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);
  return count;
}

function MarqueeBand({ text, reverse }: { text: string; reverse?: boolean }) {
  return (
    <div style={{
      overflow:   'hidden',
      whiteSpace: 'nowrap',
      width:      '100%',
      padding:    '0.7rem 0',
    }}>
      <div style={{
        display:    'inline-flex',
        whiteSpace: 'nowrap',
        animation:  `marqueeScroll ${reverse ? '20s' : '25s'} linear infinite${reverse ? ' reverse' : ''}`,
      }}>
        {[text, text, text].map((t, i) => (
          <span key={i} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Credibility() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: true, amount: 0.2 });

  const count0 = useCountUp(STATS[0].value, isInView);
  const count1 = useCountUp(STATS[1].value, isInView);
  const count2 = useCountUp(STATS[2].value, isInView);
  const count3 = useCountUp(STATS[3].value, isInView);
  const counts = [count0, count1, count2, count3];

  return (
    <section
      ref={sectionRef}
      id="credibility"
      aria-label="Credibility"
      style={{
        background: '#2E2E2C',
        color:      '#F4F6F4',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      {/* Marquee bands */}
      <MarqueeBand text={BAND_1} />
      <MarqueeBand text={BAND_2} reverse />

      {/* Stats grid */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap:                 '2px',
        maxWidth:            '1100px',
        margin:              '0 auto',
        padding:             '4rem clamp(1.5rem,5vw,4rem)',
      }}>
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{
            background: 'rgba(255,255,255,0.03)',
            padding:    '3rem 2rem',
            textAlign:  'center',
            borderTop:  '1px solid rgba(191,207,198,0.1)',
          }}>
            <span style={{
              fontFamily: 'var(--font-playfair), Playfair Display, serif',
              fontSize:   'clamp(3rem, 5vw, 4.5rem)',
              color:      '#FFFFFF',
              fontWeight: 400,
              display:    'block',
              lineHeight: 1,
            }}>
              {stat.display ?? (counts[i] + stat.suffix)}
            </span>
            <span style={{
              fontFamily:    'var(--font-inter)',
              fontSize:      '9px',
              fontWeight:    700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color:         '#BFCFC6',
              marginTop:     '0.75rem',
              display:       'block',
            }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div style={{
        maxWidth: 680,
        margin:   '0 auto',
        padding:  '0 clamp(1.5rem,5vw,4rem) clamp(4rem,7vw,7rem)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <blockquote style={{ margin: 0, padding: 0 }}>
            <p style={{
              fontFamily:   'var(--font-playfair), Playfair Display, serif',
              fontSize:     'clamp(1.1rem, 2vw, 1.5rem)',
              fontWeight:   400,
              fontStyle:    'italic',
              lineHeight:   1.6,
              color:        'rgba(244,246,244,0.85)',
              marginBottom: '1.5rem',
            }}>
              &ldquo;Her dedication, speed and collaborative skills were exceptional. She is creative, highly skilled and fantastic at communicating and interpreting complexity. I would recommend her without hesitation.&rdquo;
            </p>
            <motion.footer
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              style={{
                fontFamily:    'var(--font-inter)',
                fontSize:      12,
                fontWeight:    500,
                letterSpacing: '0.06em',
                color:         'rgba(191,207,198,0.72)',
              }}
            >
              — Dwayne Matthews O.C.T · TD Bank · Innovation Evangelist
            </motion.footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
