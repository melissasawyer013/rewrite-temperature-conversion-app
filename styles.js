"use strict";

//ask for input
const name = prompt("What is your name?")
const degFahrenheit = Number(prompt("Enter the degrees in Fahrenheit:"));
const degCel = toCelcius(degFahrenheit);
fahrenheitMessage(degFahrenheit);


//convert input to celcius
function toCelcius (fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

//display message based on temperature in Fahrenheit
function fahrenheitMessage( fahrenheit ) {
    let message = fahrenheit + "\u00B0 F is " + degCel.toFixed(0) + "\u00B0 C";
    if (fahrenheit <= 69) {
        alert(message + "\r\n" + "Baby, it's cold out there!");
    } else if ( (fahrenheit > 69) && (fahrenheit < 84) ) {
        alert(message + "\r\n" + "It's beautiful outside.");
    } else {
        alert(message + "\r\n" + "It is a hot one!");
    }
}

