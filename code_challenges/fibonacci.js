
/**
 * 
 * @param {Number} num 
 * @returns Array
 * 
 * Function to return fibonacci number
 */
const fibonacci = num => {
  let arr = [0,1]
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr[num]
}

console.log(fibonacci(10))
//export default fibonacci