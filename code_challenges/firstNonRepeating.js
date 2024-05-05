/**
 * 
 * @param Array array
 * @returns {any | undefined} any | undefined
 * 
 * function to find the first non repeating element in an array
 */
const firstNonRepeating = array => {
  for (const a of array) {
   if (array.indexOf(a) === array.lastIndexOf(a)) {
     return a
   }
  }
}

export default firstNonRepeating
