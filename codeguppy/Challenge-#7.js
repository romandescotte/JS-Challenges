// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

let accumulator = 0;
for(let i = 10; i <= 30 ; i++ ) {
    if(i % 2 !== 0) {
        accumulator = accumulator + i;

    }
}
console.log(accumulator);