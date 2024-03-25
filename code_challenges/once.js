/**
 * 
 * @param {Function} fn - function
 * @param {Object} context - optional, defaults to this
 * @returns {Function} function
 * 
 * function which takes a function and returns a function which can
 * only be called one time
 */
const once = (fn, context) => {
  let ran
  return (...args) => {
    if (!ran) {
      ran = true
      return fn.call(context || this, ...args)
    }
  }
}

export default once
