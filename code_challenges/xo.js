/**
 * 
 * @param {String} str - String
 * @returns {Boolean} Boolean
 * 
 * function to return true or false if same
 * number 'o' as 'x' characters in str. Case insensitive
 */
const xo = (str) => {
  const x = str.match(/x/gi) || []
  const o = str.match(/o/gi) || []
  return x.length === o.length
}

export default xo