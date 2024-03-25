/**
 * 
 * @param {String} str - a string of words
 * @returns {String} String
 * 
 * function to return the word with the highest character values
 * and longest length
 */
const highestWord = str => {
  let word = '', score = 0
  str.split(' ').forEach(w => {
    let s = 0
    for (let i = 0; i < w.length; i++) {
      s += w.charCodeAt(i) - 96
    }
    if (s > score) {
      word = w
      score = s
    }
  })
  return word
}

export default highestWord