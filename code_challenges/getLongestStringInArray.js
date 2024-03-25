/**
 * 
 * @param {Array}  array - of strings
 * @returns {String} string
 * 
 * function to return the longest string in an array of strings
 */
const getLongestStringInArray = array => {
  let maxLength = 0
  let idx
  for (let i = 0; i < array.length; i++) {
    const len = array[i].length
    if (len > maxLength) {
      idx = i
      maxLength = len
    }
  }
  return array[idx]
}

export default getLongestStringInArray
