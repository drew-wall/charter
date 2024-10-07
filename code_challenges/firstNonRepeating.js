/**
 * 
 * @param Array array 
 * @returns  any
 * 
 * function to return the first nonrepeating element in an array.
 * If none found an empty error will be thrown. We can't just
 * return undefined or null as these could be valid array elements.
 * Therefore, a call to this function mst be wrapped in a
 * try/catch block. 
 * 
 */
const firstNonRepeating = array => {
  if(!Array.isArray(array)) {
    throw new TypeError(`firstNonRepeating: Expected Array as paramater, got ${typeof array}`)
  }
  
  const map = new Map()
  for (const v of array) {
    if (map.has(v)) {
      map.set(v, 2)
    }
    else {
      map.set(v, 1)
    }
  }

  for (const [key, value] of map) {
    if (value === 1) return key
  }
  throw new Error('')
}

// example usage
try {
  let res = firstNonRepeating([1, null, undefined, 'a', 1, 2, 6])
  console.log('result', res)
}
catch (e) {
  if (e.name === 'TypeError') console.error(e.message)
  else console.info('No nonrepeating elements found')
}
