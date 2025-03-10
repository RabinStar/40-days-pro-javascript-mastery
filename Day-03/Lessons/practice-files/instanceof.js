// Class Example
class Animal {}
let dog = new Animal();
console.log(dog instanceof Animal); // true

// Array Example
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log("hello" instanceof String); // false (primitive string)
console.log(new String("hello") instanceof String); // true
