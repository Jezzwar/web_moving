import { Router } from 'express'
import Joi from 'joi'

const router = Router()

const zipRegex = /^\d{5}$/
const quoteSchema = Joi.object({
  fromZip: Joi.string().pattern(zipRegex).required().messages({
    'string.pattern.base': 'fromZip must be a 5-digit ZIP code',
    'any.required': 'fromZip is required',
  }),
  toZip: Joi.string().pattern(zipRegex).required().messages({
    'string.pattern.base': 'toZip must be a 5-digit ZIP code',
    'any.required': 'toZip is required',
  }),
  moveDate: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .custom((value, helpers) => {
      const today = new Date().toISOString().split('T')[0]
      if (value < today) return helpers.error('date.past')
      return value
    })
    .required()
    .messages({
      'any.required': 'moveDate is required',
      'date.past': 'moveDate cannot be in the past',
    }),
  moveSize: Joi.string().valid('studio', '1br', '2br', '3br', '4br+', 'office').required(),
  name: Joi.string().min(2).max(100).required(),
  phone: Joi.string().min(7).max(20).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
})

router.post('/', async (req, res) => {
  const { error, value } = quoteSchema.validate(req.body, { abortEarly: false })

  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: error.details.map((d) => ({ field: d.path[0], message: d.message })),
    })
  }

  // Log the lead (in production: send email, save to DB, post to CRM)
  console.log('[Quote Lead]', {
    timestamp: new Date().toISOString(),
    ...value,
  })

  res.status(201).json({
    success: true,
    message: 'Quote request received. We will contact you within 30 minutes.',
  })
})

export default router
