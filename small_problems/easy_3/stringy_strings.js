/* 
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, 
always starting with a '1'. The length of the string should match the given integer.

Examples:
*/

stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(7); // "1010101"

/* 
PEDAC

Problem

Input:
  A positive integer
Output:
  A string of alternating 1s and 0s, starting with 1

Assumptions:
1. An equality comparison between the length property of the output string and the input should return true
2. The function will not accept any number less than 0 as an argument

Mental Model 
The program will accept a positive integer as an argument. It will then run a loop for the number of iterations equal
to the input integer. For each iteration of the loop, the program will append a string value either 1 or 0 to the 
output, alternating between 1 and 0 with each successive iteration, and starting with 1 for the first iteration. 

Examples / Test Cases

Input: 
  4
Output:
  1010

Input: 
  5
Output:
  10101

Data Type
The program will take a number type as an input, and output a string type.

Algorithm
1. Define a function stringy that defines a parameter "int" 
2. Declare the variable "output" and set it equal to an empty string
3. While i < int where i = 0:
  1. If i % 2 === 0
      output = output + "1"
    else: 
      output = output + "0"
    increment i by 1
4. Return output

*/

// Code with intent

function stringy(int) {
  let output = "";
  let i = 0;
  while (i < int) {
    if (i % 2 === 0) {
      output = output + "1";
    } else {
      output = output + "0";
    }
    i++;
  }

  return output;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
