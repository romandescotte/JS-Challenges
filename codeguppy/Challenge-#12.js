// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositiveNumbers(numbers){
    let positiveNumbers = [];
    for(let i = 0 ; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
}
getPositiveNumbers([-1,-2,-3,0,152,55,987, 0.1, -0.2]);