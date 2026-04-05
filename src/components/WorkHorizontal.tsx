'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { caseStudies } from '@/lib/caseStudies';

export default function WorkHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router     = useRouter();
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  /* Map scroll → horizontal translation */
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  /* Track active card based on scroll */
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      const idx = Math.round(v * (caseStudies.length - 1));
      setActiveIdx(Math.max(0, Math.min(idx, caseStudies.length - 1)));
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <div
      ref={sectionRef}
      id="work"
      style={{ height: '500vh', position: 'relative', marginTop: 0 }}
    >
      {/* Sticky viewport */}
      <div
        aria-label="Selected Work"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1a1006, #2d1a0a)',
          isolation: 'isolate',
        }}
      >
        {/* Grain */}
        <div aria-hidden="true" className="grain-overlay" />

        {/* Section header */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#4FA6A1',
            marginBottom: '0.5rem',
          }}>
            Selected Work
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
            fontWeight: 400,
            color: '#F4F6F4',
            margin: 0,
            lineHeight: 1.1,
          }}>
            Case Studies
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 11,
            color: 'rgba(191,207,198,0.4)',
            marginTop: '0.5rem',
          }}>
            {String(activeIdx + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
          </p>
        </div>

        {/* Scrolling cards row */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            paddingTop: '4rem',
          }}
        >
          <motion.div
            style={{
              display: 'flex',
              width: 'fit-content',
              gap: '3rem',
              padding: '0 10vw 0 35vw',
              x,
              willChange: 'transform',
            }}
          >
            {caseStudies.map((card, i) => (
              <WorkCard
                key={card.slug}
                card={card}
                index={i}
                scrollYProgress={scrollYProgress}
                total={caseStudies.length}
                onClick={() => router.push(`/work/${card.slug}`)}
              />
            ))}
          </motion.div>
        </div>

        {/* Dot indicator */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.6rem',
            zIndex: 10,
          }}
        >
          {caseStudies.map((_, i) => (
            <div
              key={i}
              style={{
                width:        i === activeIdx ? 24 : 8,
                height:       8,
                borderRadius: 4,
                background:   i === activeIdx ? '#4FA6A1' : 'rgba(191,207,198,0.2)',
                transition:   'width 0.3s, background 0.3s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Individual work card ───────────────────────────────────────────── */
interface WorkCardProps {
  card: (typeof caseStudies)[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  total: number;
  onClick: () => void;
}

function WorkCard({ card, index, scrollYProgress, total, onClick }: WorkCardProps) {
  const [hov, setHov] = useState(false);

  /* Scale each card as it scrolls into center */
  const cardStart  = index / total;
  const cardEnd    = cardStart + 1 / total;
  const scale      = useTransform(
    scrollYProgress,
    [cardStart, (cardStart + cardEnd) / 2, cardEnd],
    [0.88, 1, 0.88],
  );

  const ease = 'cubic-bezier(0.25,0.46,0.45,0.94)'

  return (
    <motion.div
      data-case-card
      role="button"
      tabIndex={0}
      aria-label={`View case study: ${card.title}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      layoutId={`card-${card.slug}`}
      animate={{ y: hov ? -12 : 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        scale,
        width:        'clamp(320px, 30vw, 480px)',
        height:       '70vh',
        borderRadius: 16,
        background:   card.cardColor,
        padding:      '3rem',
        flexShrink:   0,
        overflow:     'hidden',
        position:     'relative',
        boxShadow:    hov
          ? '0 40px 100px rgba(0,0,0,0.5)'
          : '0 8px 32px rgba(0,0,0,0.2)',
        transition:   `box-shadow 0.4s ${ease}`,
        willChange:   'transform',
        cursor:       'none',
      }}
    >
      {/* Hero image background */}
      {card.heroImage && (
        <div style={{
          position:     'absolute',
          inset:        0,
          overflow:     'hidden',
          borderRadius: '16px',
          zIndex:       0,
        }}>
          <div style={{
            width: '100%', height: '100%',
            transform: hov ? 'scale(1.08)' : 'scale(1)',
            transition: `transform 0.4s ${ease}`,
          }}>
            <Image
              src={card.heroImage}
              alt={card.title}
              fill
              quality={100}
              sizes="480px"
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.35 }}
            />
          </div>
          {/* Static gradient overlay */}
          <div style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.2) 100%)',
            zIndex:     1,
          }} />
        </div>
      )}

      {/* Teal gradient overlay at bottom — fades in on hover */}
      <div style={{
        position:   'absolute',
        bottom:     0, left: 0, right: 0,
        height:     '45%',
        background: 'linear-gradient(to top, rgba(79,166,161,0.18), transparent)',
        zIndex:     1,
        opacity:    hov ? 1 : 0,
        transition: `opacity 0.4s ${ease}`,
        pointerEvents: 'none',
      }} />

      {/* Big ghost number */}
      <p
        aria-hidden="true"
        style={{
          position:   'absolute',
          top:        '1.5rem',
          left:       '2.5rem',
          fontFamily: 'var(--font-playfair)',
          fontSize:   'clamp(4rem, 6vw, 6rem)',
          fontWeight: 700,
          color:      '#FFFFFF',
          opacity:    hov ? 0.18 : 0.08,
          lineHeight: 1,
          margin:     0,
          userSelect: 'none',
          transition: `opacity 0.4s ${ease}`,
        }}
      >
        {card.number}
      </p>

      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
        {/* Top */}
        <div>
          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2.5rem', marginTop: '1rem' }}>
            {card.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily:    'var(--font-inter)',
                fontSize:      10,
                fontWeight:    600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         '#FFFFFF',
                background:    'rgba(255,255,255,0.12)',
                border:        '1px solid rgba(255,255,255,0.25)',
                borderRadius:  4,
                padding:       '3px 8px',
              }}>{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize:   'clamp(1.4rem, 2vw, 2rem)',
            fontWeight: 400,
            color:      '#FFFFFF',
            lineHeight: 1.2,
            margin:     '0 0 1rem',
            textShadow: '0 2px 16px rgba(0,0,0,0.6)',
          }}>
            {card.title}
          </h3>

          {/* Subtitle */}
          <p style={{
            fontFamily:    'var(--font-inter)',
            fontSize:      11,
            fontWeight:    500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color:         '#FFFFFF',
            opacity:       0.85,
            textShadow:    '0 1px 8px rgba(0,0,0,0.5)',
            marginBottom:  '1.25rem',
          }}>
            {card.subtitle}
          </p>

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize:   14,
            fontWeight: 300,
            lineHeight: 1.7,
            color:      '#FFFFFF',
            opacity:    0.75,
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
          }}>
            {card.cardDescription}
          </p>
        </div>

        {/* Bottom */}
        <div>
          {/* Outcome pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {card.outcomes.slice(0, 2).map(o => (
              <span key={o.label} style={{
                fontFamily:    'var(--font-inter)',
                fontSize:      11,
                fontWeight:    500,
                letterSpacing: '0.06em',
                color:         card.cardTextColor,
                background:    'rgba(255,255,255,0.08)',
                border:        '1px solid rgba(255,255,255,0.15)',
                borderRadius:  4,
                padding:       '3px 8px',
              }}>{o.label}</span>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            display:       'flex',
            alignItems:    'center',
            gap:           '0.4rem',
            fontFamily:    'var(--font-inter)',
            fontSize:      12,
            fontWeight:    600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color:         card.cardTextColor,
            transform:     hov ? 'translateX(8px)' : 'translateX(0)',
            transition:    `transform 0.4s ${ease}`,
          }}>
            View Case Study
            <span aria-hidden="true" style={{ fontSize: 16 }}>→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
