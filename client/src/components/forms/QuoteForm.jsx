import { CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { useQuoteForm } from './useQuoteForm'

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}

const inputCls = (err) =>
  `w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-white placeholder:text-white/40 ${
    err
      ? 'border-red-400/60 bg-white/10'
      : 'border-white/20 bg-white/10 focus:border-brand-orange'
  }`

export function QuoteForm() {
  const { values, errors, status, errorMessage, handleChange, handleSubmit, reset, today } = useQuoteForm()

  if (status === 'success') {
    return (
      <div className="text-center py-8 px-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy mb-2">Quote Request Sent!</h3>
        <p className="text-gray-500 text-sm mb-6">
          We'll reach out within 30 minutes with your personalized estimate.
        </p>
        <Button variant="outline" size="sm" onClick={reset}>
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Field label="From ZIP" error={errors.fromZip}>
          <input
            type="text"
            name="fromZip"
            value={values.fromZip}
            onChange={handleChange}
            placeholder="10001"
            maxLength={5}
            className={inputCls(errors.fromZip)}
          />
        </Field>
        <Field label="To ZIP" error={errors.toZip}>
          <input
            type="text"
            name="toZip"
            value={values.toZip}
            onChange={handleChange}
            placeholder="90210"
            maxLength={5}
            className={inputCls(errors.toZip)}
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Move Date" error={errors.moveDate}>
          <input
            type="date"
            name="moveDate"
            value={values.moveDate}
            onChange={handleChange}
            min={today}
            className={inputCls(errors.moveDate)}
          />
        </Field>
        <Field label="Move Size" error={errors.moveSize}>
          <select
            name="moveSize"
            value={values.moveSize}
            onChange={handleChange}
            className={inputCls(errors.moveSize)}
          >
            <option value="">Select size</option>
            <option value="studio">Studio</option>
            <option value="1br">1 Bedroom</option>
            <option value="2br">2 Bedrooms</option>
            <option value="3br">3 Bedrooms</option>
            <option value="4br+">4+ Bedrooms</option>
            <option value="office">Office / Business</option>
          </select>
        </Field>
      </div>

      <Field label="Full Name" error={errors.name}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="John Smith"
          className={inputCls(errors.name)}
        />
      </Field>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Phone" error={errors.phone}>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputCls(errors.phone)}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="john@email.com"
            className={inputCls(errors.email)}
          />
        </Field>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
          <AlertCircle size={16} />
          {errorMessage}
        </div>
      )}

      <Button
        variant="primary"
        size="lg"
        loading={status === 'loading'}
        className="w-full"
        type="submit"
      >
        {status === 'loading' ? 'Sending...' : 'Get My Free Quote →'}
      </Button>

      <p className="text-center text-xs text-gray-400">
        <span className="text-white/50">No commitment required · Response within 30 minutes</span>
      </p>
    </form>
  )
}
