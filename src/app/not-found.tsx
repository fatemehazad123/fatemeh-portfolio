import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a08',
      color: 'white',
      fontFamily: 'Inter, sans-serif',
      gap: '1rem',
    }}>
      <h2 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '3rem',
        fontWeight: 400,
      }}>
        404
      </h2>
      <p style={{ opacity: 0.5 }}>
        This page doesn&apos;t exist
      </p>
      <Link
        href="/"
        style={{
          color: '#4FA6A1',
          fontSize: '13px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        ← Go home
      </Link>
    </div>
  )
}
