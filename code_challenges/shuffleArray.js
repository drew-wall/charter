const shuffleArray = array => {
  const shuffledIndexes = []
  let loopCnt = 0
  const len = array.length
  for (let i = 0; i < len; i++) {
    let found = true
    while(found) {
      const idx = Math.floor(Math.random() * len)
      if (!shuffledIndexes.includes(idx)) {
        shuffledIndexes.push(idx)
        found = false
      }
      loopCnt++
    }
  }
  console.log(loopCnt)
  return shuffledIndexes.map(i => array[i])
}
console.log(shuffleArray([1,2,3,3,4,10,12,30,40]))
