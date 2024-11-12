/*
Create a function that takes two arguments, multiplies them together, and returns 
the result.
*/

/* 
PEDAC 

Problem 

Input:
  1st Number
  2nd Number
Output:
  Product of number 1 and 2

Implicit Assumptions:
1. The result being returned is the product of the two arguments
2. The two arguments are numbers
3. This is an operation performed on only numbers

Mental Model
Accept two numbers as arguments. Multiply the two numbers. Return the result.

Examples / Test Cases
Input: 
  5
  3
Output:
  15

Data Structure:
Input and output will both be number types.

Algorithm:
1. Declare a function called multiply that takes two numbers as arguments
2. Return the productc of the two numbers

*/

// Code

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 3) === 15);

// Second option

const multiply2 = (num1, num2) => num1 * num2;

console.log(multiply2(5, 3) === 15);
