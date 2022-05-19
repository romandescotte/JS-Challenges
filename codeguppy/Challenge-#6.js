// Coding challenge #6: Calculate 10!

numbers = [10,9,8,7,6,5,4,3,2,1];
accumulator = 1;
for(let i = 9; i >= 0 ; i--) {
    accumulator = accumulator * numbers[i];
}
console.log(accumulator);