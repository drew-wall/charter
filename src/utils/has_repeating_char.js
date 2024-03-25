const hasRepeatingChar = str => {
    const res = [...str].filter((s, i, arr) => 
      arr.indexOf(s) !== arr.lastIndexOf(s))
    return res.length > 0
  }

export default hasRepeatingChar
