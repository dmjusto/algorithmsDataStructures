//stringSearch("asbhapkdhatlzatklhat", hat)//return 2

function stringSearch(str, substring){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < substring.length; j++){
            if(str[i + j] !== substring[j]) break;
            if (j === substring.length - 1) count++;
        }
    }
    return count;
}

console.log(stringSearch("asbhapkdhatlzatklhat", "hat"))
console.log(stringSearch("asbhapkdhatlzatklhat", "pop"))
console.log(stringSearch("asbhapkdhatlzatklhat", "ha"))