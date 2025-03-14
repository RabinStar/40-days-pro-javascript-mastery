/**
    Problem 4: Pay for your movie ticket
        Imagine, the INOX charges ticket prices based on age:

        Children (<18 years): $3
        Adults (18 - 60 years): $10
        Seniors (60+ years): $8
 */



/// Start Coding.

age = 22

switch(true){
    case (age < 18):
        console.log(`You are children and ${age} years old: ticket Price is $3.`)
        break
    case (age >= 18 && age < 61):
        console.log(`You are Adults and ${age} years old: ticket Price is $10.`)
        break
    case (age >= 61):
        console.log(`You are Adults and ${age} years old: ticket Price is $8.`)
        break
    
    default: console.log('You are not allwod')
 }
/// End code.