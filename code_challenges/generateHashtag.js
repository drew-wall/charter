/**
 * 
 * @param String str - string of words with length <= 140
 * @returns String | Boolean
 * 
 * function to return a string of words concatenated in Pascal case
 * prepended with a '#'. Null strings or strings of length over
 * 140 characters will return false
 */
const generateHashtag = str => {
  const res = str.split(' ').filter(x => x).map(x =>
    `${x[0].toUpperCase()}${x.substring(1)}`
  )
  .join('')
  return res.length >= 140 || !res.length ? false : `#${res}`
}

export default generateHashtag
