/**
 * 
 * @param {Array} array 
 * @returns {Array} array
 * 
 * function given an array of two arrays of strings
 * will return array of unique strings between the
 * two arrays
 */
const uniqueWords = array => {
  const result = []
  array.flatMap(a => [...new Set(a)])
    .forEach((w, _, words) => {
      if (words.indexOf(w) === words.lastIndexOf(w)) {
        result.push(w)
      }
  })
  return result   
}

export default uniqueWords
