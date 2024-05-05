const fs = require('fs')


const lines = fs.readFileSync('code_challenges/fixtures/coding_qual_input.txt', 'utf8')
  if (!lines) { 
    console.log('Error opening file.') 
    process.exit(-1)
  }

// build a pyramid (arry of arrays) of the data and choose the last one 
// in each nested array to get secret words
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