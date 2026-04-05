'use client'

import { motion } from 'motion/react'

const STEPS = [
  {
    number: '01',
    title: 'Understand Before Designing',
    description: 'Every project starts with the wrong assumptions. I surface them before they become expensive. Research, stakeholder interviews, and constraint mapping before a single frame is opened.',
  },
  {
    number: '02',
    title: 'Align Before Executing',
    description: 'Misaligned teams produce misaligned products. I run structured alignment sessions to establish shared definitions of success before execution begins.',
  },
  {
    number: '03',
    title: 'Systems First, Screens Second',
    description: 'A screen is an instance of a system. I design the system first - the logic, the hierarchy, the rules - so every screen inherits coherence instead of creating it from scratch.',
  },
  {
    number: '04',
    title: 'Outcomes, Not Just Output',
    description: 'Deliverables are not the goal. I track design decisions against real outcomes: reduced friction, faster task completion, fewer errors, clearer communication.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(4rem,6vw,5rem) clamp(1.5rem,3vw,3rem)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--teal)' }} />
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--teal)' }}>
            02 - Process
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'white',
            lineHeight: 1.15,
            marginBottom: '0.75rem',
          }}
        >
          A process built for complexity
        </motion.h2>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.5)', maxWidth: 420, lineHeight: 1.7 }}>
          Designed systems for regulated industries teach you that process is not overhead. It is what makes good work repeatable.
        </p>
      </div>

      {/* Steps */}
      <div
        className="process-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
          background: 'rgba(255,255,255,0.04)',
        }}
      >
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              padding: '2.5rem',
              borderTop: '1px solid rgba(191,207,198,0.1)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '3.5rem', fontWeight: 400, color: 'var(--teal)', opacity: 0.15, lineHeight: 1, marginBottom: '1.5rem' }}>
              {step.number}
            </div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: 'white', lineHeight: 1.4, marginBottom: '0.75rem' }}>
              {step.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
