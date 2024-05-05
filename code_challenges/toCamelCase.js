/**
 * 
 * @param String str 
 * @returns String
 * 
 * function to convert a kebab or snake case string
 * to camel case string. ex; 'My_first-last' would
 * return 'myFirstLast'
 */
const toCamelCase = str => {
  return str.replaceAll('_', '-').split('-').map((x, i) => 
    i === 0 ? x : `${x[0].toUpperCase()}${x.substring(1)}`
  )
  .join('')
}

export default toCamelCase
