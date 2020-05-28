  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(stringArray){
    if(stringArray.length === 0) return [];
    let result = [];
    let lowerCaseString = stringArray[0];
    let upperCaseString = lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
    result.push(upperCaseString);
    return result.concat(capitalizeFirst(stringArray.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana']));
  
  