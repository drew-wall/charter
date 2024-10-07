const firstRepeatingWord = str => {
  const words = str.split(' ')
  const res = words.reduce((acc, val, idx) => {
    if (acc[val]) {
      acc[val] = { ...acc[val], c: 2 }
    }
    else {
      acc[val] = { c: 1, i: idx }
    }
    return acc
  }, {})
  
  let minidx = Infinity
  let firstRepeating = ''
  for (const w in res) {
    if (res[w].c > 1) {
      if (res[w].i < minidx) {
        minidx = res[w].i
        firstRepeating = w
      }
    }
  }
  return firstRepeating
}
console.log(firstRepeatingWord('had he has have has'))
