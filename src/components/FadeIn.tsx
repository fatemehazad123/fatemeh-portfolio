'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 1, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
        transition={{
          duration: 0.75,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
