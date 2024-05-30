const fs = require('fs')


const lines = fs.readFileSync('code_challenges/fixtures/coding_qual_input.txt', 'utf8')
  if (!lines) { 
    console.log('Error opening file.') 
    process.exit(-1)
  }

/**
 * 
 * @param {String} data - lines with a number and text
 * @returns string
 * 
 * Function to get lines from a file with a number and text,
 * build a pyramid (array of arrays) and select the last
 * value in each subarray, get correspoding text, then
 * concatenate the text, space separated.
 */
function secretWords(data) {
  const array = data.split('\n')
  const obj = {}
  array.forEach(it => {
    let [key, text] = it.split(' ')
    text = (text ||'').replace('\r','')
    obj[key] = text
  })

   let count = 1
   let startIdx = 1
   const objarray = []
   Object.keys(obj).filter(k => k).forEach((val, idx, array) => {
       if (idx === 0) {
          objarray.push([val])
       }
       else { 
         if (startIdx < array.length) {
            const arr = []
            let ctr = 0
            for (let i = startIdx; i <= count + startIdx; i++) {
              arr.push(array[i])
              ctr += 1
            }
            count += 1
            startIdx += ctr
            objarray.push(arr)
         }
       }
    })

    let str = ''
    for (let i = 0; i < objarray.length; i++) {
      const item = objarray[i]
      str += obj[item[item.length - 1]] + ' '
    }
  
    return str.trim()
}

console.log(secretWords(lines))