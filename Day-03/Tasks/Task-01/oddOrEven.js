/**
    Problem: 1. Odd or Even?
        i) Take a number and find if the number is an odd or even number.
        ii) Print the number and result in the console.
     
 */


// Message for working of this Program.
console.log('Check Odd or Even')

// Take Input Fro Browser promt.
// What operator is used "Assignment"
let inputNumber = window.prompt('Enter any intiger number:')

// Check input is number or not?
// What operators is used "Logical"
let isNumber = !isNaN(inputNumber)

// Find or Check Odd or Even?
// What operators is used "Ternary"
isNumber ? 
    inputNumber % 2? // 11 % 2 = 1 which means expression is true. Coz 1? is true and 0? is False 
        console.log(`Your Input ${inputNumber} is Odd.`):
    console.log(`Your Input ${inputNumber} is Even.`)
:console.log('Your Input is not a Number! Pls input Only number!!')    