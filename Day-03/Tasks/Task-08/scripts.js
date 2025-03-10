/**
  Problem 8: Biwise Doubling
    
    *** A tricky one for you
        Create a variable count and assign a value, say, 5.
        Now use the Bitwise shift operator to make the number double.
        Print it on the console.
 */


    // Algorithm:
       // Bitwise Double of 5.
// Using left-shift (<< for Left Shift ) we can any number
// Theory:
    // 1. number << n --> number * 2^n
        // So, number << 1 --> number * 2^1 --> number * 2
        // So, 5 << 1 --> 5 * 2 --> 10 which is 2 times 5.
    // 2. (number)d << (n)d --> (number)b and should be n number of 0 in right side of number and convert into Decimal.
        // Example: number = 5 and n = 1
            // So, 5 << 1 --> (0101) 0 --> 01010 --> (10)d
            


// Code Start

    // Variable Declaration
    const number = 5

    // Doubling By Bitwise LeftShift Operator (<<)
    const doubleNumber = (number<<1)

    // Result in console
    console.log(doubleNumber)

// End