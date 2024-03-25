//const n = 5;
//const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
//console.log(arrayManipulation(n, queries)); // Output: 200

// In the example above, the array arr starts as [0, 0, 0, 0, 0].
// After the first query, arr becomes [100, 100, 0, 0, 0].
// After the second query, arr becomes [100, 200, 100, 100, 100].
// After the third query, arr becomes [100, 200, 200, 200, 100],
// and the maximum value in the array is 200.

/**
 * 
 * @param {Number} n number
 * @param {Array} queries Array
 * @returns {Number} number
 */
const arrayManipulation = (n, queries) => {
  const arr = Array(n).fill(0)
 for (let i = 0; i < queries.length; i++) {
   const [s, e, num] = queries[i]
   for (let j = s-1; j < e; j++) {
     arr[j] += num
   }
 }
 return Math.max(...arr)
}

export default arrayManipulation

// console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))