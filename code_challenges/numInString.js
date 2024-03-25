/**
 * 
 * @param {Array} array 
 * @returns Array
 * 
 * function which returns array of elements that contain a number
 */
const numInString = array => array.filter(value => /[0-9]/.test(value))

export default numInString
