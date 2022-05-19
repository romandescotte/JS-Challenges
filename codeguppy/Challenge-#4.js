// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

let multiplicand = 1;
let multiplier = 1;

while(multiplicand <= 10 && multiplier <= 10) {
    console.log(`${multiplicand}*${multiplier} = ${multiplicand * multiplier}`);
    multiplicand++;  
    if(multiplicand === 11) {
        multiplicand = 1;
        multiplier++;
    }            
}