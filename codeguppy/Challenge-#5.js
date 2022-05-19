// Coding challenge #5: Calculate the sum of numbers from 1 to 10

let numbers = [1,2,3,4,5,6,7,8,9,10];
let accumulator = 0;


for (let i = 0; i < 10 ; i++) {
    accumulator = accumulator + numbers[i];
}
console.log(accumulator)
