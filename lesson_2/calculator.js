// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation they'd like to perform
// Perform the operation on the two numbers
// Print the result to the terminal
const readline = require("readline-sync"); // looks for the "readline-sync" library in the node folder
// The library is returned in the form of an object and assigned to the variable readline.

console.log("Welcome to the Calculator!");

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log(`${number1} ${number2}`);

console.log(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
);

let operation = readline.question();

let output;

if (operation === "1") {
  // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === "2") {
  // '2' represents substraction
  output = Number(number1) - Number(number2);
} else if (operation === "3") {
  // '3' represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === "4") {
  // '4' represents division
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);