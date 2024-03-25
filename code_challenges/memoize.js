/**
 * 
 * @param {Function} fn - function
 * @param {Object} context - optional
 * @returns {Function} function
 * 
 * function which returns a memoized function. The inputs of
 * the memozied function will be cached, so calling the function
 * with same arguments will return the cached results 
 * instead of invoking the function again.
 */
const memoize = (fn, context) => {
  let cache = {}
  return (...args) => {
    const argVals = JSON.stringify(args)
    if (!cache[argVals]) {
      cache[argVals] = fn.call(context || this, ...args)
    }
    return cache[argVals]
  }
}

export default memoize

