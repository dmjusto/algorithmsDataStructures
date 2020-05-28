function capitalizeWords(words){
    if(words.length === 0) return [];
    let results = [];
    let lowerCaseWord = words[0];
    let upperCaseWord = '';
    for (const char of lowerCaseWord) {
        upperCaseWord += char.toUpperCase();
    }
    results.push(upperCaseWord);
    return results.concat(capitalizeWords(words.slice(1)));
}
  
  let words = ['iambic', 'am', 'learning', 'recursion'];
  console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']