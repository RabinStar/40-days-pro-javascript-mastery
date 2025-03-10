// Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

// Create an Object
let person = {
    name : "Alamin",
    age : 30,
    ageAfter20 : function ageCalc(){
      return   age + 20
    },
    isStudent : true,
    favoriteProgLang : "Javascript"
}

// Print in console for Observation:
console.log(person.isStudent) // true
console.log(person.ageAfter20()) // 50
console.log(person.name) // 50
console.log(person.favoriteProgLang) // 50

// Assign into New Variable and Modify.
const founderOfTapaScript = person // Assign in new variable

founderOfTapaScript.name = "Tapas Adhikary"
founderOfTapaScript.age = "45" /// Modify age in String value
founderOfTapaScript.ageFun = x => (parseInt(age) + 20) /// Modify age in String value
founderOfTapaScript.isTeacher = true,
founderOfTapaScript.isStudent = "No", /// Key and value addition
founderOfTapaScript.hasStudent = person // another Object Createing.

// Printing in Console.
console.log(founderOfTapaScript) // See output in Screenshoot


// Create an Arry
let personArr = [ 
    "Alamin",
    30,
    function ageCalc(){
      return   age + 20
    },
    true,
    "Javascript"
]

// Print in console for Observation:
console.log(personArr[0]) // true
console.log(personArr[1]) // 30
console.log(personArr[2]) // 
console.log(personArr[3]) // 
console.log(personArr[4]) //

// Assign into New Variable and Modify.
const founderOfTapaScriptArr = personArr // Assign in new variable

founderOfTapaScriptArr[0] = "Tapas Adhikary"
founderOfTapaScriptArr[1] = "45" /// Modify age in String value
founderOfTapaScriptArr[2] = x => (parseInt(age) + 20) /// Modify age in String value
founderOfTapaScriptArr[3] = true,
founderOfTapaScriptArr[4] = "No", /// Key and value addition
founderOfTapaScriptArr[5] = personArr // another Object Createing.

// Printing in Console.
console.log(founderOfTapaScriptArr) // See output in Screenshoot
