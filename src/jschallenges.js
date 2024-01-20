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


function incrementString(strng) {
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

function sumStrings(a,b) { 
  return (Number.BigInt(a) + Number.BigInt(b)).toString()
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
 
const multipleof3Regex = parseInt(new RegExp('[0-1]'), 10)
console.log(multipleof3Regex.test(' abc '))

function mix(s1, s2) {
  const lower = new RegExp('[a-z]')
  
  const getCounts = str => {
    const cnts = [...str].reduce((acc, val) => {
      if (lower.test(val)) {
        if (acc[val]) acc[val] += 1
        else acc[val] = 1
      }
      return acc
    }, {})
    return cnts
  }
 
  const s1s = getCounts(s1)
  const s2s = getCounts(s2)
 
  let array = []
  for (const [key,value] of Object.entries(s1s)) {
    array.push({ [key]: value, str: '1:', id: key })
  }

  for (const [key,value] of Object.entries(s2s)) {
    if (key in s1s) {
      const idx = array.findIndex(x => x.id === key)
      const item = array[idx]
      const str = value > item[key] ? '2:' : value === item[key] ? '=:' : '1:'
      const max = Math.max(value,item[key])
      array.splice(idx, 1, { [key]: max, str, id: key })
    }
    else {
      array.push({ [key]: value, str: '2:', id: key })
    }
  }

  const res = array.filter(x => x[x.id] > 1)
               .sort((a, b) => {
                  return b[b.id] - a[a.id] || 
                   `${a.str.replace('=:', '3:')}${a.id}`.
                    localeCompare(`${b.str.replace('=:', '3:')}${b.id}}`)
                 })
  let output = ''
  res.forEach(x => {
    output += `${x.str}${x.id.repeat(x[x.id])}/`
  })

  return output.slice(0, output.length - 1)
}
  
console.log(mix('my&friend&Paul has heavy hats! &', 'my friend John has many many friends &'))


function stripText(input, markers) {
  const getSliceEnd = s => {
     let idx = s.length
     for (const m of markers) {
       if (s.indexOf(m) > -1) {
         idx = s.indexOf(m)
         break
       }
     }
     return idx
   }
   return input.split('\n').map(x => x.slice(0, getSliceEnd(x)).trim()).join('\n')
}

console.log(stripText("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))


function parseStr(string) {
  const conv = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000
  }
  return string.split(' ').filter(x => x !== 'and')
    .map(x => {
      const [f, s] = x.split('-')
      return conv[f] + (conv[s] || 0)
    })
    .reduce((acc, x, idx, arr) => {
      console.log(x)
      if (/100|1000|1000000/.test(x)) {
        acc += x * arr[idx-1]
        acc -= arr[idx-1]
        return acc
      }
      return acc += x
    }, 0)
}

console.log(parseStr('two hundred forty-four'))


function hangman(hangmanString) {
  return [...hangmanString].map((c, idx)  => idx % 2 ? c : '_' ).join('')
}

console.log(hangman('JS is fancy'))

 
function circularRepeat(s, n) {
  return s.repeat(n).slice(0, 100)
}

console.log(circularRepeat('xyz', 10))

function getPrice(item) {
  return item.slice(item.indexOf('(')).replace(/\(|\)/g,'')
}

console.log(getPrice('ice ($4.50)'))

const average = (...args) => args.reduce((acc, val) => acc + val, 0) / args.length

console.log(average(0, 1, 2, -1, 9, 10)) // 3.5

function cinemaQueue(max, visitors) {
  const x = visitors.filter(v => v === 'X')
  return x.length === max ? 'full' : x.length > max ? `too much: ${x.length - max}`
   : `not full: ${max - x.length}`
}
console.log(cinemaQueue(4, ['X','O','X']))

function lastButNotLeast(a, b, c) {
   const a1 = a.toString().slice(-1)
   const b1 = b.toString().slice(-1)
   const c1 = c.toString().slice(-1)
   return a1 === b1 || a1 === c1 || b1 === c1
}

console.log(lastButNotLeast(1, 21, 51))

 
/* Given are two strings password and password_repeat. Check if the password is secure by the following critera:
- both passwords must match
- password must be at least 8 chars
- contains at least a number
- contains at lease an uppercase letter
- contains at least a lowercase letter
- contains at least one of these special chars (&$%§-_) */

function checkPassword(password, password_repeat) {
  if (password !== password_repeat) return false
  if (password.length < 8) return false
  if (!/[0-9]/g.test(password)) return false
  if (!/[A-Z]|[a-z]/g.test(password)) return false
  if (!/\(|&|\$|%|§|-|_|\)/g.test(password)) return false
  
  return true
}
 console.log(checkPassword('0&J&xxQYmD§kx§k$AO', '0&J&xxQYmD§kx§k$AO'))
 
 
 function solveTicTacToe(line1, line2, line3) {
  let l1 = [...line1].join('')
  let l2 = [...line2].join('')
  let l3 = [...line3].join('')
  let l4 = `${l1.slice(0,1)}${l2.slice(0,1)}${l3.slice(0,1)}`
  let l5 = `${l1.slice(1,2)}${l2.slice(1,2)}${l3.slice(1,2)}`
  let l6 = `${l1.slice(2,3)}${l2.slice(2,3)}${l3.slice(2,3)}`
  let l7 = `${l1.slice(0,1)}${l2.slice(1,2)}${l3.slice(2,3)}`
  let l8 = `${l1.slice(2,3)}${l2.slice(1,2)}${l3.slice(0,1)}`
  const res = `${l1}|${l2}|${l3}|${l4}|${l5}|${l6}|${l7}|${l8}`
  if(res.includes('XXX') || res.includes('OOO')) return true
  return 'Tie'
 }
 
 console.log(solveTicTacToe(['-O-'], ['-OX'], ['-O-']))
 
 function headline2(greeting) {
  const p = document.createElement('p')
  p.innerHTML = greeting
  let color = 'black'
  if (greeting.includes('Hi') && greeting.includes('Hello')) {
    color = 'red'
  }
  else if (greeting.includes('Hi')) {
    color = 'green'
  }
  else if (greeting.includes('Hello')) {
    color = 'blue'
  }
  p.style.color = color
  document.body.append(p)
  console.log(p)
 }
 
 headline2('Hi Hello')
 
 
function littleChild(child1, child2) {
  const inRange = num => num > -1 && num < 15
  
  if ((inRange(child1)  && inRange(child2)) ||
      (!inRange(child1)  && !inRange(child2))) {
       return false
  }
  if (inRange(child1) || inRange(child2)) {
    return true
  }
  return false
 }
 
 console.log(littleChild(-5,-11))
 
 
 /* Given is a String string and a number n. Return a string with the section from 0 to n in a row. In each run n is to be decremented. */
 
 // 'JSCodeJSCodJSCoJSCJSJ'
 
 function repeater(string, n) {
  let str = ''
  for (let i = n; i > 0; i--) {
    str += string.slice(0, i)
  }
  return str
}

console.log(repeater('Foobar', 2))

// string url is given. Return the parameter values in an array. The keys can be ignored.
function getURLParams(url) {
  return url.slice(url.indexOf('?') + 1)
             .replace(/&/g, '=')
             .split('=')
             .filter((p, idx)  => idx % 2)
}
console.log(getURLParams('https://jscodebox.com/?action=new&user_id=3&force=false'))


function camelCase(n) {
  return n.trim()
          .split(' ')
          .map((s,idx) => idx === 0 ? `${s[0].toLowerCase()}${s.slice(1)}` : 
             `${s[0].toUpperCase()}${s.slice(1)}`)
          .join('')
}

console.log(camelCase(' Is not found  '))

function swap(numbers) {
  if (!numbers.length) return numbers
  const arr = [...numbers]
  arr[0] = numbers[numbers.length - 1]
  arr[numbers.length - 1] = numbers[0]
  return arr
}

console.log(swap([1,5,3,7,2,7,3]))

/* Given is a string className. Create a p element which has className as class and className as content. In the output, the first letter should be displayed in capital letters. Append the created element to the body tag. */

function welcomeToMyClass(className) {
  const p = document.createElement('p')
  p.classList.add(className)
  p.innerHTML = `${className[0].toUpperCase()}${className.slice(1)}`
  document.body.append(p)
}

/* Given are two strings correct and wrong. Return all characters that are defective. You can recognize defective characters by the fact that they are displayed incorrectly in the string wrong. Return an array with their values. */

function keyboardError(correct, wrong) {
  const res = []
  for (let i = 0; i < correct.length; i++) {
    if (correct[i] !== wrong[i] && !res.includes(correct[i])) {
      res.push(correct[i])
    }
  }
  return res
}

console.log(keyboardError('hello there', 'hgllu thgrg')) //['e','o']


function calculateAverageGrade(scores) {
  const avg = scores.reduce((acc, val) => acc + val) / scores.length
  return +avg.toFixed(2)
}

console.log(calculateAverageGrade([50,0,100]))

function cloneObject(object, removeProperties) {
   const clone = {...object}
   for (const p in clone) {
     if (removeProperties.includes(p)) delete(clone[p])
   }
   return clone
}

console.log(cloneObject({"apples":7,"bananas":42,"citrones":20,"sausages":2}, ["sausages"]))


function bin2dec(bin) {
  return parseInt(bin, 2)
}

console.log(bin2dec('10011'))

/* A small 'g' is 'happy', but only if a small 'g' follows before or after it. Return true if all g's are happy. */

function gHappy(string) {
  let ishappy = false
  const g = [...string]
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

console.log(gHappy('xyggxyz'))


function either404(numbers) {
  const s = numbers.join('')
  if(s.includes('00') && s.includes('44')) return false
  if(s.includes('00') || s.includes('44')) return true
  return false
}

console.log(either404([0,0,3,6,4,4]))


function longest(string) {
  if (!string) return 0
  const counts = [...string].reduce((acc, val) => {
    if (acc[val]) acc[val] += 1
    else acc[val] = 1
    return acc
  },{})

  return Math.max(...Object.values(counts))
}

console.log(longest('aaBBBBcDDee'))

/* Given an array of integers arr and a target sum target, find all pairs of distinct integers that add up to the target sum. Return an array of arrays containing these pairs sorted in ascending order. If there are no such pairs, return an empty array. */

function findPairs(arr, target) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i]
    for (let j = i; j < arr.length; j++) {
      if (val !== arr[j] && val + arr[j] === target) {
        res.push([val, arr[j]].sort((a, b) => a - b))
      }
    }
  }
  return res.sort((a, b) => a[0] - b[0])
}

console.log(findPairs([3,7,8,4,5,9], 12))

//const n = 5;
//const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
//console.log(arrayManipulation(n, queries)); // Output: 200

// In the example above, the array arr starts as [0, 0, 0, 0, 0].
// After the first query, arr becomes [100, 100, 0, 0, 0].
// After the second query, arr becomes [100, 200, 100, 100, 100].
// After the third query, arr becomes [100, 200, 200, 200, 100],
// and the maximum value in the array is 200.

function arrayManipulation(n, queries) {
  const arr = Array(n).fill(0)
 for (let i = 0; i < queries.length; i++) {
   const [s, e, num] = queries[i]
   for (let j = s-1; j < e; j++) {
     arr[j] += num
   }
 }
 return Math.max(...arr)
}

console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))

