function linearSearch(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value) return i;
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5], 3));//return 2
console.log(linearSearch([1,2,3,4,5], 8));//return -1

