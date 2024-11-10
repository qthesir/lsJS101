// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a 
// separate line.

// PEDAC Scratchpad

// Problem

// Understand the problem

// Input
//    starting index of 1, ending index of 99
// Output
//    display odd numbers 1 through 99, each on a separate line in the console
//    Actual function output will be undefined

// Implicit requirements
// 1. 1 to 99 is 1, 2, 3, 4, 5... 99
// 2. The console means the terminal window on our machine
// 3. A separate line means each number appears on a new line
// 4. Odd numbers include 1 and 99

// Mental Model
// Set a starting index to 1 and ending index to 99. For each number from 1 to 99, check if 
// the number is odd. If the number is odd, log the value to the console on a new line. 

// Test cases
// input:
//    startingIndex = 1
//    endingIndex = 99
// output:
//    1
//    3
//    ...
//    99

// Data Structure
// Input will take two integers as the index, and output the undefined data type,
// because the function's sole purpose is to log values to the console. But,
// the value's logged in the console will be integers. 

// Algorithm
// 1. Declare a value Index and set it to 1
// 2. Declare a value endingIndex and set it to 99
// 3. While index =< 99:
// 4.    if index is odd
// 5.       log index into the console on a new line
// 6.    index += 1

// Code


function isOdd(int) {
  return (int % 2) !== 0
}

function logOdd(startingIndex, endingIndex) {
  let index = startingIndex
  while (index <= endingIndex) {
    if (isOdd(index)) {
      console.log(`\n ${index}`);
    }
    index += 1
  }
}

logOdd(1,51)




