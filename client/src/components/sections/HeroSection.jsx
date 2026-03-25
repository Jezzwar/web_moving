import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { useModal } from '../../context/ModalContext'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export function HeroSection() {
  const { openModal } = useModal()

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative h-screen lg:min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
      style={{
        backgroundImage: `url(/hero2.png?v=${Date.now()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Van driving across the page */}
      <motion.img
        src="/van_new.png"
        alt="moving van"
        className="absolute pointer-events-none"
        style={{ width: 180, bottom: '12%', zIndex: 5 }}
        initial={{ x: '110vw' }}
        animate={{ x: '-120vw' }}
        transition={{ duration: 4.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between h-full py-4 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center flex-1">
          {/* Left: Content */}
          <div className="rounded-3xl p-4 lg:p-8" style={{background:'rgba(30,30,40,0.35)',backdropFilter:'blur(24px) saturate(180%)',WebkitBackdropFilter:'blur(24px) saturate(180%)',border:'1px solid rgba(255,255,255,0.15)',boxShadow:'0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)'}}>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.12 }}
              className="space-y-3 lg:space-y-6"
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-brand-orange-pale border border-brand-orange/20 text-brand-orange text-xs lg:text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                  Trusted Nationwide Movers Since 2004
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight"
              >
                Reliable Moving{' '}
                <span className="text-brand-orange">&amp; Logistics</span>{' '}
                Across the USA
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-sm lg:text-lg text-white/80 leading-relaxed max-w-lg"
              >
                Fast, safe, and affordable transportation for homes and businesses.
                From coast to coast — we handle every detail so you don't have to.
              </motion.p>

              <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['SC', 'JR', 'EK'].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-white bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center text-white text-xs font-bold"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-brand-orange" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-white/70 font-medium">4.9/5 from 2,400+ reviews</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex gap-3 lg:hidden">
                <Button variant="primary" size="md" onClick={openModal}>
                  Get Free Quote
                </Button>
                <Button variant="outline" size="md" onClick={() => handleScroll('#how-it-works')}>
                  How It Works
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Van animation — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full" style={{ height: '320px' }}>
              <motion.img
                src="/smoke.png"
                alt="smoke"
                style={{ position: 'absolute', width: '42%', bottom: '8%', right: '2%', opacity: 0.85 }}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 0.85 }}
                transition={{ type: 'spring', stiffness: 55, damping: 14, delay: 1.0 }}
              />
              <motion.img
                src="/van_new.png"
                alt="moving van"
                style={{ position: 'absolute', width: '72%', bottom: '0%', left: '4%' }}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.3 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div style={{ position: 'relative', zIndex: 10 }} className="mt-3 lg:mt-16 grid grid-cols-4 gap-2 lg:gap-6">
          {[
            { stat: '50K+', label: 'Moves Completed', delay: 2.1 },
            { stat: '50',   label: 'States Covered',  delay: 1.7 },
            { stat: '4.9★', label: 'Avg Rating',      delay: 1.2 },
            { stat: '20+',  label: 'Years Exp.',       delay: 1.1 },
          ].map(({ stat, label, delay }) => (
            <motion.div
              key={label}
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.35, ease: 'easeOut' }}
            >
              <div className="text-lg lg:text-3xl font-extrabold text-white">{stat}</div>
              <div className="text-xs text-white/70 font-medium mt-0.5 leading-tight">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
