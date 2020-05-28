/**
 * 
 * @param {Array} arr 
 */
function radixSort(arr){
    let loops = maxDigits(arr);

    for(let i = 0; i < loops; i++){
        let buckets = Array.from({length: 10}, () => []);
        let negBuckets = Array.from({length: 10}, () => []);
        arr.forEach(num => {
            let digit = getDigit(num, i);

            if(num >= 0){
                buckets[digit].push(num);//sort nums into Buckets
            } 
            else {
                negBuckets[9 - digit].push(num);//sort in reverse order into negBuckets
            }
        });
        arr = [].concat(...negBuckets).concat(...buckets);
    }
    return arr;
}

console.log(radixSort([-12, 99, 1, -3, 7,19, 15, 4, 0, -87]))


/**
 * 
 * @param {Number} num 
 * @param {Number} place
 * @returns {Number}
 */
function getDigit(num, place){
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10;
}


/**
 * 
 * @param {Number} num
 * @returns {Number} 
 */
function digitCount(num){
    if(num === undefined) return 0;
    else if(num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * 
 * @param {Array} arr 
 * @returns {Number}
 */
function maxDigits(arr){
    let max = 0;
    arr.forEach(number => {
        max = Math.max(max, digitCount(number));
    });
    return max;
}
