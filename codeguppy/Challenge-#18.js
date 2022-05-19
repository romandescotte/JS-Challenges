// Coding challenge #18: Print the first 100 prime numbers

let primeNumbers = [];
let primeNumbersQuantity = 0;
let numberToCheck = 2;

while(primeNumbersQuantity < 100) {  
    
    let halfNumberToCheck = Math.floor(numberToCheck / 2);    
    let divisorsQuantity = 0

    for(let divisor = 1; divisor <= halfNumberToCheck; divisor ++) {
       
        if(numberToCheck % divisor === 0) {
            divisorsQuantity++;            
        }                
    }
    if(divisorsQuantity <= 1) {
        
        primeNumbersQuantity++;
        //console.log(numberToCheck);
        primeNumbers.push(numberToCheck);                
    } 
    
    numberToCheck++
}

console.log(primeNumbers.length);
console.log(primeNumbers);