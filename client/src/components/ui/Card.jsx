import { clsx } from 'clsx'

export function Card({ children, hoverable = false, className, ...props }) {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl p-6 shadow-card border border-gray-100',
        hoverable && 'hover:-translate-y-1 hover:shadow-hover transition-all duration-300 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
