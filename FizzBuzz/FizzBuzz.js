//Cuenta del numero 1 al 50 e imprime:
//Fizz si el numero es multiplo de 3
//Buzz si es multiplo de 5
//FizzBuzz si es multiplo de 3 y 5
//Para todos los demas imprime el numero mismo

let i;
for(i = 1; i <= 50; i++) {

	if(i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else {
		console.log(i);
	}

}
