/**
 * On each pass it finds the smallest value, then swaps it to the beginning
 * 
 * @param {Array} arr
 * @returns {Array} 
 */

 function selectionSort(arr){
    let minIndex;
    for(let i = 0; i < arr.length; i++){
        minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        //SWAP
        if(minIndex !== i){
            let tempValue = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = tempValue;
        }
    }
    return arr;
 }

 console.log(selectionSort([7,3, 1, 2, 14, 5, 9]));

 module.exports = selectionSort;