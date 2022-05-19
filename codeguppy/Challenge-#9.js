// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

function convertToCelcius(tempInFarenheit) {
    const farenheitMultiplier = 1.8;
    const farenheitAdd = 32; 
    return tempInFarenheit * farenheitMultiplier + farenheitAdd;
}
convertToCelcius(33.8);