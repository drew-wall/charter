const maxChar = str => {
  const chars = [...str].reduce((acc, c) => {
    acc[c] = acc[c] ? acc[c] + 1 : 1
    return acc
  }, {})
  let count = 0
  let maxchar = ''
  for (const c in chars) {
    if (chars[c] > count) {
      count = chars[c]
      maxchar = c
    }
  }
  return maxchar
}
console.log(maxChar('111111223444444444555'))
