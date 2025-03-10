# Operands, Operators, and Expressions in JavaScript

## 📌 Introduction
Understanding **Operands, Operators, and Expressions** is essential for mastering JavaScript or any other programming language. These fundamental concepts help in performing computations, logic building, and decision-making in programs.

---

## 🏷️ 1. What are Operands?
**Operands** are values or variables on which operators perform operations.

🔹 **Example:**  
```js
let a = 5; // '5' is an operand
let b = 10; // '10' is an operand
let sum = a + b;  // 'a' and 'b' are operands, '+' is an operator
```
Here, `a` and `b` are **Operands**, and `+` is an **Operator**.

---

## 🏷️ 2. What are Operators?
**Operators** are symbols that perform operations on operands. JavaScript provides various types of operators.

### 🔹 Types of Operators
| **Type**              | **Examples**    | **Usage** |
|----------------------|----------------|------------|
| Arithmetic          | `+`, `-`, `*`, `/`, `%`  | Addition, Subtraction, Multiplication, Division, Modulus |
| Assignment          | `=`, `+=`, `-=`, `*=`, `/=` | Assigning values to variables |
| Comparison          | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` | Comparing values |
| Logical             | `&&`, `||`, `!` | Logical conditions |
| Bitwise             | `&`, `|`, `^`, `~`, `<<`, `>>` | Bit-level operations |
| Ternary             | `condition ? value1 : value2` | Conditional expressions |
| Relational          | `instanceof`, `in` | Checks object relationship and property existence |

---

## 🏷️ 3. What are Expressions?
An **Expression** is a combination of **Operands & Operators** that evaluates to a value.

🔹 **Example:**  
```js
let sum = 5 + 10; // '5 + 10' is an expression, which returns 15
```

🔹 **With Variables:**  
```js
let a = 20, b = 10;
let result = a - b; // 'a - b' is an expression, which returns 10
```

---

## 🏷️ 4. Operator Precedence & Grouping
**Operator Precedence** determines the order in which operations are performed.

🔹 **Example:**  
```js
let result = 10 + 5 * 2; // Multiplication happens first, then addition (Result: 20)
```
To control precedence, use parentheses:
```js
let result = (10 + 5) * 2; // Parentheses first (Result: 30)
```

### 🔹 Operator Precedence Table
| **Operator**       | **Precedence** |
|-------------------|--------------|
| `()` (Parentheses) | **Highest**  |
| `*`, `/`, `%`      | Higher       |
| `+`, `-`          | Medium       |
| `>`, `<`, `>=`, `<=` | Lower       |
| `&&`, `||`        | Lowest       |

---

## 🏷️ 5. `typeof` Operator
The `typeof` operator returns the data type of a value.

🔹 **Example:**  
```js
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
console.log(typeof undefined); // "undefined"
```

---

## 🏷️ 6. `instanceof` Operator
The `instanceof` operator checks whether an object belongs to a specific class or constructor.

🔹 **Example:**  
```js
class Car {}
let myCar = new Car();
console.log(myCar instanceof Car); // true
```
It is commonly used to check if an object is an instance of an array or a custom class:
```js
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
```

---

## 🏆 Basic to Advanced Examples
### ✅ 1. Arithmetic Expression
```js
let x = 10, y = 5;
let addition = x + y; // 15
let multiplication = x * y; // 50
let modulus = x % y; // 0
```

### ✅ 2. Assignment Expression
```js
let a = 10;  // '=' is an assignment operator
a += 5;  // same as a = a + 5;
console.log(a); // 15
```

### ✅ 3. Comparison Expression
```js
let isEqual = (5 === '5'); // false (because === checks type also)
let isGreater = (10 > 5); // true
console.log(isEqual, isGreater);
```

### ✅ 4. Logical Expression
```js
let isAdult = (age >= 18 && age <= 60); // AND Operator
let canDrive = (hasLicense || hasPermit); // OR Operator
let isNotMinor = !isMinor; // NOT Operator
```

### ✅ 5. Ternary Expression
```js
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"
```

### ✅ 6. Complex Expression
```js
let total = ((5 + 3) * 2) / (8 % 3); 
console.log(total); // Result based on BODMAS rule
```

---

## 🎯 Learning Outcomes
- Understanding **Operands & Operators**
- Learning **Conditional Expressions & Logical Operations**
- Gaining expertise in **Basic & Complex Expressions**
- Mastering **Ternary & Comparison Operators**
- Understanding **Operator Precedence & Grouping**
- Learning how to use **typeof and instanceof**

---

## 🤝 Contribution
Feel free to contribute by adding more examples, explanations, or optimizing the content! Fork the repo, make changes, and submit a pull request.

## 📄 License
This project is open-source and available under the **MIT License**.

---
✍ **Author:** Al-Amin  
🔗 **GitHub:** [Alamin](https://github.com/RabinStar/)  
📧 **Contact:** alamin11crt@gmail.com

