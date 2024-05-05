/**
 * @param Array array 
 * @returns Array
 * 
 * function to remove duplicate items in an array
 */
const removeDupsInArray = array => [...new Set(array)]

export default removeDupsInArray
