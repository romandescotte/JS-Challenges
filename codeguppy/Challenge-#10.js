// Coding challenge #10: Calculate the sum of numbers in an array of numbers

function sum(numbers) {

    let accumulator = 0;
    for(let i = 0; i < numbers.length ; i ++) {
        accumulator = accumulator + numbers[i];
    }
    return accumulator;
}
sum([1,2,3]);