import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { clsx } from "clsx"

const SWIPE_THRESHOLD = 50

export function MorphingCardStack({ cards = [], className }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  if (!cards || cards.length === 0) return null

  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info
    const swipe = Math.abs(offset.x) * velocity.x
    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }
    setIsDragging(false)
  }

  const getStackOrder = () => {
    const reordered = []
    for (let i = 0; i < cards.length; i++) {
      const index = (activeIndex + i) % cards.length
      reordered.push({ ...cards[index], stackPosition: i })
    }
    return reordered.reverse()
  }

  const displayCards = getStackOrder()

  return (
    <div className={clsx("space-y-4", className)}>
      {/* Stack container */}
      <div className="relative mx-auto" style={{ height: 200 }}>
        <AnimatePresence mode="popLayout">
          {displayCards.map((card) => {
            const isTop = card.stackPosition === 0
            const offset = card.stackPosition

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  scale: 1 - offset * 0.04,
                  y: offset * 10,
                  zIndex: cards.length - offset,
                  rotate: (offset - 1) * 1.5,
                }}
                exit={{ opacity: 0, x: -300, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                whileDrag={{ scale: 1.03 }}
                className={clsx(
                  "absolute inset-0 rounded-2xl bg-white border border-gray-100 shadow-card p-5",
                  isTop ? "cursor-grab active:cursor-grabbing" : "cursor-default"
                )}
              >
                <div className="flex items-start gap-4 h-full">
                  {card.icon && (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange-pale text-brand-orange">
                      {card.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    {card.stat && (
                      <div className="flex items-baseline gap-1.5 mb-1">
                        <span className="text-3xl font-extrabold text-brand-navy">{card.stat}</span>
                        {card.unit && <span className="text-sm text-gray-400 font-medium">{card.unit}</span>}
                      </div>
                    )}
                    <h3 className="font-bold text-brand-navy text-base mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{card.description}</p>
                  </div>
                </div>

                {isTop && (
                  <p className="absolute bottom-3 right-4 text-xs text-gray-300">swipe →</p>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 pt-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={clsx(
              "h-1.5 rounded-full transition-all",
              index === activeIndex ? "w-4 bg-gray-400" : "w-1.5 bg-gray-200 hover:bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  )
}
