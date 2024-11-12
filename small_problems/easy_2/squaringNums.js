/*
Using the multiply() function from the "Multiplying Two Numbers" problem, write a 
function that computes the square of its argument (the square is the result of multiplying 
a number by itself).
 */

/*
PEDAC

Problem

Input:
  Number to square
Output: 
  The square of the input number

Implicit Assumptions
1. The square of the argument is the argument multiplied by itself
2. The argument will only accept a number.
3. The number can be negative or possitive
4. The number can be floating point.
5. The solution will be returned from the function

Mental Model
Accept a number argument. Multiply the number by itself. Return the result.

Examples / test cases
Input:
  5
Output:
  25

Input: 
  -8
Output:
  64

Data Structure:
The input and output will both be JavaScript number types

Algorithm:
1. Declare a function called "square" that accepts 1 number as an argument
2. Return the result of multiplying the number by itself

*/

// Code

function multiply(num1, num2) {
  return num1 * num2;
}

const square1 = (num) => num * num;

// Alternative

const square = (num) => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Further exploration:

const power = (num, exp) => {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return num;
  } else {
    return multiply(num, power(num, exp - 1));
  }
};

console.log(power(5, 3) === 125); // true
console.log(power(-8, 3) === -512); // true
console.log(power(-8, 0) === 1); // true

// Reflection:
// I didn't realize it was asking me to literally use the multiply function from the
// previous exercise. I thought it was just asking me to reference it, or build on it.
// Need to be careful about what the question is asking me.

// Recursive functions work by calling itself until it arrives at a base case. In the
// case of the power function, this is when the exponent equals 1.

// My power recursion will only work with positive numbers. Will be an infinite loop
// with negative numbers. 
