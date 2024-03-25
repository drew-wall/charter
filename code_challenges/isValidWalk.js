/**
 * 
 * @param {Array} walk - array of string directions, either n,s,e,w; must be lenght of 10
 * @returns {Boolean} Boolean
 * 
 * function to return true or false if combination of directions
 * would return to the starting point
 */
const isValidWalk = walk => {
  if (walk.length !== 10) return false
  const res = walk.reduce((acc, val) => {
    acc[val] += 1
    return acc
  }, {n: 0, s: 0, w: 0, e: 0})
  return (res.n === res.s && res.w === res.e) 
 }

export default isValidWalk