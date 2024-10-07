const findMostRepeating = array => {
  if (!Array.isArray(array) || !array.length) return {}
  const map = array.flat(Infinity).reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1
    return acc
  }, {})
  
  let val = ''
  let count = 0
  for (const key in map) {
    const mapval = map[key]
    if (mapval > count) {
      val = key
      count = mapval
    }
  }
  return {[val]: count}
}
console.log(findMostRepeating([[1,2,3],1, [3,4,5,6],3]))
