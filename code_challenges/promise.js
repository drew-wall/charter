const promise = new Promise(() => (resolve, reject) => {
  resolve()
})
.then(console.log('resolve'))
