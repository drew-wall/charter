const numVowels = str => str.match(/[a|e|i|o|u]/gi)?.length || 0           
console.log(numVowels('bkkaeiouuuk'))
