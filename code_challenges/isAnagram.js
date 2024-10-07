const isAnagram = (s, t) => {
  s = s.toLowerCase().replace(/[\W]/g, '')
  t = t.toLowerCase().replace(/[\W]/g, '')
  if (s.length !== t.length) return false
  const sSorted = s.split('').sort((a, b) => a.localeCompare(b))
  const tSorted = t.split('').sort((a, b) => a.localeCompare(b))
  if (sSorted.join('') === tSorted.join('')) return true
  return false
}

console.log(isAnagram('triangle','integral'))