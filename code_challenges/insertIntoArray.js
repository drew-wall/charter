/**
 * 
 * @param {Array} array 
 * @param {Number} index 
 * @param {Any} value 
 * @returns {Array} array
 * 
 * function to insert a value at a given index in the array
 */
const insertIntoArray = (array, index, value) => {
  return [...array.slice(0, index), value, ...array.slice(index)]
}

export default insertIntoArray
