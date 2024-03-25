/**
 * 
 * @returns {Function} function
 * 
 * Example of a closure which returns a function
 * that has access to variables in the outer function
 * even when the outer function has completed
 */
const counter = () => {
  let count = 0
  return () => {
    return count += 1
  }
}

export default counter
