// Simple Calculator using only switch-case

let num1 = 10;  // First number
let num2 = 5;   // Second number
let operator = "+"; // Operator (+, -, *, /, %)

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = (num2 !== 0) ? num1 / num2 : "Cannot divide by zero.";  // Handling division by zero inside switch
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        result = "Invalid operator";
}

console.log("Result: " + result);
