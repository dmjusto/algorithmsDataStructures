/**
 * write a function that takes a string and returns the length
 * of the longest substring
 * 
 * ex. 'thisisawesome' // returns 6
 * ex. 'thecatinthehat' // returns 7
 * ex. 'bbbbb' // returns 1
 * ex. '' //returns 0
 */

 console.log(findLongestSubstring('thisisawesome')); // should return 6
 console.log(findLongestSubstring('thecatinthehat')); // should return 7
 console.log(findLongestSubstring('bbbbb')); // should return 1
 console.log(findLongestSubstring('')); // should return 0
 console.log(findLongestSubstring('thisishowwedoit')); // should return 6
 console.log(findLongestSubstring('longestsubstring')); // should return 8


function findLongestSubstring(str){
    var maxLength = 0;
    var haveSeen = {};
    var start = 0;

   for(let i = 0; i < str.length; i++){
       const chr = str[i];
       if(haveSeen[chr]){
           start = Math.max(start, haveSeen[chr]);
       }
       maxLength = Math.max(maxLength, i - start + 1);
       haveSeen[chr] = i + 1;
   }

    return maxLength;
  }