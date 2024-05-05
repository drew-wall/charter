/**
 * 
 * @param String str 
 * @returns String
 * 
 * function to capitalize every other character in a string
 */
const capEveryOtherChar = (str) => {
  return [...str].map((x, i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('')    
}

export default capEveryOtherChar
