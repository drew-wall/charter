const closeDiv = (s) => {
      
    let res = ''
    let counter = 0
    let div = ''
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '<') {
        for (let j = 1; j < 5; j++) {
          div += s[i + j]
        }
        console.log(div)
        if (div === 'div>') {
          console.log('div equal to div>')
          counter += 1
          div = ''
        }
      }
      else {
        res += s[i]
      }    
    }
   // console.log(res)
  }
  
  
  console.log(closeDiv('<div></div><p>hello</p><div></div>'))