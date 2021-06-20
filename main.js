// Created a variable with a constant value of 293
const kelvin = 0;

// created a set variable which converts a previous variable 
const celsius = kelvin - 273; 


//converted celcius to fahrenheit using arithmetic operators 
let fahrenheit = celsius * (9/5) + 32; 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The tempreture is ${newton} degrees in Newton`);