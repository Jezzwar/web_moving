import { clsx } from 'clsx'

export function Button({ variant = 'primary', size = 'md', loading = false, icon: Icon, children, className, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-brand-orange-light focus:ring-brand-orange shadow-md hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-brand-navy text-white hover:bg-brand-navy-700 focus:ring-brand-navy shadow-md hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange-pale focus:ring-brand-orange',
    ghost: 'text-brand-navy hover:bg-surface-gray-100 focus:ring-brand-navy',
    'outline-white': 'border-2 border-white text-white hover:bg-white/10 focus:ring-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : Icon ? (
        <Icon size={16} />
      ) : null}
      {children}
    </button>
  )
}
