/**
    Problem 2: Do you have a Driving License?
        *** Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

        i) Manage age as a variable.
        ii) Check if the age is elligible for a driving license and print it on the console accordingly.
 */

// Problem analysing:
    // Understanding:
        // According to the Problem description, If any one is only 18 years old is
        // elligible to get a Driving Lincense.
    
    // Data Structuer:
        // let a Int variable as personAge for gettng input Age.
    
    // Make a dicistion personAge is 18 or Not?:
        // Check personAge is equal 18. 
        // If Yes Say You are Elligible for Driving License.
        // If No Say You are not Elligible to get Driving License !!!
    
    // Algorithm:
        // 1. Start.
        // 2. Take input personAge.
        // 3. Check personAge === 18.
                // If Y: Say Elligible
                // Else: Say Not Elligible
        // 4. End.

/// Start Coding.

// Problem message:
console.log("Do you have a Driving License?")

// Take Input.
let personAge = parseFloat(window.prompt('Enter your Age to Get Drivin License'))

// Check For Elligible or Not?
personAge === 18 ?
    console.log(`Congrast!! You'r ${personAge} and Elligible for Driving License.`)
: console.log(`Sorry!! You'r not 18 and not Elligible for Driving License.`)