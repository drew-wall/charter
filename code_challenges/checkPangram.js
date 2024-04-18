/**
 * 
 * @param {String} str - string
 * @returns {Boolean} boolean
 * 
 * function to check if str is a pangram. i.e; string contains
 * all letters of the english alphabet
 */
const checkPangram = str => {
  let arr = str.toLowerCase().split('').filter(x => /[a-z]/.test(x))
  if ([...new Set(arr)].length === 26) return true
  return false 
}

export default checkPangram
