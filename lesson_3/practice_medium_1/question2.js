// Starting with the string: 

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

/* 
PEDAC

Problem

Input:
  String with lower and upper case characters
Output:
  String with lower and upper case characters reversed

Assumptions:
1. Input is a string type
2. The output swaps the uppercase characters with lowercase characters and lowercase characters with uppercase 
characters 
3. The function only transforms characters A-Z

Mental model:
The program accepts a string type as an argument. For each character in the string, the program will check 
if that character is upper or lower case. If it's upper case, then the program will change it to lower case. 
If its lower case, then the program will change it to upper case. The program will ignore all values that are not A-Z. 
The program will then concatenate the characters back into a single string and return the value. 

Examples / Test Cases

Input: 
  "The Munsters are creepy and spooky."
Output: 
  `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

Data Type
The program will accept a string type as an input parameter. It will then split that string type into an array
to evaluate each character individually. Once the array has been evaluated, it will be concatenated back into a 
string and returned to the user.

Algorithm
1. Declare a function that accepts a string type parameter
2. Declare a variable within the function and set it equal to the string input split into an array
3. For each value in the array:
    If value is uppercase (unicode <= 90):
      change element to lowercase
    If value is lower case (unicode >= 97): (or "else" will also suffice)
      change element to upper case
  else:
    skip value
4. Concatenate array to a string
5. Return the string

*/ 

function swapCase(string) {
  let strArr = string.split("")
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i].charCodeAt(0) <= 90) {
      strArr[i] = strArr[i].toLowerCase()
    } else {
      strArr[i] = strArr[i].toUpperCase()
    }
  }
  return "".concat(...strArr)
}

console.log(swapCase(munstersDescription))

// With the mapping method 1 liner

function swapCase2(string) {
  return string.split("").map(char => char.charCodeAt(0) <= 90 ? char.toLowerCase() : char.toUpperCase()).join("")
}

console.log(swapCase2(munstersDescription))