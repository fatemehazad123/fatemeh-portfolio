'use client'

const steps = [
  {
    number: '01',
    title: 'Understand Before Designing',
    body: 'Every project starts with the wrong assumptions. I surface them before they become expensive. Research, stakeholder interviews, and constraint mapping before a single frame is opened.',
    proof: 'At TD Bank, I ran stakeholder interviews across three audience types before opening a single frame.',
  },
  {
    number: '02',
    title: 'Align Before Executing',
    body: 'Misaligned teams produce misaligned products. I run structured alignment sessions to establish shared definitions of success before execution begins.',
    proof: 'For Little Iran, I mapped municipal constraints before any visual exploration began.',
  },
  {
    number: '03',
    title: 'Systems First, Screens Second',
    body: 'A screen is an instance of a system. I design the logic, the hierarchy, the rules — so every screen inherits coherence instead of creating it from scratch.',
    proof: 'The FIRST Insurance design system consolidated 11 years of design debt into one governed token system.',
  },
  {
    number: '04',
    title: 'Outcomes, Not Just Output',
    body: 'Deliverables are not the goal. I track design decisions against real outcomes: reduced friction, faster task completion, fewer errors, clearer communication.',
    proof: 'The Silk Road identity delivered across 2 events in 6 weeks with zero brand inconsistencies.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: '#F4F6F4',
        padding: '6rem 0 5rem',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 3rem',
      }}>

        {/* HEADER */}
        <div
          className="process-header"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '4rem',
            gap: '2rem',
          }}
        >
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              <div style={{
                width: 28,
                height: 1,
                background: '#4FA6A1',
              }} />
              <span style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#4FA6A1',
              }}>02 — Process</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#2E2E2C',
              lineHeight: 1.15,
              margin: 0,
            }}>
              A process built<br />for complexity
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 16,
            fontWeight: 300,
            color: '#2E2E2C',
            opacity: 0.6,
            lineHeight: 1.75,
            maxWidth: 360,
            margin: 0,
            flexShrink: 0,
          }}>
            Designing in regulated industries teaches you
            that process is not overhead — it is what makes
            good work repeatable.
          </p>
        </div>

        {/* STEP CARDS — 2×2 grid */}
        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5px',
            background: '#E8EAE8',
            border: '1.5px solid #E8EAE8',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                background: '#F4F6F4',
                padding: '2.5rem',
                position: 'relative',
              }}
            >
              {/* Large ghost number */}
              <div
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '4.5rem',
                  fontWeight: 400,
                  color: '#4FA6A1',
                  opacity: 0.18,
                  lineHeight: 1,
                  position: 'absolute',
                  top: '1.5rem',
                  right: '2rem',
                  userSelect: 'none',
                }}
              >
                {step.number}
              </div>

              {/* Step number circle */}
              <div
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: '1.5px solid #4FA6A1',
                  color: '#4FA6A1',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  marginBottom: '1.25rem',
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 20,
                fontWeight: 400,
                color: '#2E2E2C',
                margin: '0 0 1rem',
                lineHeight: 1.3,
                paddingRight: '3rem',
              }}>
                {step.title}
              </h3>

              {/* Body */}
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 15,
                fontWeight: 300,
                color: '#2E2E2C',
                opacity: 0.7,
                lineHeight: 1.8,
                margin: '0 0 1.5rem',
              }}>
                {step.body}
              </p>

              {/* Proof line */}
              <div style={{
                borderLeft: '2px solid #4FA6A1',
                paddingLeft: '1rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 13,
                  fontStyle: 'italic',
                  color: '#4FA6A1',
                  margin: 0,
                  lineHeight: 1.65,
                  fontWeight: 400,
                }}>
                  {step.proof}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
