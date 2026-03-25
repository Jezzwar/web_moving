import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Truck, Phone } from 'lucide-react'
import { Button } from '../ui/Button'
import { useModal } from '../../context/ModalContext'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openModal } = useModal()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMobileOpen(false)
      }
    }
    if (mobileOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleQuoteClick = () => {
    setMobileOpen(false)
    openModal()
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" onClick={() => handleNavClick('#hero')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-brand-orange rounded-xl flex items-center justify-center">
              <Truck size={18} className="text-white" />
            </div>
            <div>
              <span className={`font-bold text-xl leading-none block ${scrolled ? 'text-brand-navy' : 'text-white'}`}>Swift</span>
              <span className="text-brand-orange font-bold text-xl leading-none block -mt-0.5">Move</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`font-medium transition-colors duration-200 text-sm hover:text-brand-orange ${scrolled ? 'text-gray-600' : 'text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+18005551234" className={`text-sm font-medium hover:text-brand-orange transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}>
              (800) 555-1234
            </a>
            <Button variant="primary" size="sm" onClick={handleQuoteClick}>
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="relative lg:hidden" ref={dropdownRef}>
            <button
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={24} /></motion.span>
                  : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={24} /></motion.span>
                }
              </AnimatePresence>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden origin-top-right"
                >
                  <nav className="py-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <div className="px-3 pb-3 pt-1 flex flex-col gap-2 border-t border-gray-100">
                    <button
                      onClick={handleQuoteClick}
                      className="w-full py-2.5 rounded-xl bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange/90 transition-colors"
                    >
                      Get Free Quote
                    </button>
                    <a
                      href="tel:+18005551234"
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <Phone size={14} />
                      (800) 555-1234
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}
