/**
 * 
 * @param String str 
 * @param Number numwords 
 * @returns String
 * 
 * function to truncate words in string based on numwords
 */

const truncateWords = (str, numwords) => str.split(' ').slice(0, numwords).join(' ')

export default truncateWords