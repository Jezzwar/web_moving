import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionWrapper, fadeUpVariant } from '../ui/SectionWrapper'
import { StarRating } from '../ui/StarRating'
import { testimonials } from '../../data/testimonials'

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" className="py-20 bg-surface-gray-50">
      <motion.div variants={fadeUpVariant} className="text-center mb-14">
        <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Customer Reviews</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-navy mt-2 mb-4">
          Trusted by Thousands Across the US
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Don't just take our word for it — here's what our customers say.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-5 h-5 fill-brand-orange" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-bold text-brand-navy">4.9</span>
          <span className="text-gray-400 text-sm">· 2,400+ reviews on Google</span>
        </div>
      </motion.div>

      {/* Desktop grid / Mobile scroll */}
      <div className="testimonials-track lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-x-visible">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            variants={fadeUpVariant}
            transition={{ delay: i * 0.1 }}
            className="testimonial-card-mobile lg:flex-none bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 relative"
            style={{ borderLeft: '4px solid #FF6B2B' }}
          >
            <Quote size={24} className="text-brand-orange/20 mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-brand-navy text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.city}</div>
                </div>
              </div>
              <div className="text-right">
                <StarRating stars={t.stars} size={13} />
                <div className="text-xs text-gray-400 mt-1">{t.date}</div>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">Verified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
