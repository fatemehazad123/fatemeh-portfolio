export default function Ticker() {
  const ITEMS = 'Product Design · Design Systems · Figma Expert · WCAG/AODA · Fintech · UX Strategy · Enterprise SaaS · TD Bank · Law Society of Ontario · FIRST Insurance · '

  const renderItems = (text: string) => {
    const parts = text.split('·')
    return parts.map((part, i) => (
      <span key={i}>
        {part.trim()}
        {i < parts.length - 1 && (
          <span style={{ color: 'var(--teal)', opacity: 1 }}>{' · '}</span>
        )}
        {' '}
      </span>
    ))
  }

  return (
    <div
      style={{
        background: 'var(--ink)',
        padding: '0.7rem 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: 'inline-block',
          animation: 'tickerScroll 28s linear infinite',
          willChange: 'transform',
        }}
      >
        {/* 3 copies for seamless -33.333% loop */}
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 10,
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.4)',
              paddingRight: '3rem',
            }}
          >
            {renderItems(ITEMS)}
          </span>
        ))}
      </div>
    </div>
  )
}
