'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On home page: transparent with white text until scrolled
  // On all other pages: always cream bg + dark text
  const isDark = isHome && !scrolled

  return (
    <nav style={{
      position: isHome ? 'fixed' : 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.1rem 3rem',
      background: isDark ? 'rgba(0,0,0,0)' : 'rgba(244,246,244,0.96)',
      backdropFilter: isDark ? 'none' : 'blur(20px)',
      WebkitBackdropFilter: isDark ? 'none' : 'blur(20px)',
      borderBottom: isDark
        ? '1px solid rgba(255,255,255,0.08)'
        : '1px solid rgba(46,46,44,0.07)',
      transition: 'background 0.4s ease, border-color 0.4s ease',
    }}>
      {/* Logo */}
      <Link href="/" style={{
        fontFamily: 'var(--font-playfair)',
        fontSize: 17,
        color: isDark ? 'white' : '#2E2E2C',
        textDecoration: 'none',
        transition: 'color 0.4s',
      }}>
        FA<span style={{ color: '#4FA6A1' }}>.</span>
      </Link>

      {/* Links */}
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {([
          { label: 'Work',    href: isHome ? '#work'    : '/#work'    },
          { label: 'Process', href: isHome ? '#process' : '/#process' },
          { label: 'About',   href: isHome ? '#about'   : '/#about'   },
          { label: 'Resume',  href: '/resume' },
        ] as { label: string; href: string }[]).map(l => (
          <Link key={l.label} href={l.href} style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: isDark ? 'rgba(255,255,255,0.65)' : '#2E2E2C',
            opacity: isDark ? 1 : 0.45,
            textDecoration: 'none',
            transition: 'color 0.4s, opacity 0.4s',
          }}>{l.label}</Link>
        ))}
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-inter)',
          fontSize: 9, fontWeight: 500,
          color: '#4FA6A1',
        }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#4FA6A1',
            animation: 'navPulse 2s ease-in-out infinite',
          }} />
          {mounted ? 'Available' : ''}
        </div>
        <Link href={isHome ? '#contact' : '/#contact'} style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 9, fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          background: isDark ? 'white' : '#2E2E2C',
          color: isDark ? '#0C0C0A' : '#F4F6F4',
          padding: '0.55rem 1.3rem',
          borderRadius: 100,
          textDecoration: 'none',
          transition: 'background 0.4s, color 0.4s',
        }}>Let&apos;s Talk</Link>
      </div>

      <style>{`
        @keyframes navPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(79,166,161,0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(79,166,161,0); }
        }
      `}</style>
    </nav>
  )
}
