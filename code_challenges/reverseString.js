/**
 * 
 * @param {String} str
 * @returns String
 * 
 * function to reverse a string
 */
const reverseString = str => {
  let revStr = ''
  for (const c of str) {
    revStr = `${c}${revStr}`
  }
  return revStr
}

export default reverseString