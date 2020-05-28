/*
 * write a function that takes a sorted array of integers
 * and returns the total number of unique values in the array
 * 
 * ex. [-5,-3, -3, 0, 1, 1 ,1 7] result: 5
 */

const arry = [-5,-3, -3, 0, 1, 1 ,1, 7];
console.log(countUniqueValues1(arry));
console.log(countUniqueValues2(arry));

//using pair of moving pointers
function countUniqueValues1(numArray){
    if(numArray.length < 1) return 0;

    let count = 1;
    let i = 0;

    for(let j = 1; j < numArray.length; j++){
        if(numArray[i] !== numArray[j]){
            count++;
            i=j;
        }
    }
    return count;
}


//using object to keep track of numbers we have seen
function countUniqueValues2(numArray){
     var count = 0;
     var haveSeen = {};

     for(const num of numArray){
         if(!haveSeen.hasOwnProperty(num)){
             count++;
             haveSeen[num] = true;
         }
     }


     return count;
 }