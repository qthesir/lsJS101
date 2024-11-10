/* 
Write a function that determines and returns the UTF-16 string value of a string passed in 
as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character 
in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of 
a character.)
*/

/* 
PEDAC

Problem
Input:
    String
Output:
    Sum of the UTF-16 value of every character in the string passed into the argument

Implicit Assumptions
1. UTF-16 is applied character by character
2. The sume of UTF-16 characters is a sum of Number types, not a concatanation of strings
3. The function will accept an empty string ''

Questions
1. What is UTF-16? UTF-16 is Unicode transfer format - 16 bit. 
2. How do you derive UTF-16 from a string? (Use string.prototype.charCodeAt())

Mental Model:
Accept a string value as an argument. For each character in the string, determine a UTF-16
value, and add it to the total. Return the total to the user. 

Examples / Test cases
Input:
    String: 'Four score'
Output:
    984

Input:
    String: 'Launch School'
Output: 
    1251

Input:
    String: 'a'
Output: 
    97

Input:
    String: ''
Output:
    0

Data Structure
Input is a string, and the output will be an integer. I can iterate over the string value.

Algorithm
1. Declare a function called "utf16Value" that accepts a string as an argument
2. Declare a variable called "total" and set it to 0
3. If (!!string):      // Dealing with the empty string edge case
4.      return 0
3. For each character in the string:
      convert the character to a UTF-16 number
      convert the UTF-16 number to the total
4. Return total

*/

// Code

function utf16Value(string) {
  let total = 0;
  // debugger
  // if (!string) {                ... See reflection. This was not necessary.
  //   return 0
  // }

  for (i = 0; i < string.length; i++) {
    total += string.charCodeAt(i);
  }

  return total;
}

console.log(utf16Value("Four score")); // 984
console.log(utf16Value("Launch School")); // 1251
console.log(utf16Value("a")); // 97
console.log(utf16Value("")); // 0

const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA)); // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA)); // 2811

// Reflection: Upon looking at the solution, I realize LS does not have an if statement to
// take care of the empty string edge case. At first, I was puzzled by this, because
// .charCodeAt on an empty string returns undefined which, when added to 0, returns NaN.
// However, the length of the string also returns 0, and there is a halting condition in the
// for loop that will run after the index, i, is set to 0, 0 < 0, which returns false.
// Therefore, the loop never executes, and the operation never takes place. The total
// will then retain its original setting, which is 0, which is the intended behavior.

// A lot of people are using array methods to solve the problem. Well, with most problems.
// I could have used the [...string] to create an array, and then applied .reduce. Would
// have been a useful way to solve the problem. .reduce is pretty damn useful.
