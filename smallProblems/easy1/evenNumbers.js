// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a 
// separate line.

// PEDAC scratchpad
// Understand the problem
// Input:
//    Starting index 
//    Ending index 
// Output:
//    2,
//    4,
//    ...
//    98
// Implicit requirements
// 1. Starting index cannot be higher than the ending index
// 2. Starting index and ending index must be numbers
// 3. Console is referring to the console in the terminal
// 4. Separate line refers to a new line in the console. 
// 5. "Inclusive" means including the numbers at the starting index and ending index. 
// Mental Model
// given a user-defined starting and ending index, iterate through each value between the
// starting and ending indexes, including the starting and ending index values. Check if 
// each value is even. If it is even, then log the value in the console on a new line.

// Test cases
// input:
//    starting index: 1
//    ending index: 99
// output:
//    2,
//    4,
//    ...
//    98

// input: 
//    starting index: 10
//    ending index: 1
// output: 
//    invalid input: starting index must be less than ending index

// input: 
//     starting index: "hi"
//     ending index: "there"

// output:
//     invalid input: must be a number

// input:
//     starting index: 3.2
//     ending index: 5.5
// output: 
//     invalid input: must be a whole number

// Data Structure
// Input should be two javaScript number whole integers, while output should be to the 
// console as an integer. 

// Algorithm
// 1. Set 'index' to a user-defined value
// 2. set 'endingIndex' to a user-defined value
// 3. make sure the startingIndex is less than the endingIndex, and the user passed in
// a valid whole numerical input. if not:
//        log "enter valid number" to the console
// 4. while index =< endingIndex:
// 5.     if index is even:
// 6.         log index in the console on a new line
// 7.     index += 1

// Code 

const readline = require("readline-sync")

function isEven(int) {
  return int % 2 === 0;
}
function logEven() {
  startingIndex = Number(readline.question("What is your desired starting value? \n"));
  endingIndex = Number(readline.question("What is your ending value? \n"));
  while (Number.isNaN(startingIndex) || Number.isNaN(endingIndex) || (startingIndex >= endingIndex)) {
    console.log("Invalid input. Please enter a valid input.")
    startingIndex = Number(readline.question("What is your desired starting value? \n"));
    endingIndex = Number(readline.question("What is your desired ending value? \n"));
  }

  for (i = startingIndex; i < endingIndex; i++) {
    if (isEven(i)) {
      console.log(`\n ${i}`)
    }
  }
}

logEven()


// Reflection: Alternative would be to use an if statement and continue if the number
// is odd (i.e. has a modulo greater than 1) this would be quite a bit simpler I would
// think. 