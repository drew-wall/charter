const removeDups = arr => [...new Set(arr)]
console.log(removeDups([1,2,2,3,3,1]))

const sum = numarray => numarray.reduce((acc,num) => acc + num)
console.log(sum([1,2,3,4,20]))


const setToDB = (arr, iter) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${iter}: Added ${arr.length} items`), 1000)
  })
}

// Partition array into chunks to be updated by setToDB
const processArray = async (arrsize = 105, numitems = 25) => {
  const arr = Array(arrsize).fill(1)
  const numloops = Math.ceil(arr.length / numitems)

  for (let i = 0; i < numloops; i++) {
    const chunk = arr.slice(i * numitems, i * numitems + numitems)
    try {
      const res = await setToDB(chunk, i+1)
      console.log(res)
    }
    catch (e) {}
  }
}
processArray(1010, 50)


const truncateWords = (str, numwords) => str.split(' ').slice(0, numwords).join(' ')
console.log(truncateWords('This is an example of truncating number of words', 7))


const reverseString = str => str.split('').reverse().join('')
 console.log(reverseString('This is a string to be reversed'))
 
 
const numInStr = array => array.filter(value => /[0-9]/.test(value))
console.log(numInStr(['abc', 'fgj9', '1', 'c39d', 'gggg']))
 

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
 console.log(stringChop('JavaScript', 3))
 

 const missingLetter = (array = ['a','b','c','d','f']) => {
   let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
   'o','p','q','r','s','t','u','v','w','x','y','z']  
   if (array[0] === array[0].toUpperCase()) { 
     alphabet = alphabet.map(x => x.toUpperCase())
   }
   const startidx = alphabet.indexOf(array[0])
   const subalpha = alphabet.slice(startidx, startidx + array.length)
   const missing = subalpha.find(x => !array.includes(x))
   return (missing || 'no missing letters') 
 }
 console.log(missingLetter(['a', 'b', 'd']))
 

function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
}
console.log(findMissingLetter([ '0', '9', '7']))
 

const createPhoneNumber = numbers =>
  `(${numbers.slice(0,3)}) ${numbers.slice(3, 6)}-${numbers.slice(6,10)}`.replaceAll(',', '')
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

 
const accum = s => { 
  let ret = ''
  for ( let i = 0; i < s.length; i++) {
    ret += `${s[i].toUpperCase()}${s[i].repeat(i).toLowerCase()}-`
  }
  return ret.slice(0, ret.length-1)
}
console.log(accum("ZpglnRxqenU"))


const findOutlier = integers => {
  const even = integers.filter(x => x % 2 === 0) 
  if (even.length === 1) {
    return even[0]
  }
  const odd = integers.filter(x => x % 2)
  return odd[0]
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36] ))

 
function xo(str) {
  const x = str.match(/x/gi) || []
  const o = str.match(/o/gi) || []
  return x.length === o.length
}
 console.log(xo('xxxkkkkoO'))


 function count(string) {
   const res = [...string].reduce((acc, val) => {
     if (acc[val]) acc[val] += 1
     else acc[val] = 1
     return acc    
   }, {})
   return res
 }
 console.log(count(''))
 

 function isValidWalk(walk) {
  if (walk.length !== 10) return false
  const res = walk.reduce((acc, val) => {
    acc[val] += 1
    return acc
  }, {n: 0, s: 0, w: 0, e: 0})
  return (res.n === res.s && res.w === res.e) 
 }
 console.log(isValidWalk(['n','n','n','n','n','s','s','s','s','s']))
 
 
function high(x){
  let word = '', score = 0
  x.split(' ').forEach(w => {
    let s = 0
    for (let i = 0; i < w.length; i++) {
      s += w.charCodeAt(i) - 96
    }
    if (s > score) {
      word = w
      score = s
    }
  })
  return word
}
console.log(high('this is a test of words sdrow'))


function expandedForm(num) {
  return [...num.toString()].map((x, i, arr) => 
    x * 10**(arr.length - (i + 1))
  ).filter(x => x)  
   .join(' + ')
}
console.log(expandedForm(70304))


 function rgb(r, g, b) {
   const pad = n => {
     n = n > 255 ? 255 : n < 0 ? 0 : n
     const x = n.toString(16)
     return (x.length === 1 ? `0${x}` : x)
   }
   return (`${pad(r)}${pad(g)}${pad(b)}`).toUpperCase()
 }
 console.log(rgb(148, 0, 211))
 

function toCamelCase(str) {
   return str.replaceAll('_', '-').split('-').map((x, i) => 
     i === 0 ? x : `${x[0].toUpperCase()}${x.substring(1)}`
   )
   .join('')
}
console.log(toCamelCase('the_stealth-warrior'))


function solution(string) {
  return string.replace(/([A-Z])/g, ' $1')
}
console.log(solution('camelasecamel'))


function generateHashtag (str) {
  const res = str.split(' ').filter(x => x).map(x =>
    `${x[0].toUpperCase()}${x.substring(1)}`
  )
  .join('')
  return res.length >= 140 || !res.length ? false : `#${res}`
}
console.log(generateHashtag(' take  me out to the   ballgame'))


function incrementString (strng) {
  const parsed = strng.match(/([\w-]*[^\d]+)(\d*)$/)
  const format = str => 
    `${(parseInt(str, 10)+1).toString().padStart(str.length, '0')}`
  if (!parsed) {
    return format(strng)
  }
  let [, strpart, numpart] = parsed
  if (!numpart) {
    return `${strpart}1`
  }
  return `${strpart}${format(numpart)}`
}
console.log(incrementString('fo99obar99'))
console.log(incrementString('foo1'))
console.log(incrementString('foo002'))
console.log(incrementString('009'))


function nextBigger(n){
  const num = n.toString()
  if (num.length <= 1) return -1
  
  function swap( target, i, j ) {
    if ( target ) {
      let temp = target[i];
      target[i] = target[j];
      target[j] = temp;
      return target;
    }
    return target;
  }

  function permute(target) {
    let length = target.length;
    let key = length-1;
    let newKey = length-1;
    while( key > 0 && target[key] <= target[key-1] ){
      key--;
    }
    key--;
    if( key < 0 ){
      return 0;
    }
    newKey = length-1;
    while( newKey > key && target[newKey] <= target[key] ){
      newKey--;
    }
    swap( target, key, newKey );
    length--;
    key++;
    while( length > key ){
      swap( target, length, key );
      key++;
      length--;
    }
    return 1;
  }

  let target = num.split('');
  let permutations = 0;
  do{
    if (target.join('') > num) {
      permutations = parseInt(target.join(''), 10);
      break
    }
  } while(permute(target)); 
  return permutations || -1
}
console.log(nextBigger(919))
