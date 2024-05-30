/**
 * 
 * @param {Array} array - sorted array
 * @param {} target 
 * @returns {Number}
 * 
 * Function to return the index of the target value in a sorted array, 
 * or -1 if not found. NOTE: array must be sorted in either 
 * ascending or descening order
 */
const binarySearch = (array, target) => {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)

    if (array[middle] === target) {
      return middle
    }
    else if (array[middle] < target) {
      start = middle + 1
    }
    else {
      end = middle - 1
    }
  }
  return -1
}

console.log(binarySearch([-1,0,1,2,3,4,5,6,7,8,9],6)) //7
