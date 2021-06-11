//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.


let sumaDeMultiplos = 0;
let numero = 0;

while(numero < 1000) {

    if(numero % 3 == 0 || numero % 5 == 0) {

        sumaDeMultiplos = numero + sumaDeMultiplos;
    }
    numero++;
}
console.log("La suma de los múltiplos de 3 o 5 hasta 1000 es: " + sumaDeMultiplos); // Output: 233168



