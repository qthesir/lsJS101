/* 
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had 
video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line 
indented 1 space to the right of the line above it. The output should start out like this: 

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    ...

*/

/* 
PEDAC

Problem

Input:
  The Flintstones Rock!
  Number of lines
Output:
  The Flintstones Rock!
   The Flintstones Rock!
    The Flintstones Rock!
     ... x the number of lines

Implicit Assumptions:
1. The string input is going to be "The Flintstones Rock!", or some equivilant alphanumeric string type.
2. The first output string will have no indents. The last output string will have 9. 
3. The output will be in the console
4. Each output will be identical to the one above it, with the exception of the 1 space indent. 
5. The first output, which has zero indents, is included in the 10 total. 
6. The number of characters in the input will be less than the character total width of the output screen less 9 - 
that is, the output strings will not wrap with 9 or less spaces appended to them. 
7. The program will accept a number variable as the number of indents

Mental Model:
The program will accept a non-empty string type as an input and the number of lines. It will then run a loop
the same number of times as the number of indents, with each loop adding 1 whitespace to the beginning of 
the string and logging it to the console. When the loop terminates, the console will display the same number of 
lines as was indicated by the parameter passed into the function.

Examples / Test Cases

Input:
  The Flintstones Rock!
  10
Output:
  The Flintstones Rock!
   The Flintstones Rock!
    The Flintstones Rock!
     The Flintstones Rock!
      ... x10 times

Data Type
A string and number data type will be accepted as parameters for the string input and the number of lines to output,
respectively. The output will be a string type, displayed on the console.

Algorithm
1. Declare a function that accepts "string" and "numOfLines" as parameters
2. Inside the function, declare a new variable called "stringWithIndents" and set it equal to the string
parameter.
3. While i < numOfLines:
    console.log(stringWithIndents)
    stringWithIndents = " " + stringWithIndents
    i++
4. Function terminates

*/

// Code

function asciiArt(string, numOfLines) {
  let stringWithIndents = string
  i = 0
  while (i < numOfLines) {
    console.log(stringWithIndents)
    stringWithIndents = " " + stringWithIndents
    // Also could use the add padding string method:
    // console.log(string.padStart(string.length + i))
    i++
  }
}

let testString = "The Flintstones Rock!"
let numOfLines = 10
asciiArt(testString, numOfLines)

// The solution used an interesting string function called .repeat(), which would repeat the string 
// the number of times passed into the parenthesis. This is the solution: 

for (let padding = 0; padding <= 9; padding++) {
  console.log(" ".repeat(padding) + "The Flintstones Rock!");
}