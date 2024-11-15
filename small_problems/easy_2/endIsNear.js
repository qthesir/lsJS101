/* 
Write a function that returns the next to last word in the String passed to it as 
an argument. Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.
*/

/* 
PEDAC

Problem

Input: 
  Sequence of words that contains at least two words.
Output:
  Second to last word in the sequence

Implicit Assumptions:
1. The sequence of words will be separated by spaces
2. Input string will always contain at least two words 
3. The result of the function will be returned and not logged. 

Questions
1. Words are sequences of non-blank characters. Do those characters include numbers? 
I suppose they must. Or special characters? Would the number "1" be considered a word? 

Mental model
Write a function that accepts a string containing a sequence of words. Identify the second 
to last word in the string. Return the second to last word. 

Examples / Test Cases

Input:
  "last word"
Output: 
  "last"

Input:
  "Launch school is great!"
Output:
  "is"

Data Structure
Input will be a string. Output will also be a string. An array will be used as an 
intermediary to find the second to last word.

Algorithm
1. Declare a function called penultimate that accepts a string as an argument called "str"
2. convert "str" to an array with " " as a delimeter
3. return the second to last index of the array

*/ 

// Code

function penultimate(str) {
  let words = str.split(" ")
  return words[words.length - 2]
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true