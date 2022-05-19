// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

function convertToFarenheit(tempInCelcius) {
    const minusCelcius = 32;
    const dividerCelcius = 1.8;
    return (tempInCelcius - minusCelcius) / dividerCelcius;
}
convertToFarenheit(10);