/**
 * 
 * @param {String} str - String
 * @returns {Object} - Object
 * 
 * function to return count of each character in a string
 * 
 */
const countChars = str => {
  const res = [...str].reduce((acc, val) => {
    if (acc[val]) acc[val] += 1
    else acc[val] = 1
    return acc    
  }, {})
  return res
}

export default countChars
