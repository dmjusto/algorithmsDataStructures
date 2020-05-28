/**
 * write a function that takes an array of numbers and a number
 * that returns the subarray with the length of the second number that has the maximum sum
 * 
 * ex. ([100, 200, 300, 400], 2) // returns 700
 * ex. ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)// returns 39
 */


 console.log(maxSubarray([100, 200, 300, 400], 2)); //should return 700
 console.log(maxSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));// should return 39
 console.log(maxSubarray([-3, 4, 0, -2, 6, -1], 2));// should return 5

 function maxSubarray(arry, length){
     if(arry.length < length){
         return null;
     }

     var maxSum = 0;

     for (let i = 0; i < length; i++) {
         maxSum += arry[i];
     }

     var tempMax = maxSum;

     for(let i = length; i < arry.length; i++){
        tempMax += arry[i] - arry[i - length];

        if(tempMax > maxSum){
            maxSum = tempMax;
        }
     }
     
     return maxSum;
 }