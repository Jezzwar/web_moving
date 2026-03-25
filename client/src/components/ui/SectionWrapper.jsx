import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { clsx } from 'clsx'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function SectionWrapper({ id, className, children, dark = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section id={id} ref={ref} className={clsx(dark ? 'bg-brand-navy' : '', className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}
