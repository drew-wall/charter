/**
 * 
 * @returns {String} string
 * 
 * function to return random color in hex format
 * prepended with '#'
 */
const getRandomHexColor = () => {
  let hexstr = ''
  for (let i = 0; i < 16; i++) {
    hexstr += i.toString(16).toUpperCase()
  }
  
  const randomhex = Array(6).fill('')
    .map(x => hexstr[Math.floor(Math.random() * hexstr.length)])
    .join('')
  return `#${randomhex}`
}

export default getRandomHexColor
