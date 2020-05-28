// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// 1 + 1 + 2 + 3 + 5 + 8 + 13
// fib(nth) = fib(nth-1) + fib(nth-2)

function fib(n){
    if(n <= 2) return 1;
    return fib(n - 1) + fib(n - 2); 
}

 console.log(fib(0));
 console.log(fib(4));
 console.log(fib(10));
 console.log(fib(28));
 console.log(fib(35));