const getLongestNonrepeatingString = (str) => {
  let longest = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1] && str[i] !== str[i-1]) {
      longest += str[i]
    }
    else {
      longest += ','
    }
  }
  return longest.split(',').reduce((acc, val) => {
    if (val.length > acc.length) {
      acc = val
    }
    return acc
  }, '')
}

console.log(getLongestNonrepeatingString('123578999ABCDefGDDEFGHIJ'))

const getRandomColor = () => {
  let hexstr = ''
  for (let i = 0; i < 16; i++) {
    hexstr += i.toString(16).toUpperCase()
  }
 
  const randomhex = Array(6).fill('')
    .map(x => hexstr[Math.floor(Math.random() * hexstr.length)])
    .join('')
  return `#${randomhex}`
}
console.log(getRandomColor())

const firstNonRepeating = (array) => {
    for (const a of array) {
     if (array.indexOf(a) === array.lastIndexOf(a)) {
       return a
     }
    }
  }
  
  console.log(firstNonRepeating([1,3,2,4,2,1]))

  const firstRepeating = (array) => {
    for (const a of array) {
     if (array.indexOf(a) !== array.lastIndexOf(a)) {
       return a
     }
    }
  }
  
  console.log(firstRepeating([1,3,2,4,2,5,4]))
  
  const uniqueWords = (array) => {
    const result = []
    array.flatMap(a => [...new Set(a)])
      .forEach((w, _, words) => {
        if (words.indexOf(w) === words.lastIndexOf(w)) {
          result.push(w)
        }
    })
    return result   
  }
  
  console.log(uniqueWords([ ['hello', 'goodbye', 'hello', 'alpha'], ['alpha', 'bravo'] ]))
  // [ 'hello', 'goodbye, 'bravo']
  
  
  
  // JPMORGANISHIRING
  // frist row get every 4th chr starting at first chr => J R I R
  // second row get every 2nd chr starting at second chr > P O G N S I I G
  // thrid row get every 4th chr starting at 3rd chr > M A H N
  const strChange = (str, numRows) => {
    let chrArray = Array(numRows)
    for (let i = 0; i < numRows; i++) {
      chrArray[i] = []
      chrArray[i].push(str.slice(i, i+1))
      if (i % 2 === 0) {
        for (let j = 1; j <= numRows; j++) {
         chrArray[i].push(str.slice(j*numRows+j+i, j*numRows+j+1+i ))    
        }
      }
      else {
        for (let j = 1; j <= numRows*(numRows -1) + 1; j++) {
           chrArray[i].push(str.slice(j*2+1, j*2+1+i))
        }
      }
         
        
    }
    console.log(chrArray)
    return chrArray.flatMap(a => a).join('')
  }
  
  const strChange1 = (s, numRows) => {
    if (numRows === 1) {
      return s
    }
    
    let i = 0
    let upOrDown = 1
    let matrix = [...new Array(numRows)].map((e) => [])
    
    for (let j = 0; j < s.length; j++) {
      matrix[i].push(s[j])
      i += upOrDown
      if (i === numRows - 1 || (upOrDown === -1 && i === 0)) {
        upOrDown *= -1
      }
    }
    return matrix.flat().join('')
  }
  
  console.log(strChange1('JPMORGANISHIRING', 3))
  // console.log(strChange1('JPMORGANISHIRING', 4))
  // console.log(strChange1('A', 1))
  
  const replaceLongestZeros = (s) => {
    const hm = {}
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0') {
        if (!hm[i]) {
          hm[i] = { stidx: i, enidx: i }
        }
         if (hm[i-1]) {
          hm[i] = { ...hm[i-1], enidx: hm[i-1].enidx  + 1 }
        }
      } 
    }
    
    let stidx = 0, enidx = 0
    
    for (const i in hm) {
      if (hm[i].enidx - hm[i].stidx >= enidx - stidx) {
        stidx = hm[i].stidx
        enidx = hm[i].enidx
      }
    }
    
    return [...s].map((x, idx) =>
      idx >= stidx && idx <= enidx ? '#' : x).join('')
    
  }
  
  console.log(replaceLongestZeros('1110100011100'))
   console.log(replaceLongestZeros('0000000000000000000000000'))
   console.log(replaceLongestZeros('111010001110011101000111001110100011100111010000111001110100011100'))
    console.log(replaceLongestZeros('0'))
    
    
   const flatten = (array) => {
      const result = []
      for (const a of array) {
        if (Array.isArray(a)) {
          const flattend = flatten(a)
          result.push(...flattend)
        }
        else {
          result.push(a)
        }
      }
      return result
    }
    
    console.log(flatten([1,2,[3, [4, 5]], 6]))
    
    
   const isPalindrome = (s) => {
      if (s[0] !== s[s.length -1 ]) return false
      let rev = ''
      for (const c of s) {
        rev = `${c}${rev}`
      }
      if (rev === s) return true
      return false
    }
    
    console.log(isPalindrome('racecr'))
    
   const capEveryOtherChar = (s) => {
      return [...s].map((x, i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('')    
    }
    
    
    console.log(capEveryOtherChar('HELLO'))
    console.log(capEveryOtherChar('yo eli'))
    
   /*  const closeDiv = (s) => {
      
      let res = ''
      let counter = 0
      let div = ''
      for (let i = 0; i < s.length; i++) {
        if (s[i] === '<')
        for (let j = 1; j < 5; j++) {
          div += s[i +j]
        }
        console.log(div)       
      }
    }
    
    
    console.log(closeDiv('<div><div></div>')) */
    
   const sum1 = (...args) => 
      args.reduce((acc, num) => acc + num, 0)
    
    
    console.log(sum1(1,2,3,4,5,6))
    
   const stringIncludes = (a, b) => 
      a.toLowerCase().includes(b.toLowerCase())
      
    console.log(stringIncludes('I live in New York City', 'new'))
    
    
    const getIndexOfLargestInteger = (array) =>
      array.indexOf(Math.max(...array))
    
    console.log(getIndexOfLargestInteger([1,30, 23, 40, 3, 2]))
      