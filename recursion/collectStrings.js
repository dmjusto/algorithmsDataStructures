const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(object){
    let stringArray = [];
    for(const key in object){
        const value = object[key];

        if(typeof value === 'string'){
            stringArray.push(value);
        }
        else if(typeof value === 'object'){
            stringArray = stringArray.concat(collectStrings(value));
        }
    }
    return stringArray;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])