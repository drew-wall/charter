/**
 * 
 * @param Array array 
 * @returns Array
 * 
 * function which flattens nested arrays into one array
 */
const flattenArray = array => {
  const result = []
  for (const a of array) {
    if (Array.isArray(a)) {
      const flattend = flattenArray(a)
      result.push(...flattend)
    }
    else {
      result.push(a)
    }
  }
  return result
}

export default flattenArray
