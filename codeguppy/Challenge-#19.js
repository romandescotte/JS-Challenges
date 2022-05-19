// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function getPrimeNumbers(fromNumber, quantity) {

    primeNumbers = [];

    while(primeNumbers.length < quantity) {

        let dividerCount = 0;        
        for(let divider = 2; divider < Math.floor(fromNumber / 2); divider++) {
            
            if(fromNumber % divider === 0) {
                dividerCount++
            }
        }
        if(dividerCount < 1) {
            primeNumbers.push(fromNumber);
        }
        fromNumber++;        
    }    
    return primeNumbers;
}

getPrimeNumbers(5, 10)