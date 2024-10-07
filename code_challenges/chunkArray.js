const chunkArray = (array, size) => {
  if (size >= array.length) return [array]
  let chunked = []
  
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    chunked.push([])
  }

  for (let i = 0; i < array.length; i++) {
    const chunkidx = Math.floor(i / size)
    chunked[chunkidx].push(array[i])
  }
  return chunked
}
console.log(chunkArray([1,2,3,4,5,6], 4))
