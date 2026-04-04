import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Building2, Map, Package } from 'lucide-react'
import { SectionWrapper, fadeUpVariant } from '../ui/SectionWrapper'
import { ServiceDrawer } from '../ui/ServiceDrawer'

const services = [
  {
    id: 'residential',
    Icon: Home,
    title: 'Residential Moving',
    description:
      'Stress-free home moves for families. We handle packing, loading, transport, and setup with care — treating every item as if it were our own.',
    features: [
      'Full packing & unpacking service',
      'Furniture disassembly & reassembly',
      'Fragile item specialist wrapping',
      'Same-day & weekend availability',
      'Licensed & insured movers',
    ],
  },
  {
    id: 'commercial',
    Icon: Building2,
    title: 'Commercial Moving',
    description:
      'Minimize downtime with our efficient office and business relocation services. We work around your schedule — including nights and weekends.',
    features: [
      'After-hours & weekend moves',
      'IT equipment & server room handling',
      'Floor plan coordination',
      'Secure chain-of-custody tracking',
      'Dedicated project manager',
    ],
  },
  {
    id: 'long-distance',
    Icon: Map,
    title: 'Long Distance Moving',
    description:
      'Coast-to-coast moves with GPS-tracked trucks and real-time updates along the way. Flat-rate pricing with no hidden fees.',
    features: [
      'Real-time GPS tracking',
      'Flat-rate guaranteed pricing',
      'Cross-state licensing',
      'Climate-controlled options',
      'Delivery window guarantees',
    ],
  },
  {
    id: 'storage',
    Icon: Package,
    title: 'Storage Solutions',
    description:
      'Secure, climate-controlled storage units for short or long-term needs across the US. Month-to-month flexibility with 24/7 access.',
    features: [
      'Climate-controlled units',
      '24/7 monitored security',
      'Month-to-month rentals',
      'Free pick-up & drop-off',
      'Sizes from 5×5 to 20×20 ft',
    ],
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState(null)

  const openService = (service) =>
    setActiveService({ ...service, icon: service.Icon })

  const closeDrawer = () => setActiveService(null)

  return (
    <SectionWrapper id="services" className="py-8 lg:py-20 bg-surface-gray-50">
      {/* Heading */}
      <motion.div variants={fadeUpVariant} className="text-center mb-8 lg:mb-12">
        <span className="text-brand-orange font-semibold text-xs lg:text-sm uppercase tracking-widest">
          What We Offer
        </span>
        <h2 className="text-2xl lg:text-5xl font-extrabold text-brand-navy mt-1 lg:mt-2 mb-2 lg:mb-4">
          Our Moving Services
        </h2>
        <p className="text-gray-400 text-sm lg:text-lg max-w-xl mx-auto hidden lg:block">
          From a single-room studio to a full corporate office, we have the expertise and equipment to get it done.
        </p>
      </motion.div>

      {/* Service buttons */}
      <motion.div
        variants={fadeUpVariant}
        className="flex flex-wrap gap-3 justify-center"
      >
        {services.map((service, i) => {
          const { Icon } = service
          return (
            <motion.button
              key={service.id}
              onClick={() => openService(service)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-5 py-3 bg-white border border-gray-100 rounded-full shadow-card text-brand-navy font-semibold text-sm hover:border-brand-orange/30 hover:shadow-hover transition-all duration-200 cursor-pointer"
            >
              <span className="w-7 h-7 bg-brand-orange-pale rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-200 shrink-0">
                <Icon
                  size={14}
                  className="text-brand-orange group-hover:text-white transition-colors duration-200"
                />
              </span>
              {service.title}
            </motion.button>
          )
        })}
      </motion.div>

      {/* Hint text */}
      <motion.p
        variants={fadeUpVariant}
        className="text-center text-gray-300 text-xs mt-5 hidden lg:block"
      >
        Click any service to learn more
      </motion.p>

      {/* Drawer */}
      <ServiceDrawer
        service={activeService}
        isOpen={!!activeService}
        onClose={closeDrawer}
      />
    </SectionWrapper>
  )
}
