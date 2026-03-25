const zipRegex = /^\d{5}$/
const phoneRegex = /^\+?[\d\s\-(). ]{7,}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { fromZip, toZip, moveDate, moveSize, name, phone, email } = req.body || {}

  if (!zipRegex.test(fromZip)) return res.status(400).json({ success: false, message: 'Invalid fromZip' })
  if (!zipRegex.test(toZip)) return res.status(400).json({ success: false, message: 'Invalid toZip' })
  if (!moveDate) return res.status(400).json({ success: false, message: 'moveDate is required' })
  if (!moveSize) return res.status(400).json({ success: false, message: 'moveSize is required' })
  if (!name?.trim()) return res.status(400).json({ success: false, message: 'Name is required' })
  if (!phoneRegex.test(phone)) return res.status(400).json({ success: false, message: 'Invalid phone' })
  if (!emailRegex.test(email)) return res.status(400).json({ success: false, message: 'Invalid email' })

  console.log('[Quote Lead]', { timestamp: new Date().toISOString(), fromZip, toZip, moveDate, moveSize, name, phone, email })

  return res.status(201).json({
    success: true,
    message: 'Quote request received. We will contact you within 30 minutes.',
  })
}
