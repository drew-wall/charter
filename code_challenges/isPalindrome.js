/**
 * 
 * @param {String} str - string
 * @returns {Boolean} boolean
 * 
 * function to determine if string is a palindrome.
 * That is a string in reverse order is the same
 * as original string. ex: racecar, otto are palindromes
 */
const isPalindrome = str => {
  if (str[0] !== str[str.length -1 ]) return false
  let rev = ''
  for (const c of str) {
    rev = `${c}${rev}`
  }
  if (rev === str) return true
  return false
}

export default isPalindrome
