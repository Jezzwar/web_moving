import { motion } from 'framer-motion'
import { ClipboardList, CalendarCheck, Smile } from 'lucide-react'
import { SectionWrapper, fadeUpVariant } from '../ui/SectionWrapper'
import { steps } from '../../data/steps'
import { Button } from '../ui/Button'
import { useModal } from '../../context/ModalContext'

const iconMap = { ClipboardList, CalendarCheck, Smile }

export function HowItWorksSection() {
  const { openModal } = useModal()

  return (
    <SectionWrapper id="how-it-works" className="py-8 lg:py-20" dark>
      <motion.div variants={fadeUpVariant} className="text-center mb-8 lg:mb-14">
        <span className="text-brand-orange font-semibold text-xs lg:text-sm uppercase tracking-widest">Simple Process</span>
        <h2 className="text-2xl lg:text-5xl font-extrabold text-white mt-1 lg:mt-2 mb-2 lg:mb-4">
          Moving Made Simple
        </h2>
        <p className="text-white/50 text-sm lg:text-lg max-w-xl mx-auto hidden lg:block">
          Three easy steps stand between you and a stress-free move.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-3 gap-3 lg:gap-12">
        {/* Connector line */}
        <div className="absolute top-8 lg:top-12 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px border-t-2 border-dashed border-brand-orange/30" />

        {steps.map((step, i) => {
          const Icon = iconMap[step.icon]
          return (
            <motion.div
              key={step.number}
              variants={fadeUpVariant}
              transition={{ delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-3 lg:mb-6">
                <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-2xl bg-brand-navy-700 border border-brand-navy-500 flex items-center justify-center">
                  <Icon size={20} className="text-brand-orange lg:hidden" />
                  <Icon size={32} className="text-brand-orange hidden lg:block" />
                </div>
                <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xs lg:text-xl font-bold text-white mb-1 lg:mb-3 leading-tight">{step.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed hidden lg:block">{step.description}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.div variants={fadeUpVariant} className="flex justify-center mt-6 lg:mt-12">
        <Button variant="primary" size="md" className="lg:!text-base lg:!px-8 lg:!py-4" onClick={openModal}>
          Start Your Move Today
        </Button>
      </motion.div>
    </SectionWrapper>
  )
}
