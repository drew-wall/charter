/**
 * 
 * @param {String} strng - string
 * @returns {String} string
 * 
 * function to increment a string. If string ends in a
 * number then that will be incremented, else '1' will
 * be appended to the string
 */
const incrementString = strng => {
  const parsed = strng.match(/([\w-]*[^\d]+)(\d*)$/)
  const format = str => 
    `${(parseInt(str, 10)+1).toString().padStart(str.length, '0')}`
  if (!parsed) {
    return format(strng)
  }
  let [, strpart, numpart] = parsed
  if (!numpart) {
    return `${strpart}1`
  }
  return `${strpart}${format(numpart)}`
}

export default incrementString
