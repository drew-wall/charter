const formatQueryString = str => {
  let qs = ''
  if (str.includes('?'))
    qs = str.slice(str.indexOf('?') + 1)
  else return {}

  return  qs.split('&').reduce((acc, val) => {
     let [key, value] = val.split('=')
     if (acc[key]) {
       value = [...acc[key], value]
     }
     return { ...acc, [key]: value || 'true' }
  }, {})
}
  
console.log(formatQueryString('http://my.url?a=b&c=d&e=4&e=5&f'))

 const makeQueryString = parsed => {
    return Object.entries(parsed).reduce((acc, val, idx) =>  {
       const [key, value] = val
       let str = idx === 0 ? '?' : '&'
       if (Array.isArray(value)) {
          for (const v of value) {
            str += `${key}=${v}&`
          }
          str = str.slice(0, str.length - 1)
       }
       else {
        str += `${key}=${value}`
       }  
       return acc += str
    }, '')
 }

  console.log(makeQueryString({a: 'a', b: 'b', c: ['c', 'd'], f: 'f'}))
  console.log(makeQueryString({}))

 const twoSums = (nums, target) => {
  const res = []
  let len = nums.length
  while(true) {
    const first = Math.ceil(Math.random() * len) - 1
    const second  = Math.ceil(Math.random() * len) - 1
    if (first !== second) {
      if (nums[first] + nums[second] === target) {
        res.push(first)
        res.push(second)
        break
      }
    }
  }
  return res
}

console.log(twoSums([2,7,11,15], 9))
console.log(twoSums([3,2,4], 6))
console.log(twoSums([3,3], 6))
console.log(twoSums([0,4,3,0], 0))
const t0 = performance.now()
console.log(twoSums([11,4,8,1,80,6,37,54,14,70,8,44,2,9,11,5,8,1,80,6,37,54,14,7,0,3,44,2,9], 14))
const t1 = performance.now()
console.log(`${t1 - t0}`)
console.log(twoSums([-3,4,3,90],0))
console.log(twoSums([2,7,11,15], 9))