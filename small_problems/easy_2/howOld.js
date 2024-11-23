/* 
  Build a program that randomly generates Teddy's age, and logs it to the console. Have the 
  age be a random number between 20 and 120 (inclusive).
*/

/* 
PEDAC 

Input:
  start the program
Output:
  Log teddy's age to the console.

Implicit assumptions:
1. Teddy's age should be wrapped by "Teddy is ${age} years old!" in the output to the
console.
2. Teddy's age in the range of 20 and 120, inclusive
3. The age will be rounded to the nearest whole number. 

Mental model
The program will randomly generate a number between 20 and 120, then log it to the 
console.

Examples / Test cases

Input:
  *Start the program
Output:
  Teddy is 69 years old!

Data structure
There is not input value to this program, except the user action to run it. Output 
will be a string logged to the console. 

Algorithm
1. Generate a random value
2. Convert the value to a range of 20 to 120
3. Set the value equal to variable "age"
3. console.log(`Teddy is ${age} years old!)

*/

// Code

const MAX_AGE = 120;
const MIN_AGE = 20;

function generateAge() {
  return Math.random() * (MAX_AGE - MIN_AGE) + MIN_AGE;
}

let teddyAge = Math.round(generateAge());

console.log(`Teddy is ${teddyAge} years old!`);
