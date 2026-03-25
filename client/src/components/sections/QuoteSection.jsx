import { motion } from 'framer-motion'
import { QuoteForm } from '../forms/QuoteForm'
import { SectionWrapper, fadeUpVariant } from '../ui/SectionWrapper'

export function QuoteSection() {
  return (
    <SectionWrapper id="quote" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-10">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Free Estimate</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-navy mt-2">Get a Free Quote</h2>
          <p className="text-gray-500 mt-3">Fill in the details — we'll respond in 30 minutes</p>
        </motion.div>
        <motion.div
          variants={fadeUpVariant}
          className="bg-white rounded-3xl p-8 shadow-card border border-gray-100"
        >
          <QuoteForm />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
