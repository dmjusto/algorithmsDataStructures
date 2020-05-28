/**
 * Keeps a growning portion on left sid of array that is sorted
 * and takes the 'first' element on the right side and inserts it into 
 * correct position on left side
 * 
 * @param {Array} arr
 * @returns {Array}
 */

 function insertionSort(arr){
     for(let i = 1; i < arr.length; i++){
         const currentValue = arr[i];
         for(var j = i -1; j >= 0 && arr[j] > currentValue; j--){
             arr[j + 1] = arr[j];
         }
        arr[j + 1] = currentValue;
     }

     return arr;
 }

 console.log(insertionSort([7,3, 1, 2, 14, 5, 9]));