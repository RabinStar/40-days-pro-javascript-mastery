// Task 3: Try reassigning values to let and const variables and observe errors.

const age = 30 // Not reassignable, Value not changeable, Number Type.

// Reassign Const value
age = 20 // TypeError: Assignment to constant variable.
console.log(age)


let isStudent = true // Not reassignable, Value not changeable, Number Type.

// Reassign Const value
isStudent = false // no erorr
console.log(isStudent) // output is false