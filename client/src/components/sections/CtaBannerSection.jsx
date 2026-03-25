import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { useModal } from '../../context/ModalContext'

export function CtaBannerSection() {
  const { openModal } = useModal()

  return (
    <section id="cta" className="py-20 bg-brand-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Get Your Free Estimate Today
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            Ready to Start<br />Your Move?
          </h2>
          <p className="text-white/80 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Join 50,000+ satisfied customers. Get a free quote in under 2 minutes — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                onClick={openModal}
                className="!bg-white !text-brand-orange hover:!bg-white/90 shadow-xl"
              >
                Get Free Quote
              </Button>
            </motion.div>

            <a href="tel:+18005551234">
              <Button variant="outline-white" size="lg" icon={Phone}>
                Call (800) 555-1234
              </Button>
            </a>
          </div>

          <p className="text-white/60 text-sm mt-8">
            Available Mon–Sat 7am–9pm EST · Licensed · Insured · USDOT Certified
          </p>
        </motion.div>
      </div>
    </section>
  )
}
