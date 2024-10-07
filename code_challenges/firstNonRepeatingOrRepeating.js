/**
 * 
 * @param Array array 
 * @param Boolean nonrepeating 
 * @returns any
 * 
 * Function to return the first nonrepeating or repeating element in an array.
 * The param 'nonrepeating' is set to true by default to return first nonrepeating
 * element in the array. Set to false to return first repeating element in the array.
 * 
 * This function must be wrapped in a try, catch block as it will throw an error
 * if no nonrepeating/repeating elements are found. As the array can contain
 * any value types, we need to use a Map to store unique array element keys
 * as they will be inserted in order so no need to worry about indexes.
 * A simple object will convert array elements to strings; 1 and '1' will 
 * both be considered the same key.
 * 
 * We simply can't return undefined or null when not found because these can
 * be valid return values.
 */
const firstNonRepeatingOrRepeating = (array, nonrepeating = true) => {
  if(!Array.isArray(array)) {
    throw new TypeError(`Expected array as first paramater, got ${typeof array}`)
  }
  if (typeof nonrepeating !== 'boolean') {
    throw new TypeError(`Expected boolean as second paramater, got ${typeof nonrepeating}`)
  }
  
  const map = new Map()
  
  for (const v of array) {
    if (map.has(v)) {
      if (!nonrepeating) {
        return v
      }
      else {
        map.set(v, 2)
      }
    }
    else {
      map.set(v, 1)
    }
  }
  
  for(const [key, value] of map) {
    if (value === 1) return key 
  }
  throw new Error(`No ${nonrepeating ? 'nonrepeating' : 'repeating'} found`)
}

//Example usage
try {
  const res = firstNonRepeatingOrRepeating([1,2,3,3,4,4], false)
  console.log('result', res) // 3 - first repeating
}
catch (e) {
  if (e.name === 'TypeError') console.error(`TypeError: ${e.message}`)
  else console.info(e.message)
}
