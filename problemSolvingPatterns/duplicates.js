/**
 * Write a function that returns true if there are duplicates in the input
 */

//  areThereDuplicates(1, 2, 3);
console.log(areThereDuplicates1(1,2,3,2));

 function areThereDuplicates1(){
    let inputs = Object.values(arguments);
    let haveSeenObj = {};
    
    for(const item of inputs){
        if(haveSeenObj.hasOwnProperty(item)){
            return true;
        }
        haveSeenObj[item] = true;
    }

    return false;
 }


 