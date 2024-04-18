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
    if (!words[0] || words.length === 1) return words[0] || "";
    let i = 0;
    // eslint-disable-next-line no-loop-func
    while(words[0][i] && words.every(w => w[i] === words[0][i])) {
      i += 1;
    }
    return words[0].substr(0, i);
  }
  
  console.log(longestPrefix(['float', 'flower', 'flight'])) // fl

  export default longestPrefix