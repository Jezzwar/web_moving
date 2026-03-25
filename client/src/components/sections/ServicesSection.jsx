import { motion } from 'framer-motion'
import { Home, Building2, Map, Package, ArrowRight } from 'lucide-react'
import { SectionWrapper, fadeUpVariant } from '../ui/SectionWrapper'
import { services } from '../../data/services'

const iconMap = { Home, Building2, Map, Package }

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="py-8 lg:py-20 bg-surface-gray-50">
      <motion.div variants={fadeUpVariant} className="text-center mb-8 lg:mb-14">
        <span className="text-brand-orange font-semibold text-xs lg:text-sm uppercase tracking-widest">What We Offer</span>
        <h2 className="text-2xl lg:text-5xl font-extrabold text-brand-navy mt-1 lg:mt-2 mb-2 lg:mb-4">
          Our Moving Services
        </h2>
        <p className="text-gray-400 text-sm lg:text-lg max-w-xl mx-auto hidden lg:block">
          From a single-room studio to a full corporate office, we have the expertise and equipment to get it done.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon]
          return (
            <motion.div
              key={service.id}
              variants={fadeUpVariant}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-4 lg:p-6 shadow-card border border-gray-100 hover:-translate-y-1.5 hover:shadow-hover transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-orange-pale rounded-xl flex items-center justify-center mb-3 lg:mb-5 group-hover:bg-brand-orange transition-colors duration-300 shrink-0">
                <Icon size={18} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-sm lg:text-lg text-brand-navy mb-1 lg:mb-2 leading-tight">{service.title}</h3>
              <p className="text-gray-400 text-xs lg:text-sm leading-relaxed mb-3 lg:mb-4 flex-1">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-brand-orange text-xs lg:text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                Learn more <ArrowRight size={12} />
              </span>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
