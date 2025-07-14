// recursive function
// example
// fib(4) = 3 [1,1,2,3] (fourth element)
// fib(n) = fib(n-1) + fib(n-2)
// fib(4) = fib(3) + fib(2)

// fib(0) = 0
// fib(1) = 1 [1]
// fib(2) = 1 [0, 1]
// fib(3) = 2 [1, 1]
// fib(4) = 3 [1, 1, 2, 3]

const fibonacci = function(num) {
    // convert input to a number // base 10
    num = parseInt(num, 10);
    // check for negative input
    if (num < 0) return "OOPS";
    // base cases
    if (num === 0) return 0;
    if (num === 1) return 1;
    // recursive case
    return fibonacci(num - 1) + fibonacci(num - 2);
}


// Do not edit below this line
module.exports = fibonacci;
