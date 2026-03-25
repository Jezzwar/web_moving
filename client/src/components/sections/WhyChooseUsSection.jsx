import { motion } from 'framer-motion'
import { ShieldCheck, DollarSign, Users, Globe } from 'lucide-react'
import { SectionWrapper, fadeUpVariant } from '../ui/SectionWrapper'
import { features } from '../../data/features'
import { MorphingCardStack } from '../ui/MorphingCardStack'

const iconMap = { ShieldCheck, DollarSign, Users, Globe }

const cardData = features.map((f) => {
  const Icon = iconMap[f.icon]
  return {
    id: f.title,
    title: f.title,
    stat: f.stat,
    unit: f.stat === '50' ? 'states' : f.stat === '20+' ? 'years' : undefined,
    description: f.description,
    icon: Icon ? <Icon size={20} /> : null,
  }
})

export function WhyChooseUsSection() {
  return (
    <SectionWrapper id="why-us" className="py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text + MorphingCardStack */}
        <div>
          <motion.div variants={fadeUpVariant}>
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Why SwiftMove</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-navy mt-2 mb-5">
              Moving With Confidence
            </h2>

          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <MorphingCardStack cards={cardData} />
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div variants={fadeUpVariant} className="relative">
          <div className="relative bg-brand-navy rounded-3xl p-4 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Truck illustration area */}
              <div className="text-center mb-3 overflow-hidden" style={{paddingTop: '1%'}}>
                <div style={{position: 'relative', height: '150px', margin: '0 auto 3%', width: '90%'}}>
                  <motion.img
                    src="/van_new.png"
                    alt="moving van"
                    style={{position: 'absolute', width: '65%', bottom: '-10%', left: 0}}
                    initial={{ x: 160, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.2 }}
                  />
                  <motion.img src="/smoke.png" alt="smoke"
                    style={{position: 'absolute', width: '37%', bottom: 0, right: 0}}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.8 }}
                  />
                </div>
                <div className="text-white font-bold text-xl">GPS-Tracked Moves</div>
                <div className="text-white/50 text-sm mt-1">Real-time updates on your shipment</div>
              </div>

              {/* Live tracking mockup */}
              <div className="bg-brand-navy-700 rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400 font-medium">MOVE #SM-20482</span>
                  <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    In Transit
                  </span>
                </div>
                <div className="relative h-2 bg-brand-navy-500 rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-3/5 bg-brand-orange rounded-full" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Austin, TX</span>
                  <span>60% complete</span>
                  <span>Los Angeles, CA</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'ETA', value: 'Mar 24' },
                  { label: 'Distance', value: '1,235 mi' },
                  { label: 'Items', value: '127' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-brand-navy-700 rounded-xl p-3 text-center">
                    <div className="text-white font-bold text-sm">{value}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-hover p-3 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck size={16} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-brand-navy">Fully Insured</div>
                <div className="text-xs text-gray-400">Up to $100K</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
