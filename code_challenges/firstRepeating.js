/**
 * 
 * @param {Array} array 
 * @returns {any | undefined} any | undfined
 * 
 * function to return the first repeating element in an array
 * or undefined if no repeating elements
 */

const firstRepeating = array => {
  for (const a of array) {
   if (array.indexOf(a) !== array.lastIndexOf(a)) {
     return a
   }
  }
}

export default firstRepeating
