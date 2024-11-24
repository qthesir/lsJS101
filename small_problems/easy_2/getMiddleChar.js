/* 
Write a function that takes a non-empty string argument and 
returns the middle character(s) of the string. If the string has an 
odd length, you should return exactly one character. If the string 
has an even length, you should return exactly two characters.
*/

/* 
PEDAC

Problem

Input: 
  non-empty string
Output:
  Middle characters of the input string

Implicit assumptions:
1. Argument must be a string
2. If the middle string contains no characters, return
the empty space
3. If the string only contains 1 character, return that 
character
4. Count empty spaces as a part of the string length
5. The characters are returned in the same string. 

Mental Model
The program first takes a non-empty string as an argument.
Then, it determines the length of that string. If the string
is odd, then return the character at the middle index. If
the string is even, return the characters at 
two middle indices.

Examples / Test Cases

Input: 
  'I Love JavaScript' 
Output: 
  'a'

Input: 
  'Launch School'
Output:
  ' '

Input: 
  'Launch'
Output:
  'un'

Input: 
  'x'
Output:
  'x'

Data Structures
The program takes a string as an input and outputs a string

Algorithm
1. Take a non-empty string as an argument
2. Determine the length of the input string
3. If the input string is odd:
    index = divide the lenth by two, add 1 and round up.
    return character at index
4. If the input string is even: 
    index1 = divide the length by two 
    index2 = divide the length by two and add 1
    return a concat of characters at index 1 and index 2
    
*/

// Code

function centerOf(string) {
  if (string.length % 2 !== 0) {
    let index = Math.floor(string.length / 2);
    return string[index];
  } else {
    let index1 = string.length / 2;
    let index2 = index1 - 1;
    return string[index2] + string[index1];
  }
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"

// Forgot that I needed to subtract one to account for the 
// index starting at 0. Rookie mistake! 

/* Reflection: It seems like a reasonably good practice to
manually step through a few test cases, like the problem 
solution set did. This allows you to spot a pattern and 
generalize it more easily. I did it in my head, but... 
Probably a good idea to write it down. 
 */