export async function submitQuote(data) {
  const response = await fetch('/api/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const json = await response.json()
  if (!response.ok) {
    throw new Error(json.message || 'Failed to submit quote')
  }
  return json
}
