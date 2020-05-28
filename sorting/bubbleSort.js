/**
 * Compares adjacent values and swaps them if the the larger value comes first
 * this way on each pass the largest value 'bubble's to the top
 * @param {array} arr 
 */

function bubbleSort(arr){
    let madeASwap;
    for(let i = arr.length -1; i > 1; i--){
        madeASwap = false;
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                swap(j);
                madeASwap = true;
            }
        }
        if(!madeASwap) break; //short circuit if array is already sorted
    }
    return arr;

    function swap(j)
    {
        const tempElement = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tempElement;
    }
}

console.log(bubbleSort([7,3, 1, 2, 14, 5, 9]));
console.log(bubbleSort([1,2,3,5,7,14,9]));