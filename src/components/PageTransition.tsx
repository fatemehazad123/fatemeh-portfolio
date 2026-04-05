'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Layer 2: ink */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.08,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--ink)',
            zIndex: 9990,
            transformOrigin: 'top',
            pointerEvents: 'none',
          }}
        />
        {/* Layer 1: teal */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--teal)',
            zIndex: 9991,
            transformOrigin: 'top',
            pointerEvents: 'none',
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
