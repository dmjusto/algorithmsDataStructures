

//[1,4,8,22,100], [-3,0,4, 7, 99]
//[-3, 0, 1, 4, 4, 7, 8, 22, 99]

console.log(mergeSort([57, -3, 0, 9, 6, 100, -8]));

/**
 * 
 * @param {Array} arr 
 */
function mergeSort(arr){
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid));
    return merge(arr1, arr2);
    
}

/**
 * 
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} resultArr
 */
function merge(arr1, arr2){
    let resultArr = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            resultArr.push(arr1[i]);
            i++;
        }
        else {
            resultArr.push(arr2[j]);
            j++
        }
    }
    //push in the remainder of the larger array
    while(i < arr1.length || j < arr2.length){
        if(j === arr2.length){
            resultArr.push(arr1[i]);
            i++;
        }
        else{
            resultArr.push(arr2[j]);
            j++;
        }
    }

    return resultArr;
}

// console.log(mergeSorted([1,4,8,22,100], [-3,0,4, 7, 99])); //[-3, 0, 1, 4, 4, 7, 8, 22, 99]
// console.log(mergeSorted([1,4,8,22,100], [])); //[-3, 0, 1, 4, 4, 7, 8, 22, 99]