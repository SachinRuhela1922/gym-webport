/**
 * Format date consistently to prevent hydration mismatches
 * Always returns the same format regardless of locale
 */
export function formatDate(date: string | Date, format: 'short' | 'long' = 'short'): string {
  const d = new Date(date)
  
  if (format === 'long') {
    // Returns: "July 15, 2024"
    const month = d.toLocaleString('en-US', { month: 'long' })
    const day = d.getDate()
    const year = d.getFullYear()
    return `${month} ${day}, ${year}`
  }
  
  // Returns: "7/15/2024" (consistent across all locales)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const year = d.getFullYear()
  return `${month}/${day}/${year}`
}
