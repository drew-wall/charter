/**
 * 
 * @param {Array} array - array of integers
 * @returns {Number} integer
 * 
 * function to get index of largest integer in an array of integers
 */
const getIndexOfLargestInteger = array => array.indexOf(Math.max(...array))

export default getIndexOfLargestInteger
