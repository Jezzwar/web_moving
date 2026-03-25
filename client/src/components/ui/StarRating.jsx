import { Star } from 'lucide-react'

export function StarRating({ stars = 5, size = 16 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < stars ? 'fill-brand-orange text-brand-orange' : 'text-gray-200'}
        />
      ))}
    </div>
  )
}
