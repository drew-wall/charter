/* Given an array of integers arr and a target sum target,
find all pairs of distinct integers that add up to the target sum.
Return an array of arrays containing these pairs sorted in ascending order.
If there are no such pairs, return an empty array. */

/**
 * 
 * @param {Array} arr - array of integers
 * @param {Number} target - integer
 * @returns {Array} Array
 * 
 * function which returns array of arrays where pairs of
 * values in arr add up to the target value
 */
const findPairs = (arr, target) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i]
    for (let j = i; j < arr.length; j++) {
      if (val !== arr[j] && val + arr[j] === target) {
        res.push([val, arr[j]].sort((a, b) => a - b))
      }
    }
  }
  return res.sort((a, b) => a[0] - b[0])
}

export default findPairs
