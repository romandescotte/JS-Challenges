// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

let fibonacciNumbers = [0 , 1];

for(let i = 0; i < 10 ; i++) {

    fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i+1]);
}
console.log(fibonacciNumbers);
