/**
 * write a function that takes an array of positive integers and a positive integer
 * the function should return the length of the smallest subarray that sums to a number
 * that is greater than or equal to the second parameter
 * 
 * ex. ([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) should return 3
 * ex. ([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) should return 1
 */

 console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // should return 3
 console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // should return 1
 console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // should return 0
 console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // should return 2

 function minSubarrayLen(arry, num){
   var windowStart = 0;
   var windowEnd = 0;
   var sum = 0;
   var length = 0;
   var minLength = Infinity;

   while(windowStart < arry.length){
       //if sum is less than desired number, expand window
       if(sum < num && windowEnd < arry.length){
           sum += arry[windowEnd];
           length++;
           windowEnd++;
       }
       //if sum is greater than or equal to desired number, shrink window
       else if(sum >= num){
           if(length < minLength){
               minLength = length;
           }
           sum -= arry[windowStart];
           windowStart++;
           length--;
       }
       else break;
   }
   
   return minLength === Infinity ? 0 : minLength;
}