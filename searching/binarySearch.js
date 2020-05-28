//(1, 2, 3, 4, 5, 6, 7, 8, 9), 3


function binarySearch(array, searchTerm){
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(start <= end){
        if(array[middle] === searchTerm) return middle;

        else if(searchTerm < array[middle]){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
        middle = Math.floor((start + end)/2);
    }
    return - 1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));//2
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], -5));//-1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));//8
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));//-1