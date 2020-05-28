/**
 * write a function that takes two strings and returns true if
 * the first string appears in the second string
 * characters must be in the same order but can have other characters in between
 * 
 * Ex.  ('sing', 'abcstingxyz') //should return true
 */

console.log(isSubsequence('sing', 'abcstngxyz'));

 function isSubsequence(str1, str2){
    let i = 0;
    
    for(let j = 0; j < str2.length; j++){
        if(str1[i] === str2[j]){
            i++;
            if(i >= str1.length) return true;
        }
    }
    return false;
 }