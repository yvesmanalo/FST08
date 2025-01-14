// Operators and Expressions

// 1. Arithmetic Operators

let num1 = 10;
let num2 = 5;
console.log("Addition (+):", num1 + num2)
console.log("Subtraction (-):", num1 - num2)
console.log("Multiplication (*):", num1 * num2)
console.log("Division (/):", num1 / num2)
console.log("Exponent (**)", num1**num2)
console.log("Remainder (%):", num1%6)

// Order of Operations
// PEMDAS / BODMAS
const answer = 3 + (4 * (5 - 2) ** 2) /2;
console.log("Answer:", answer)

// 3 + (4 * (5 - 2) ** 2) /2
// 3 + (4 * 3 ** 2) /2
// 3 + (4 * 9) /2
// 3 + 36 / 2
// 3 + 18
// 21

// 2. String Expressions or concatenation
let greeting ="Hi";
let name = "John";
console.log(greeting + " " + name + "!");

// 3. Comparison Operators
// Boolean: true or false

//type coercion: converts the data types if necessary

// Equal to '==': Check if two values are equal
console.log("Equal to (==):", 5 == 5) //returns True
console.log("Equal to (==) with type coercion:", 5 == "5") //returns True 

// Not Equal to '!=': Check if two values are not equal
console.log("Equal to (!=):", 5 != 5) //returns False
console.log("Equal to (!=) with type coercion:", 5 != "5") //returns False

// Strict Equal to '===': Check if two values are equal in value and in data type.
console.log("Equal to (===):", 5 === 5) //returns True
console.log("Equal to (===) with type coercion:", 5 === "5") //returns False

// Strict Not Equal to '===': Check if two values are equal in value and in data type.
console.log("Equal to (!==):", 5 !== 5) //returns False
console.log("Equal to (!==) with type coercion:", 5 !== "5") //returns True

console.log("Greater Than (>):", 5 > 3); //returns True
console.log("Less Than (<):", 3 < 5); //returns True
console.log("Greater Than or Equal to (>=):", 5 >= 3); //returns True
console.log("Less Than or Equal to (<=):", 3 <= 5); //returns True

// 4. Logical Operators
// AND - &&
// OR - ||
// NOT - !

let sunny = true;
let warm = true;

// AND: TRUE only if all conditions are TRUE
console.log("Is it sunny AND warm?", sunny && warm);

// OR: TRUE only if at leastone of the conditions
console.log("Is it sunny AND warm?", sunny || warm);

// NOT:  Inverts the value of a boolean
console.log("NOT sunny?", !sunny);

// 5. Assignment Expressions
// Single equal sign '='
// - Assign a value to a variable.
let num3 = 10;
let num4 = 5;

// Addition Assignment
// num3 = num3 + num4
num3 += num4
console.log("The new value of num3:", num3);
// Computation : 10 + 5 = 15

// Subtraction Assignment
// num3 = num3 - num4
num3 -= num4
console.log("The new value of num3:", num3);
// Computation: 15 - 5 = 10

// Multiplication Assignment
// num3 = num3 - num4
num3 *= num4
console.log("The new value of num3:", num3);
// Computation: 10 * 5 = 50

// Division Assignment
// num3 = num3 - num4
num3 /= num4
console.log("The new value of num3:", num3);
// Computation: 50 / 5 = 10