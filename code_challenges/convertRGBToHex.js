/**
 * 
 * @param {Number} r - the red value
 * @param {Number} g - the green value
 * @param {Number} b - the blue value
 * @returns {String} String
 * 
 * function that takes r,g,b values and converts
 * to hexidecimal string in uppercase
 */
const convertRGBToHex = (r, g, b) => {
  const pad = n => {
    n = n > 255 ? 255 : n < 0 ? 0 : n
    const x = n.toString(16)
    return (x.length === 1 ? `0${x}` : x)
  }
  return (`${pad(r)}${pad(g)}${pad(b)}`).toUpperCase()
}

export default convertRGBToHex