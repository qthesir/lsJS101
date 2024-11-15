/* 
Write a program that prompts the user for two positive integers, and then prints 
the results of the following operations on those two numbers: addition, subtraction, 
product, quotient, remainder, and power. Do not worry about validating the input.
*/

/*
PEDAC

Problem

Input:
  User input first number:
  User input second number:
Output:
  None
Side Effects:
  Logs the operation and result of the following operations:
  1. Addition
  2. Subtraction
  3. Product
  4. Quotient
  5. Remainder
  6. Power

Implicit requirements
1. The operation steps, as well as the result of the operation, will also be logged
2. Each message to the user will be preceded by the characters "==>"
3. The first digit precedes the second in terms of what order the operation is executed in.
For example, if 23 is entered as the first number, and 17 as the second, and the operation
is division, the program will perform 23 / 17, rather than 17 / 23. 
4. The user will enter the number on a line below the question, rather than right next
to it, per the example. 
5. The answer will be rounded to the nearest whole number.
6. The function takes two numerical values as an input

Mental Model
The program will prompt the user to enter the first number and then prompt the user to 
enter a second number. The program will calculate the result of adding, subtracting,
multiplying, dividing, modulating, and raising the first number to the second number, 
and then log the result, as well as the equation that produced the result, to the console. 

Examples / Test Cases
Input: 
  First number: 23
  Second number: 17
Output:
  ==> 23 + 17 = 40
  ==> 23 - 17 = 6
  ==> 23 * 17 = 391
  ==> 23 / 17 = 1
  ==> 23 % 17 = 6
  ==> 23 ** 17 = 1.4105003956066297e+23

Data Structure
The program will take two number types as an input and output those numbers to the console
via string interpolation

Algorithm
1. Prompt the user to enter the first number 
2. Declare the variable "firstNumber" and set it equal to the user's response
3. Prompt the user to enter the second number
4. Declare the variable "secondNumber" and set it equal to the user's repsonse
5. Log the result and the equation that produced the result to the console for each
  operation using string interpolation:
    1. Addition
    2. Subtraction
    3. Product
    4. Quotient
    5. Remainder
    6. Power
6. Round each number to the nearest whole number.  

*/

// Code

const readline = require("readline-sync");

function prompt(message) {
  console.log("==> " + message);
}

prompt("Welcome to the program! \n");

prompt("Enter the first number:");
let firstNumber = Number(readline.question());

prompt("Enter the second number:");
let secondNumber = Number(readline.question());

prompt(`${firstNumber} + ${secondNumber} = ${(firstNumber + secondNumber).toFixed(0)}`); // addition
prompt(`${firstNumber} - ${secondNumber} = ${(firstNumber - secondNumber).toFixed(0)}`); // subtraction
prompt(`${firstNumber} * ${secondNumber} = ${(firstNumber * secondNumber).toFixed(0)}`); // product
prompt(`${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(0)}`); // quotient
prompt(`${firstNumber} % ${secondNumber} = ${(firstNumber % secondNumber).toFixed(0)}`); // remainder
prompt(
  `${firstNumber} ** ${secondNumber} = ${(
    firstNumber ** secondNumber
  ).toFixed(0)}`
); // power

// Reflection: I did not declare firstNumber and secondNumber. Whoops. 
// Also, in the official answer, they only applied Math.floor to the division section.
// I find that a bit strange - why only division? I gues if whole numbers are entered, 
// thats the only one that could be a whole number. Also, math.floor - shouldn't we 
// be rounding to the nearest whole number, not the lowest?