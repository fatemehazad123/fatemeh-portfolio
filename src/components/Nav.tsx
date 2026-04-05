'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/resume' },
]

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [visible, setVisible]       = useState(true)
  const [menuOpen, setMenuOpen]     = useState(false)
  const lastY = useRef(0)

  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setVisible(y < lastY.current || y < 60)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        animate={{ y: visible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          background: scrolled ? 'rgba(245,242,237,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(28,27,24,0.08)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        {/* Progress bar */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: 'var(--teal)',
            scaleX,
            transformOrigin: 'left',
          }}
        />

        {/* Desktop nav */}
        <div
          className="nav-desktop"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 3rem',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ fontFamily: 'var(--font-playfair)', fontSize: 17, fontWeight: 400, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
            FA<span style={{ color: 'var(--teal)' }}>.</span>
          </Link>

          {/* Links */}
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 10,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: 'var(--ink)',
                  opacity: 0.35,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.35')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--teal)',
                  display: 'inline-block',
                  animation: 'availPulse 2s ease-in-out infinite',
                }}
              />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, color: 'var(--teal)', fontWeight: 500 }}>
                Available
              </span>
            </div>
            <Link
              href="/#contact"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 10,
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                background: 'var(--ink)',
                color: 'var(--cream)',
                padding: '0.55rem 1.3rem',
                borderRadius: 2,
                border: 'none',
                display: 'inline-block',
                transition: 'opacity 0.2s',
              }}
            >
              {"Let's Talk"}
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className="nav-mobile"
          style={{
            width: '100%',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
          }}
        >
          <Link href="/" style={{ fontFamily: 'var(--font-playfair)', fontSize: 17, fontWeight: 400, color: 'var(--ink)' }}>
            FA<span style={{ color: 'var(--teal)' }}>.</span>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{ background: 'none', border: 'none', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)', borderRadius: 1 }} />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--ink)',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute',
                top: 20,
                right: 24,
                background: 'none',
                border: 'none',
                color: 'rgba(245,242,237,0.6)',
                fontSize: 24,
                lineHeight: 1,
              }}
            >
              &#x2715;
            </button>

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '2.5rem',
                    fontStyle: 'italic',
                    color: 'rgba(245,242,237,0.9)',
                    display: 'block',
                    textAlign: 'center',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  background: 'var(--teal)',
                  color: 'white',
                  padding: '0.8rem 2rem',
                  borderRadius: 2,
                  display: 'inline-block',
                  marginTop: '1rem',
                }}
              >
                {"Let's Talk"}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
