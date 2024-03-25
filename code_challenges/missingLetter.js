/**
 * 
 * @param {Array} array 
 * @returns String
 * 
 * function to locate a missing letter in an array of 
 * alphabetic characters. ['a','b','d'] would return 'c'
 */
const missingLetter = (array) => {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z']  
  if (array[0] === array[0].toUpperCase()) { 
    alphabet = alphabet.map(x => x.toUpperCase())
  }
  const startidx = alphabet.indexOf(array[0])
  const subalpha = alphabet.slice(startidx, startidx + array.length)
  const missing = subalpha.find(x => !array.includes(x))
  return (missing || 'no missing letters') 
}

export default missingLetter