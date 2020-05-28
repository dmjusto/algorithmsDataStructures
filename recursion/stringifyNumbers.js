
function stringifyNumbers(object){
    let stringifiedObject = {};

    for(const key in object){
        if(object.hasOwnProperty(key)){
            let element = object[key];

            if(typeof element === "number"){
                stringifiedObject[key] = element.toString();
            }
            else if(typeof element === "object" && !Array.isArray(element)){
                stringifiedObject[key] = stringifyNumbers(element);
            }
            else{
                stringifiedObject[key] = element;
            }
        }
    }
    return stringifiedObject;
}


let obj = {
    num: 1,
    string: 'pink',
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));