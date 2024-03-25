/**
 * 
 * @param {String} str - string 
 * @returns {String} string
 * 
 * function to return the longest non repeating string
 */
const getLongestNonrepeatingString = str => {
  let longest = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1] && str[i] !== str[i-1]) {
      longest += str[i]
    }
    else {
      longest += ','
    }
  }
  return longest.split(',').reduce((acc, val) => {
    if (val.length > acc.length) {
      acc = val
    }
    return acc
  }, '')
}

export default getLongestNonrepeatingString
