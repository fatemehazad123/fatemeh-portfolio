'use client'

import { motion } from 'motion/react'

const CONTACT_ITEMS = [
  { label: 'Email',    value: 'info@fatemeh.ca',                href: 'mailto:info@fatemeh.ca',                     ariaLabel: 'Email Fatemeh at info@fatemeh.ca' },
  { label: 'LinkedIn', value: 'linkedin.com/in/fazadbakht',     href: 'https://linkedin.com/in/fazadbakht',         ariaLabel: "Fatemeh's LinkedIn profile (opens in new tab)" },
  { label: 'Portfolio',value: 'www.fatemeh.ca',                  href: 'https://www.fatemeh.ca',                         ariaLabel: 'Fatemeh\'s portfolio website' },
  { label: 'Location', value: 'Toronto, Canada',                href: undefined,                                    ariaLabel: undefined },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(4rem,6vw,5rem) clamp(1.5rem,3vw,3rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(8rem, 16rem, 16rem)',
          fontWeight: 400,
          color: 'rgba(28,27,24,0.03)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        FA.
      </div>

      <div
        className="contact-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem,5vw,5rem)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* LEFT */}
        <motion.div
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.25 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--teal)' }} />
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--teal)' }}>
              Get in Touch
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            {"Let's build"}
            <br />
            something
            <br />
            <em style={{ color: 'var(--teal)' }}>worth using.</em>
          </h2>

          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 300, color: 'rgba(28,27,24,0.5)', marginBottom: '0.75rem', lineHeight: 1.7 }}>
            Based in Toronto. Designing for the long term.
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 300, color: 'var(--ink)', opacity: 0.5, marginBottom: '2rem', lineHeight: 1.7 }}>
            Currently available for senior and staff designer roles in Toronto or remote Canada. I respond to every message within 24 hours.
          </p>

          <a
            href="mailto:info@fatemeh.ca"
            aria-label="Email Fatemeh at info@fatemeh.ca"
            className="contact-cta"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-inter)',
              fontSize: 11,
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              background: 'var(--ink)',
              color: 'var(--cream)',
              padding: '0.85rem 2rem',
              borderRadius: 2,
              border: 'none',
              transition: 'background 0.25s, color 0.25s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--teal)'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--ink)'
              e.currentTarget.style.color = 'var(--cream)'
            }}
          >
            Start a Conversation
          </a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {CONTACT_ITEMS.map((item, i) => (
            <div
              key={item.label}
              style={{
                padding: '1.5rem 0',
                borderBottom: i < CONTACT_ITEMS.length - 1 ? '1px solid var(--mid)' : 'none',
              }}
            >
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: 9, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(28,27,24,0.3)', marginBottom: '0.35rem' }}>
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  aria-label={item.ariaLabel}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-link"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none' }}
                >
                  {item.value}
                </a>
              ) : (
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--ink)' }}>
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
