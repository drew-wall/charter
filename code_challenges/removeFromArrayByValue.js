/**
 * 
 * @param {Array} array 
 * @param {Any} value 
 * @returns {Array} array
 * 
 * function to remove all occurrences of value from the array
 */
const removeFromArrayByValue = (array, value) => {
  return array.filter(x => x !== value)
}

export default removeFromArrayByValue
