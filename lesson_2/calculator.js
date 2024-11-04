// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation they'd like to perform
// Perform the operation on the two numbers
// Print the result to the terminal
const readline = require("readline-sync"); // looks for the "readline-sync" library in the node folder
// The library is returned in the form of an object and assigned to
// the variable readline.

// Testing out git branches

const messages = require("./calc_msgs.json");

console.log(messages.welcome);

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number)); // works because the Number coerces any non-numeric string value to NaN
}

prompt(messages.welcome);

let doAgain;
do {
  prompt(messages.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages.invalidNumber);
    number1 = readline.question();
  }

  prompt(messages.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages.invalidNumber);
    number2 = readline.question();
  }

  prompt(
    messages.performOperation
  );
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages.invalidOperation);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt(messages.goAgain);

  doAgain = readline.question();

  while (!["1", "2"].includes(doAgain)) {
    prompt(messages.invalidGo);
    doAgain = readline.question();
  }
} while (doAgain === "1");

// Misc code:

// if (operation === "1") {
//   // '1' represents addition
//   output = Number(number1) + Number(number2);
// } else if (operation === "2") {
//   // '2' represents substraction
//   output = Number(number1) - Number(number2);
// } else if (operation === "3") {
//   // '3' represents multiplication
//   output = Number(number1) * Number(number2);
// } else if (operation === "4") {
//   // '4' represents division
//   output = Number(number1) / Number(number2);
// }

// For the first add-on, adding the functionality to allow the
// user to perform multiple calculations, I should remember that breaking
// out of a loop with the break statement is also an option. A Do, while
// loop works, but it is less elegant, and arguably harder to read.
