/**
    Problem 4: Write a program for the Traffic Light Simulation.
        Red Light... Green Light... Let's Play!

        ***Create a color variable.
        i) Based on the color variable's value print in the console
            if a traveller needs to STOP or GO.
            The Red color is for STOP and the Green color is for GO.
 */

// Problem analysing:
    // Understanding:
        // Based on Red and Green Color Print STOP and GO in a Traffic system.
    
    // Data Structuer:
        // 1. Color variables as Srting:
            // seeColor = '' 
    
    // Make dicistion and Expression based on redColor and greenColor variable.
    // To GO or STOP:
        // Make capital all letter value of seeColor Variable
        // Check seeColor === 'RED'? print STOP
        // Check seeColor === 'GREEN' print GO!
    
    // Algorithm:
        // 1. Start.
        // 2. Take seeColor.
        // 3. Check seeColor === "RED".
                // If Y: print STOP!
        // 4. Check seeColor === "GREEN"
                // If Y: print GO!
        // 5. End.

/// Start Coding.

    // Problem message:
    console.log("GO for Green color. STOP for RED color!")

    // Take Input.
    let seeColor = window.prompt('Enter a color RED or GREEn').toString().toLocaleUpperCase()
    console.log("Your given color is:",seeColor)

    // Check For Elligible or Not?
    switch(seeColor){
        case 'RED':
            console.log("You have STOP Here!")
            break
        case 'GREEN':
            console.log('You are ready to GO!!!')
            break
        default: console.log('Invalid color. Pls Give Red or Green')
    }
/// End code.