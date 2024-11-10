// Write a program that asks the user to enter an integer greater than 0, then asks whether
// the user wants to determine the sum or the product of all numbers between 1 and the
// entered integer, inclusive.

// PEDAC Scratchpad
// Input:
//    Integer: Integer greater than 0. User defined.
//    Starting index: 1. Program defined.  \
//    Operation: Product or Sum
// Output:
//    Product of all integers between 1 and the ending index, inclusive
//    OR
//    Sum of all integeres between 1 and the ending index, inclusive

// Implicit assumptions
// 1. The integer is a whole number integer.
// 2. The program will not accept types other than numerical
// 3. The integer must be greater than 0
// 4. The product means the product as defined in mathematics
// 5. The sum means the sum as defined in mathematics
// 6. The user is being asked to choose between the sum or product.
// 7. The result is always going to be a whole number, and should be rounded to the
// number of decimal points in the result.
// 8. The user may not necessarily enter the proper input.

// Mental model
// Ask the user to enter an integer greater than 0, then ask the user whether they
// want to compute the sum or the product of the numbers between 1 and the entered integer.
// If the user chooses sum, calculate the sum; if the user chooses product, calculate the
// product. Display the result of the sum or product in the console.

// Test cases
// Input:
//    Integer: 5
//    Operation: Sum
// Output:
//    Sum 1 - Integer: 15
// Input:
//    Integer: 6
//    Operation: Product
// Output:
//    Product 1 - integer: 720

// Data structure
// A numberical, whole number integer will be taken in as the target integer. A string value
// will be taken in to indicate which operation the user would like to perform. The output
// will be a whole number integer.

// Algorithm
// 1. Declare the value "startingIndex" as a constant. Set it to 1.
// 2. Set the value "integer." Request that the user enter a value greater than 0 and
// set integer to that value.
// 3. While integer > 0 returns false:
//       ask the user for input again.
// 4. Set the value "operation." Request that the user enter 's' to compute the sum, or 'p'
// to compute the product, and set operation to that value.
// 5. While the value is not 's' or 'p':
// 6.     ask the user for input again.
// 7. Declare the result
// 8. If the operation === 's':
//       Set result to 0
//       for each digit in range 1 to integer:
//            result += digit
// 9. If the operation === 'p':
//       Set result to 1
//       for each digit in range 1 to integer:
//            result *= digit
// 10. Log the result to the console.

// Code

const readline = require("readline-sync");
const STARTING_INDEX = 1;

let integer = Math.round(
  Number(readline.question("Please enter an integer greater than 0: "))
);
while (!(integer > 0)) {
  integer = Math.round(
    Number(
      readline.question(
        "Invalid input. Please enter an integer greater than 0: "
      )
    )
  );
}
let operation = readline.question(
  'Enter "s" to compute the sum, or "p" t compute the product: '
);
while (!["s", "p"].includes(operation)) {
  operation = readline.question(
    'Invalid input. Enter "s" to compute the sum, or "p" t compute the product: '
  );
}

let result;
if (operation === "s") {
  result = 0;
  for (i = STARTING_INDEX; i <= integer; i++) {
    result += i;
  }
  console.log(
    `\nThe sum of the integers between ${STARTING_INDEX} and ${integer} is ${result}`
  );
} else if (operation === "p") {
  result = 1;
  for (i = STARTING_INDEX; i <= integer; i++) {
    result *= i;
  }
  console.log(
    `\nThe product of the integers between ${STARTING_INDEX} and ${integer} is ${result}`
  );
} else {
  console.log("Oops. Something went wrong.");
}



