/**
 * 
 * @param {String} str 
 * @param {Number} size 
 * @returns Array
 * 
 * function to chop a string into chunks based on size and push them to array
 */
const stringChop = (str, size) => {
  if (!size) {
    return [str]
  }
  const numchunks = Math.ceil(str.length / size)
  const array = []
  for (let i = 0; i < numchunks; i++) {
    array.push(str.slice(i * size, i * size + size))
  }   
  return array
}

export default stringChop
