/**
 * 
 * @param {Array} arr - Numbers
 * @param {Number} sum 
 * @returns {Boolean}
 * 
 * Function which returns boolean if any items in
 * the array add up to sum parameter
 */
const sumFinder = (arr, sum) => { 
  let i1
  for (let i = 0; i < arr.length; i++) {
    i1 = arr[i]
    if (i1 <= sum) {
      for (let j = i + 1; j < arr.length; j++) {
        if (i1 + arr[j] === sum) {
          return true
        }
      }
    }
  }
  return false
}

const sumFinderHash = (arr, sum) => {
  const ht = {}
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const diff = sum - num
    if (ht[diff]) return true
    ht[num] = true
  }
  return false
}

console.log(sumFinderHash([6,4,3,1,2,7],8))


console.log(sumFinder([6,4,3,1,2,7],8))
