const split = (str, splitval = '') => str.split(splitval)
const join = (arr, joinval = '') => arr.join(joinval)
const reverse = arr => arr.reverse()
const capitalize = str => str.toUpperCase()
const underscore = str => str.split('').join('_')

const compose = (...funcs) => {
  return input => {
    return funcs.reduceRight((acc, func) => {
      return(func(acc))
    }, input)
  }
}

const composedfn = compose(underscore, capitalize, join, reverse, split)
const res = composedfn('hello')
console.log(res)
