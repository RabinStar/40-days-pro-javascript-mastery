/**
    1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
        *
        * *
        * * *
        * * * *
        * * * * *
 */

// With Nested Loop:

    // With For Loop: 
    console.log('Solve with For Loop:')
    for( let rowCount = 0; rowCount <= 4; rowCount++){
        let astric = ""
        for( let colCount = 0; colCount >= rowCount; colCount++){
            astric += "*"
        }
        console.log(astric)
    }

    /// Solve with while Loop
    console.log('Solvve with while Loop:')
    let rowCount = 0
    let colCount = 0
    while(rowCount <=5){
        astric = ""
        while(colCount <= rowCount){
            astric += "*"
            colCount++
        }
        colCount = 0
        
        console.log(astric)
        
        rowCount++
    }

/// No nested Loop: Extra:
astric = ""

count = 0
while(count<5){
    astric +="*"
    console.log(astric)
    count++
}
