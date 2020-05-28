 // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(array){
    let result = [];
    for (const element of array) {
        if(Array.isArray(element)){
            result = result.concat(flatten(element));
        }
        else{
            result.push(element);
        }
    }
    return result;
}

console.log(flatten([1, 2, 3, [4, 5] ]))
console.log(flatten([1, 2, 3, [4, 5], 6, 7 ]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
console.log(flatten([[1],[2],[3]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
  
 