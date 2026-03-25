import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useModal } from '../../context/ModalContext'
import { QuoteForm } from '../forms/QuoteForm'

export function QuoteModal() {
  const { isOpen, closeModal } = useModal()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeModal() }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, closeModal])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                aria-label="Close"
              >
                <X size={16} className="text-gray-600" />
              </button>

              <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Free Estimate</span>
                <h2 className="text-2xl font-extrabold text-brand-navy mt-1">Get a Free Quote</h2>
                <p className="text-gray-500 text-sm mt-1">Fill in the details — we'll respond in 30 minutes</p>
              </div>

              <div className="p-8">
                <QuoteForm />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
