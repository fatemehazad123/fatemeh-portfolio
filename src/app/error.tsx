'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

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
      <h2 style={{ fontSize: '1.5rem' }}>
        Something went wrong
      </h2>
      <button
        onClick={reset}
        style={{
          background: '#4FA6A1',
          color: '#1a1a18',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '2px',
          cursor: 'none',
          fontWeight: 700,
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Try again
      </button>
    </div>
  )
}
