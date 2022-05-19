// Coding challenge #13: Find the maximum number in an array of numbers

function getMaxNumber(number) {
    let maxNumber;
    for(let i = 0; i < number.length; i++) {
        if(number[i] > number[i-1]) {
            maxNumber = number[i];
        }
    }
    return maxNumber;
}
getMaxNumber([1,2,3,5,4,3,2,1,50000,123,200000,1]);