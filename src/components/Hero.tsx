'use client'
import dynamic from 'next/dynamic'

const ShaderBackground = dynamic(
  () => import('./ui/ShaderBackground'),
  { ssr: false }
)

export default function Hero() {
  return (
    <section
      aria-label="Hero — Senior Product and Visual Designer"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 640,
        background: '#0C0C0A',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      {/* WebGL Shader — full bleed, loads client-side */}
      <ShaderBackground />

      {/* Grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        opacity: 0.028, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '120px',
      }} />

      {/* CENTRE — name + copy */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 5,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        pointerEvents: 'none',
      }}>

        {/* Halo wrapper — dark radial fog behind all centre content */}
        <div style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(5,5,4,0.82) 0%, rgba(5,5,4,0.55) 45%, transparent 75%)',
          padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1rem, 5vw, 4rem)',
          borderRadius: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>

          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: 12, marginBottom: '2rem',
            animation: 'heroFadeUp 0.8s 0.5s both',
          }}>
            <div style={{ width: 20, height: 1, background: '#4FA6A1' }} />
            <span style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 9, fontWeight: 600,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#4FA6A1',
              textShadow: '0 2px 20px rgba(5,5,4,0.9)',
            }}>Senior Product &amp; Visual Designer · Toronto</span>
            <div style={{ width: 20, height: 1, background: '#4FA6A1' }} />
          </div>

          {/* NAME */}
          <div style={{
            marginBottom: '0.5rem',
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(5,5,4,0.75) 0%, transparent 100%)',
            padding: '1rem 3rem',
            borderRadius: 8,
          }}>
            <span className="hero-name" style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3.2rem, 10vw, 9rem)',
              fontWeight: 400, color: 'white',
              lineHeight: 0.84, letterSpacing: '-0.045em',
              display: 'block',
              animation: 'nameReveal 1s cubic-bezier(0.16,1,0.3,1) 0.9s both',
              textShadow: '0 0 200px rgba(3,3,2,1), 0 0 120px rgba(3,3,2,1), 0 0 80px rgba(3,3,2,0.98), 0 0 40px rgba(3,3,2,0.95), 0 4px 30px rgba(3,3,2,0.9)',
            }}>Fatemeh</span>

            <span className="hero-name" style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3.2rem, 10vw, 9rem)',
              fontWeight: 400, fontStyle: 'italic',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.75)',
              lineHeight: 0.84, letterSpacing: '-0.045em',
              display: 'block',
              paddingLeft: '3%',
              background: 'rgba(5,5,4,0.3)',
              borderRadius: 4,
              animation: 'nameReveal 1s cubic-bezier(0.16,1,0.3,1) 1.15s both',
              filter: 'drop-shadow(0 0 80px rgba(3,3,2,1)) drop-shadow(0 0 40px rgba(3,3,2,0.95))',
            }}>Azadbakht</span>
          </div>

          {/* Teal line draws under name */}
          <div style={{
            height: 1,
            background: 'linear-gradient(to right, transparent, #4FA6A1, transparent)',
            animation: 'lineGrow 0.8s cubic-bezier(0.16,1,0.3,1) 2s both',
            marginBottom: '2rem',
          }} />

          {/* Tagline */}
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 13, fontWeight: 300,
            color: 'white', opacity: 0.4,
            lineHeight: 1.8, maxWidth: 460,
            marginBottom: '2.25rem',
            animation: 'heroFadeUp 0.8s 2s both',
            textShadow: '0 0 60px rgba(3,3,2,1), 0 2px 40px rgba(3,3,2,1), 0 0 20px rgba(3,3,2,0.9)',
          }}>
            15 years building design systems for fintech,<br />
            enterprise, and regulated institutions.
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex', gap: 12,
            alignItems: 'center',
            pointerEvents: 'auto',
            animation: 'heroFadeUp 0.7s 2.3s both',
          }}>
            <a href="/#work" style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 9, fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: 'white', color: '#0C0C0A',
              padding: '0.85rem 2rem',
              borderRadius: 100,
              textDecoration: 'none',
            }}>View Work</a>
            <a href="/resume" style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 9, fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'white', opacity: 0.4,
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.18)',
              padding: '0.85rem 1.5rem',
              borderRadius: 100,
              textDecoration: 'none',
            }}>Resume</a>
          </div>

        </div>
      </div>

      {/* SCROLL HINT */}
      <div style={{
        position: 'absolute',
        bottom: '5.5rem', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 6,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 5,
        opacity: 0.35,
        animation: 'heroFadeUp 0.6s 2.9s both',
      }}>
        <div style={{
          width: 1, height: 28,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.45), transparent)',
          animation: 'scrollBob 2s ease-in-out infinite',
        }} />
        <span style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 7, fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'white',
        }}>Scroll</span>
      </div>

      {/* STATS BAR */}
      <div className="hero-stats" style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        zIndex: 6,
        display: 'flex',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(10,10,8,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        animation: 'heroFadeUp 0.7s 2.6s both',
      }}>
        {([
          { n: '15+',  l: 'Years',         s: 'Fintech · Enterprise', c: '#4FA6A1' },
          { n: '50+',  l: 'Products',       s: 'Shipped',              c: 'white'   },
          { n: '88K+', l: 'Users reached',  s: 'One unified system',   c: '#C96A4A' },
          { n: 'AA',   l: 'WCAG',           s: 'Every touchpoint',     c: '#BFCFC6' },
        ] as { n: string; l: string; s: string; c: string }[]).map((stat, i) => (
          <div key={i} style={{
            flex: 1, padding: '1rem 2.5rem',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.5rem', color: stat.c,
              lineHeight: 1, flexShrink: 0,
            }}>{stat.n}</span>
            <div>
              <span style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 7, fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'white', opacity: 0.38,
                display: 'block',
              }}>{stat.l}</span>
              <span style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 8, color: 'white',
                opacity: 0.45, display: 'block',
                marginTop: 1,
              }}>{stat.s}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nameReveal {
          from {
            opacity: 0;
            transform: translateY(60px) skewY(2deg);
            filter: blur(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0) skewY(0deg);
            filter: blur(0px);
          }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 55%; }
        }
        @keyframes scrollBob {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.65; }
        }
        @media (max-width: 480px) {
          .hero-name { font-size: clamp(2.8rem, 14vw, 4rem) !important; }
        }
      `}</style>
    </section>
  )
}
