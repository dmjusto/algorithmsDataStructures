/**
 * Write a function the takes a sorted array of integers and a target average
 * and returns true if there is a least one pair that average to that target
 */

 console.log(averagePair([1,2,3], 2.5));
 console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
 console.log(averagePair([-1, 0,3,4,5,6], 4.1));

//  function averagePair(arry, targetAvg){
//      let complements = {};

//      for(const element of arry){
//          const complement = targetAvg*2 - element;
//          if(complements.hasOwnProperty(complement)){
//              return true;
//          }
//          complements[element] = true;
//      }
//      return false;
//  }

function averagePair(arry, targetAvg){
    let i = 0;
    let j = arry.length - 1;
    while(j > i){
        const avg = (arry[i] + arry[j])/2;
        if(avg > targetAvg){
            j--;
        }
        else if(avg < targetAvg){
            i++;
        }
        else{
            return true;
        }
    }
    return false;
    
}