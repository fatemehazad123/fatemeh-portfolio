export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a08',
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '1px solid rgba(79,166,161,0.3)',
        borderTop: '1px solid #4FA6A1',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
