/*
*Write a function that takes two numbers and returns true if they
*have the same frequency of digits
*/

console.log(sameFrequency(4212344334, 1223334444));

function sameFrequency(num1, num2){
    let stringNum1 = num1.toString();
    let stringNum2 = num2.toString();
    if(stringNum1.length !== stringNum2.length){
        return false;
    }
    
    let digitFrequency1 = getCharFrequency(stringNum1);
    let digitFrequency2 = getCharFrequency(stringNum2);

    for(const digit in digitFrequency1){
        //check if key exists in digitFrequency2
        if(!digitFrequency2.hasOwnProperty(digit)) return false;
        //check if keys have same values
        if(digitFrequency1[digit] !== digitFrequency2[digit]) return false;

        return true;
    }

}

function getCharFrequency(str){
    let resultObject = {};
    for (const chr of str)
    {
        resultObject.hasOwnProperty(chr) ? resultObject[chr]++ : resultObject[chr] =1;
    }
    return resultObject;
}