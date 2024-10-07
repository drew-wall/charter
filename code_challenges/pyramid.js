const pyramid = n => {
  const mid = Math.floor((2 * n - 1) / 2)
  for (let row = 0; row < n; row++) {
    let line = ''
    for (let col = 0; col < 2 * n - 1; col++) {
      if (col >= mid - row && col <= mid + row) {
        line += '#'
      }
      else {
        line += ' '
      }     
    }
    console.log(line)
  }
}

pyramid(9)
