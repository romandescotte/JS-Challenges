// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime
// https://es.wikipedia.org/wiki/N%C3%BAmero_primo

function checkIfPrime(number) {    

    let halfNumber = Math.floor(number / 2);
    let isPrimeNumber = true;

    for(let i = 2; i < halfNumber ; i++) {
        if(number % i !== 0) {
            //console.log(`${number} % ${i} !== 0`);
            continue;
        } else {
            console.log(`It's not a prime number since: ${number} % ${i} === 0`);
            isPrimeNumber = false;
            break;
        }
    }
    return isPrimeNumber
}

checkIfPrime(10007)

