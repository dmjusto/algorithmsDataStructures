
console.log(quickSort([ 7, -3, 99, 0, 1, 8, 6 ]));

/**
 * 
 * @param {Array} arr 
 */
function quickSort(arr, left=0, right= arr.length){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}


function pivot(arr, start, end){
    var pivotIndex = start;
    const swap = (index) => {
        const temp = arr[pivotIndex];
        arr[pivotIndex] = arr[index];
        arr[index] = temp;
    }

    for(let i = start + 1; i < end; i++){
        if(arr[i] < arr[0]){
            pivotIndex++;
            swap(i);
        }
    }
    swap(start);
    return pivotIndex;
}