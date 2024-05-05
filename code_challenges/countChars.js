/**
 * 
 * @param String str
 * @returns Object
 * 
 * function to get counts of each character in a string and return
 * in an object with key being the character and value being count
 * 
 */
const countChars = str => {
  const res = [...str].reduce((acc, val) => {
    acc[val] ? acc[val] += 1 : acc[val] = 1
    return acc    
  }, {})
  return res
}

export default countChars
