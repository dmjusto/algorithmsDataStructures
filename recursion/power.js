/**
 * (2, 0) returns 1
 * (2,2) returns 4
 * (2,3) retunrs 8
 * (2,4) returns 16
 */

function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base, exp - 1);
}

console.log(power(2,3))