// Coding challenge #17: Calculate the sum of digits of a positive integer number


function getSumOfDigits(number) {

    let digitsQuantity = number.toString().length;
    let numberStringified = number.toString();
    let accumulator = 0;

    for(i = 0; i < digitsQuantity ; i++) {
        accumulator += Number(numberStringified[i])
        
    }
    return accumulator
    
}

getSumOfDigits(1234)

