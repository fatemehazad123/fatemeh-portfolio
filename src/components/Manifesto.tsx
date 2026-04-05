'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const WORDS = [
  'I', "don't", 'make', 'things', 'beautiful.',
  'I', 'make', 'complexity', 'disappear.',
];

const MARQUEE_TEXT =
  'Product Design · Design Systems · Fintech · WCAG/AODA · UX Strategy · Enterprise SaaS · ';

/* Individual word component so hooks are called at component top-level */
function Word({
  word,
  scrollYProgress,
  index,
}: {
  word: string;
  scrollYProgress: MotionValue<number>;
  index: number;
}) {
  const start   = 0.1 + index * 0.05;
  const end     = start + 0.15;
  const opacity = useTransform(scrollYProgress, [start, end], [0.08, 1]);

  return (
    <motion.span
      style={{ opacity, display: 'inline-block', marginRight: '0.28em' }}
    >
      {word}
    </motion.span>
  );
}

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const subtitleOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      aria-label="Manifesto"
      style={{
        background:     '#0d1f1e',
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        position:       'relative',
        overflow:       'hidden',
        isolation:      'isolate',
        marginBottom:   0,
        paddingBottom:  0,
      }}
    >
      {/* Grain overlay */}
      <div aria-hidden="true" className="grain-overlay" />

      {/* Statement */}
      <div
        style={{
          position: 'relative',
          zIndex:   1,
          padding:  'clamp(4rem, 8vw, 8rem) clamp(2rem, 6vw, 6rem)',
          maxWidth: '900px',
          textAlign: 'center',
        }}
      >
        <p
          aria-label="I don't make things beautiful. I make complexity disappear."
          style={{
            fontFamily: 'var(--font-playfair), Playfair Display, serif',
            fontSize:   'clamp(2.6rem, 5.5vw, 5rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color:      'white',
            margin:     0,
            padding:    0,
          }}
        >
          {WORDS.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              word={word}
              scrollYProgress={scrollYProgress}
              index={i}
            />
          ))}
        </p>
        <motion.p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 16,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.45)',
            marginTop: '1.5rem',
            letterSpacing: '0.02em',
            opacity: subtitleOpacity,
          }}
        >
          15 years. 3 industries. Countless systems.
        </motion.p>
      </div>

      {/* Marquee band */}
      <div
        aria-hidden="true"
        style={{
          position:    'relative',
          zIndex:      1,
          width:       '100%',
          marginTop:   '2rem',
          overflow:    'hidden',
          whiteSpace:  'nowrap',
          borderTop:   '1px solid rgba(79,166,161,0.15)',
          borderBottom:'1px solid rgba(79,166,161,0.15)',
          padding:     '0.85rem 0',
          background:  'rgba(79,166,161,0.05)',
        }}
      >
        <div style={{
          display:   'inline-flex',
          animation: 'marqueeScroll 20s linear infinite',
        }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              fontSize:      '11px',
              fontWeight:    600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color:         '#4FA6A1',
              paddingRight:  '3rem',
            }}>
              Product Design · Design Systems · Figma Expert · WCAG/AODA · Fintech · UX Strategy · Enterprise SaaS · Accessibility · &nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
