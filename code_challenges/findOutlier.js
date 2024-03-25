/**
 * 
 * @param {Array} integers - array of integers
 * @returns {Number} Integer
 * 
 * function to find outlier in array of integers
 * based on whether it is odd or even, 
 * [0, 2, 11, 20] would return 11
 */
const findOutlier = integers => {
  const even = integers.filter(x => x % 2 === 0) 
  if (even.length === 1) {
      return even[0]
  }
  const odd = integers.filter(x => x % 2)
  return odd[0]
}

export default findOutlier