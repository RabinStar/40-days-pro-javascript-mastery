/**
  Problem 6: Which Triangle?
    *** A triangle has 3 sides. A Triangle type is determined by its sides:

    i) All sides equal is called, Equilateral Triangle.
    ii) Two sides equal is called, Isosceles Triangle.
    iii) All sides different is called, Scalene Triangle.
    iv) Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
 */
    // Make Epression and logic:
        // input a,b,c for triangle sides
        // isAllSides Equall:
            // isEquallAllSide = a === b && b === c 
                // Say Equilateral Triangle
            // isEquallTwoSides = a === b || b === c || a === c
                // Say Scalene Triangle
            // notEquall:
                // Say Scalene Triangle.

    // Algorithm:
        // 1. Start.
        // 2. Take input a,b,c.
        // 3. Check:
                // isEquallAllSide?Say Equilateral Triangle:
                    //isEquallTwoSides = a === b || b === c || a === c? Say Scalene Triangle:
                        // Say Scalene Triangle.

        // 4. End.

/// Start Coding.

    // Problem message:
    console.log("Find Name of Triangle based on three sides")

    // Take Input.
    let a = parseFloat(window.prompt('Side-1:'))
    let b = parseFloat(window.prompt('Side-2:'))
    let c = parseFloat(window.prompt('Side-3:'))

    // Make Expression and Check:
    // For Equall
    isEquallAllSide = (a === b && b === c)
    
    // For 2 sides Equall
    isEquallTwoSides = a === b || b === c || a === c


    isEquallAllSide ? // For fun use this Ternary Operator.
        console.log(`a = ${a} b = ${b} and c = ${c} So, This Triagle is Equilateral Triangle.`)
        :isEquallTwoSides = a === b || b === c || a === c?
        console.log(`a = ${a} b = ${b} and c = ${c} So, This Triagle is Isosceles Triangle.`):
        console.log(`a = ${a} b = ${b} and c = ${c} So, This Scalene Triangle.`)


/// End 