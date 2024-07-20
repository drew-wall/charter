/**
 * 
 * @param {Array} arr 
 * @returns {Any}
 * 
 * Function to find the first most frequent occurence
 * of an item in an array
 */
const mostFrequent = arr => {
  const map = arr.reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1
    return acc
  }, {})
  
  return Object.entries(map).reduce((acc, val) =>
    (val[1] > acc[1] ? val : acc),
    [null, 0])[0]
}
console.log(mostFrequent(['a','b','b']))
