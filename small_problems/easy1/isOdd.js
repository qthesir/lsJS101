// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns 
// true if the number's absolute value is odd. You may assume that the argument is a valid integer value.


function isOdd(int) {
  let absVal
  let modVal
  if (int < 0) {
    absVal = int * -1
  } else {
    absVal = int
  }
  modVal = absVal % 2 
  return modVal > 0
}


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// PEDAC scratchpad

// Input:
//     One integer, which can be positive, negative, or zero
// Output: 
//     true or false

// Implicit Requirements
// 1. The input is an integer, which specifically means it is a whole number without decimal places.
// 2. The method will return false if the absolute value is even. 
// 3. Infinity should also return false, since it is not odd. Although it is not even, this makes sense with the
// logic of the problem statement, which indicates that the absolute value of odd is true, and everything else
// would implicitly return false. 
// 4. Only Numbers can be accepted. Other data types cannot. 

// Mental Model
// Accept a whole integer number and convert it to an absolute value. Modulo the number by 2 and store the result. 
// If the result is greater than 0, return true. 

// Questions
// 1. What about infinity? Infinity is not considered odd or even. Perhaps there should be some limitation on
// the size of the number. Well, the output of 3 % 0 is NaN, and infinity % (any number) is also NaN. So if the
// operation % is performed on anything that isn't a number or includes infinity in the operation, it is NaN.

// Examples / Test Cases
// Input:
//    5
// Output:
//    True 

// Input: 
//    4 
// Output: 
//    False 

// Input: 
//    -6
// Output: 
//    False

// Input: 
//    Infinity
// Output:
//    False

// Algorithm

// Data Structure
// For the input, the JavaScript number type will be the input. The output will be boolean.

// Algorithm 
// Pseudocode

// Informal:
// For a given valid integer
// Convert integer to absolute value
// Check if the value is odd
// If the value is odd, return true. If the value is even, return false

// Formal:
// 1. Declare a variable called "absVal", which will store the absolute value of the input.
// 2. Declare a variable called "modVal", which will store absVal modulo 2. 
// 3. Take the absolute value of the input and store the result in absVal
// 4. Module absVal by 2. Store the result in modVal.
// 5. Return the expression: modVal > 0


// Code

