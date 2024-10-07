const numVowels = str => str.match(/[aeiou]/gi)?.length ?? 0           
console.log(numVowels('cdjniiiii'))
