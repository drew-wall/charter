/**
 * 
 * @param Number num 
 * @returns String
 * 
 * function to convert a number to expanded format
 * ex. 70303 returns '70000 + 300 + 3'
 */
const expandedNumFormat = num => {
  return [...num.toString()].map((x, i, arr) => 
    x * 10**(arr.length - (i + 1))
  ).filter(x => x)  
   .join(' + ')
}

export default expandedNumFormat