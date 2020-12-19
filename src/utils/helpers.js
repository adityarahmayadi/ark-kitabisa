export const formatIDR = value => {
  if (!value) {
    return 'Rp. 0'
  }
  return `Rp. ${parseInt(value, 10).toLocaleString(
    'de-DE',
    'minimumFractionDigits',
    2
  )}`
}