// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, func){
    if(array.length === 0) return false;
    if(func(array[0])) return true;
    return someRecursive(array.slice(1), func);
}

console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([4,6,8,9], isOdd));
console.log(someRecursive([4,6,8], isOdd));
console.log(someRecursive([4,6,8], val => val > 10));