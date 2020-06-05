class HasthTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let primeNum = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * primeNum + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        const index = this._hash(key);

        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key){
        const index = this._hash(key);
        const element = this.keyMap[index];

        if(element){
            for (let i = 0; i < element.length; i++) {
                const subArray = element[i];
                if(subArray[0] === key) return subArray[1];
            }
        } 
        return undefined;
    }

    keys(){
        let keys = [];
        this.keyMap.forEach(element => {
            if(element){
                element.forEach(subArray => {
                    if(!keys.includes(subArray[0])) keys.push(subArray[0]);
                })
            }
        })
        return keys;
    }

    values(){
        let values = [];
        this.keyMap.forEach(element => {
            if(element){
                element.forEach(subArray => {
                    if(!values.includes(subArray[1])) values.push(subArray[1]);
                })
            }
        })
        return values;
    }
}

var map = new HasthTable(3);
map.set('book', true);
map.set('allegator', 100);
map.set('pizza', true);
map.set('pie', false);
map.set('violet', 99);
console.log(map.keys());
console.log(map.values());
console.log(map)
// console.log(map.get('allegator'));
// console.log(map.get('book'));
// console.log(map.get('pie'));