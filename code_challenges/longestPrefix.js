/**
 * 
 * @param Array words - array of strings
 * @returns String
 * 
 * Function to return the longest prefix of all
 * strings in the array. Returns null string of any
 * don't match
 */
const longestPrefix = words => {
  const [firstWord] = words
  if (!firstWord || words.length === 1) return firstWord || '';
  let i = 0;
  // eslint-disable-next-line no-loop-func
  while(firstWord[i] && words.every(w => w[i] === firstWord[i])) {
    i += 1;
  }
  return firstWord.substr(0, i);
}
  
  console.log(longestPrefix(['float', 'flower', 'flight'])) // fl

  export default longestPrefix