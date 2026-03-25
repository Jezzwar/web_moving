import { useState } from 'react'
import { submitQuote } from '../../lib/api'

const initialValues = {
  fromZip: '',
  toZip: '',
  moveDate: '',
  moveSize: '',
  name: '',
  phone: '',
  email: '',
}

const zipRegex = /^\d{5}$/
const phoneRegex = /^\+?[\d\s\-().]{7,}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const today = new Date().toISOString().split('T')[0]

function validate(values) {
  const errors = {}
  if (!zipRegex.test(values.fromZip)) errors.fromZip = 'Enter a valid 5-digit ZIP'
  if (!zipRegex.test(values.toZip)) errors.toZip = 'Enter a valid 5-digit ZIP'
  if (!values.moveDate) errors.moveDate = 'Please select a move date'
  else if (values.moveDate < today) errors.moveDate = 'Move date cannot be in the past'
  if (!values.moveSize) errors.moveSize = 'Please select a move size'
  if (!values.name.trim()) errors.name = 'Name is required'
  if (!phoneRegex.test(values.phone)) errors.phone = 'Enter a valid phone number'
  if (!emailRegex.test(values.email)) errors.email = 'Enter a valid email address'
  return errors
}

export function useQuoteForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => { const next = { ...prev }; delete next[name]; return next })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('loading')
    try {
      await submitQuote(values)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
    }
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
    setErrorMessage('')
  }

  return { values, errors, status, errorMessage, handleChange, handleSubmit, reset, today }
}
