/**
 * write an function that takes two strings and checks if they are anagrams
 * 
 * ex. ('fart', 'frat') returns true
 * ex. ('cat', 'car') returns false
 */

 
 console.log(isValidAnagram('fart', 'frat'));

 function isValidAnagram(str1, str2){
     if(str1.length !== str2.length){
         return false;
     }
    //create two objects to hold frequency of characters in each string
    var charFrequencyStr1 = getCharFrequencies(str1);
    var charFrequencyStr2 = getCharFrequencies(str2);
    //loop over one object to check
    for(const key in charFrequencyStr1){
        if(!charFrequencyStr2.hasOwnProperty(key)){
            return false;
        }
        if(charFrequencyStr1[key] !== charFrequencyStr2[key]){
            return false;
        }

        return true;
    }
        

 }

function getCharFrequencies(str)
{
    let resultObject = {};
    for (const chr of str)
    {
        resultObject.hasOwnProperty(chr) ? resultObject[chr]++ : resultObject[chr] = 1;
    }
    return resultObject;
}
