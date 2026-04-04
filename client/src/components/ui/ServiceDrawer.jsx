import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function ServiceDrawer({ service, isOpen, onClose }) {
  const dragY = useRef(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && service && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-form overflow-hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 36, mass: 0.8 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.05, bottom: 0.3 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 80 || info.velocity.y > 400) onClose()
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing">
              <div className="w-10 h-1 bg-gray-200 rounded-full" />
            </div>

            <div className="px-6 pb-10 pt-4 max-w-lg mx-auto w-full">
              {/* Icon + close */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 bg-brand-orange-pale rounded-2xl flex items-center justify-center">
                  {service.icon && (
                    <service.icon size={26} className="text-brand-orange" />
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-surface-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-brand-navy transition-colors duration-150"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-extrabold text-brand-navy mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
              {service.features && (
                <ul className="space-y-2 mb-8">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-brand-orange-pale rounded-full flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-orange-light transition-colors duration-200 text-sm tracking-wide"
              >
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
