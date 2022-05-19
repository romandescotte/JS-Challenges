// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

function fibonacciNumbers(quantity, numberOne = 0, numberTwo = 1) {
    
    if(quantity === 0) {
        return;
    }
      
    quantity--; 
    //console.log(numberOne);
    return numberOne + numberTwo + fibonacciNumbers(quantity, numberOne + numberTwo, numberOne);
    
}
fibonacciNumbers(10);
