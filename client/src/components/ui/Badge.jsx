import { clsx } from 'clsx'

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-surface-gray-100 text-brand-navy-500',
    orange: 'bg-brand-orange-pale text-brand-orange',
    green: 'bg-green-100 text-green-700',
    navy: 'bg-brand-navy text-white',
  }

  return (
    <span className={clsx('inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}
