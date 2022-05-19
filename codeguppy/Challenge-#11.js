// Coding challenge #11: Calculate the average of the numbers in an array of numbers

function getAverage(numbers) {
    
    let accumulator = 0;
    for(let i = 0; i < numbers.length ; i++) {
        accumulator = accumulator + numbers[i];
    }

    return accumulator / numbers.length;
}
getAverage([321,654,7,5,74,2,95]);