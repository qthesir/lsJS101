/*

Given a string that consists of some words and an assortment of non-alphabetic characters, 
write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, you should only have one space in the result 
(i.e., the result string should never have consecutive spaces).

Examples:
*/

cleanUp("---what's my +*& line?"); // " what s my line "

/*
PEDAC

Input:
  A string assortment of words and non-alphabetic characters
Output:
  A string with all of the non-alphabetic characters replaced with spaces. If there are multiple 
  alphanumeric characters in a row, then replace all of those characters with a single space.

Assumptions
1. The argument will always be a string
2. Even correct punctuation will be removed. Only alphabetic characters will remain in the output
3. The function will not accept an array of strings
4. Spaces ARE ALSO non alphanumeric characters. Not to be treated like alphabetic characters. Even if they 
are replaced by the same value, they should be treated like such. Mistake that I made here. 
5. If one or more alphanumeric characters occur 

Mental Model
The program will accept a string as an argument. It will iterate through each character of the string,
and check if that character is non-alphabetic. If it is, then that character will be replaced by a space.
If the next character is nonalphabetic, then the character is 
removed with no replacement. If the character is a space, then skip the space. The program then returns the 
output string.

Examples / Test Cases

Input: 
  "---what's my +*& line?"
Output:
  " what s my line "

Data Structure
The program will take a string as an input, turn that string into an array, and then return a string as an
output.

Algorithm
1. Define the function cleanUp that defines one parameter "str"
2. Define "strArray" and set it equal to str.split("")
3. Define "cleanArr" as an empty array
4. For each char in strArray:
  If char is alphabetic:
    add char to cleanArr (at the end of the array)
  Else:
    If previous char === current char:
      skip
    Else:
      add space to cleanArr (at the end of the array) 
5. return cleanArr.join("")

*/

// Code with intent

function isAlphabetic(charCode) {
  // takes a character code and determines if it is alphabetic or not
  return (
    (65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <= 122)
  );
}

function cleanUp(str) {
  let strArray = str.split("");
  let cleanArray = [];
  for (let i = 0; i < strArray.length; i++) {
    //  char is alphabetic if it has unicode 97 to 122 or 65 - 90
    let alphabetic = isAlphabetic(strArray[i].charCodeAt(0));
    if (alphabetic) {
      cleanArray[cleanArray.length] = strArray[i];
    } else {
      if (i === 0) {
        continue;
      }
      let prevAlphabetic = isAlphabetic(strArray[i - 1].charCodeAt(0));
      if (alphabetic === prevAlphabetic) {
        continue;
      } else {
        cleanArray[cleanArray.length] = " ";
      }
    }
  }
  return cleanArray.join("");
}

console.log(cleanUp("---what's my +*& line?")); // expected: what s my line

// Complication here: its if any of the following are alphanumeric characters... Hmmm, well a simple
// solution to this could simply be to abstract the function that determines whether or not a value is
// alphanumeric, and run that on both the initial value, and then on the comparison of the previous value.
// Also, I need to treat spaces the same as other non alphanumeric characters, by replacing it with a space.

// The abstracted function worked. This allowed me to check the current value and the previous value without
// excessive amounts of code.

// Here's another way I could have done the check for alphabetic characters (although I don't really know why)
// the solution separated the functions

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

// I forgot that the comparison operator works directly on string characters. I do wonder what its comparing. 
// Is it comparing the unicode values? 
// After checking, yes, that is in fact what it's checking. And when it compares two multi char strings,
// it goes left to right, comparing the strings one at a time, which is breaking them down to their unicode values. 

// The solution also simplified checking to see if the previous character was alphanumeric, to checking if 
// the previous character was simply a space. That is, after all, what the specification specifically requires,
// so it can be simplified in that way. 

