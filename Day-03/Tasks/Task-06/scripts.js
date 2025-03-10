/**
   Problem 6: Leap Year Checker 
   Is 2025 a Leap Year?

    Take year as input.
    Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
 */


    // Algorithm:
        // 1. Start.
        // 2. Take input year.
        // 3. Check year % 4 === 0.
                // If Y: check year % 100 === 0 and year % 400 === 0
                    // If Y: print Leap Year
                    // Else: print Not a Leap Year
                // Else: print Not a Leap Year
        // 4. End.

/// Start Coding.

// Problem message:
console.log("Check Leap Year or not?")

// Take Input.
let year = parseFloat(window.prompt('Enter Year! Check Leap year or not?',2025))

// Check With Ternary operator. is Leap year or Not?
year % 4 === 0 ?
    year % 4 === 0 && year % 100 === 0?
        year % 400 === 0?
            console.log(`This year is ${year} is Leap year`)
        : console.log(`This year is ${year} not Leap year.`)
    : console.log(`This year is ${year} is Leap year`)
: console.log(`This year is ${year} not Leap year.`)