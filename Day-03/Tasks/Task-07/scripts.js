/**
   Problem 7: Max of Three Numbers
    Find the max number from the lot.

    Take three numbers and assign them to variables p, q, and r.
    Now find the maximum of these three numbers using the comparison operators.
 */


    // Algorithm:
        // 1. Start.
        // 2. Take input p,q,r.
        // 3. Check year % 4 === 0.
                // If Y: check year % 100 === 0 and year % 400 === 0
                    // If Y: print Leap Year
                    // Else: print Not a Leap Year
                // Else: print Not a Leap Year
        // 4. End.

/// Start Coding.

// Problem message:
console.log("Max number of 3 numbers")


// Input 3 Numbers.
let p = parseFloat(window.prompt('Enter p'))
let q = parseFloat(window.prompt('Enter q'))
let r = parseFloat(window.prompt('Enter r'))


// Check With comparisional operator. is Leap year or Not?
//// Check inputs are Numbers
if( p > q && p > r ){
    console.log(`The Max Number is: ${p}`)

}else if (q > r){
    console.log(`The Large Number is: ${q}`)
    
}else {
    console.log(`The Large Number is: ${r}`)

}