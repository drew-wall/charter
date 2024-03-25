/**
 * 
 * @param {String} str 
 * @returns {Boolean} boolean
 * 
 *  A small 'g' is 'happy', but only if a small 'g' follows before or after it.
Return true if all g's are happy. 
 */
const gHappy = str =>  {
  let ishappy = false
  const g = [...str]
  for (let i = 0; i < g.length; i++) {
    if (g[i] === 'g' && !(g[i+1] === 'g' || g[i-1] === 'g')) {
      ishappy = false
      break
    }
    if (g[i] === 'g' && (g[i+1] === 'g' || g[i-1] === 'g')) {
      ishappy = true
    }
  }
  return ishappy
}

export default gHappy
