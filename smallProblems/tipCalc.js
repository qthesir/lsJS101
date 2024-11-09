// Create a simple tip calculator. The program should prompt for a bill amount and a tip
// rate. The program must compute the tip, and then log both the tip and the total amount
// of the bill to the console. You can ignore input validation and assume that the user
// will enter numbers.

// PEDAC Scratchpad
// Input:
//    User-defined bill
//    User-defined tip percentage
// Output:
//    Tip amount rounded to two decimals
//    Total amount (tip + original bill) rounded to two decimals

// Implicit Requirements
// 1. The "total amount of the bill" means the original bill plus the tip
// 2. The tip rate is in percentage terms.
// 3. The bill and tip percentage are in dollars
// 4. The tip is determined by tip percentage of the bill
// 5. The output should be rounded to two decimal places
// 6. The output to the user should be displayed in dollars.
// 7. The tip and total will be displayed on separate lines in the console.
// 8. The bill and percentage will be input directly next to the question, not on a
// line below it.

// Mental Model
// User enters a tip and the tip percentage as whole numbers. Compute the tip amount,
// then compute the total bill. Round the tip amount and total bill to two decimal places.
// Return the tip and the total bill and display it to the user in the console in dollars.

// Test Cases
// Input:
//     Bill: 200
//     Tip percentage: 15
// Output:
//     Tip: $30
//     Total bill: $230
// Input:
//     Bill: 0
//     Tip percentage: 20
// Output:
//     Tip: 0
//     Total bill: 0
// Input:
//     Bill: 200
//     Tip percentage: 200
// Output:
//     Tip: 400
//     Total bill: 600

// Data structure
// This program will input and output floating numbers. The output will be rounded to the
// nearest two decimal places.

// Algorithm
// 1. Set the value "bill". Request that the user enter the value.
// 2. Set the value "tipPercent". Request that the user enter the tip percentage.
// 3. Convert bill and tipPercent to numbers in javascript
// 4. Set the value "tip" to the bill * (tipPercent/100)
// 5. Set the value "totalBill" to bill + tip
// 6. Log the tip and total to the console, in dollars, rounded to two decimal places,
//   on separate lines.

// Code

const readline = require("readline-sync");

let bill = Number(readline.question("What is the bill? "));
let tipPercent = Number(readline.question("What is the tip percentage? "));

let tip = bill * (tipPercent / 100);
let totalBill = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);

// Reflection after reading solution: The solution used parseFloat instead of Number to
// turn the string input from readline.question into a JavaScript Number type. parseFloat
// will take numbers out until it reaches a non-numeric character, whereas Number will return
// NaN if any non-numeric characters are present. For this case, it really doesn't matter,
// but Number should be used if only numeric inputs are expected, whereas parseFloat is useful
// when there are strings. There may also be memory efficiency considerations, but I am not
// sure what they are. ChatGPT says there are no memory differences, but I cannot confirm
// that.
