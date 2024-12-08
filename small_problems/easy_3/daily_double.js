// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate characters
// collapsed into a single character.

// Examples:

crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""

/*
PEDAC

Problem

Input:
  String of alphanumeric characters
Output:
  Original string with consequetive duplicate characters removed

Assumptions:
1. The input will be a string
2. The input string can contain empty values
3. In each string of consequetive characters that are the same, the output will only 
contain 1 character.
4. Each sequence of consequetive characters is treated separately. 
5. Space characters are considered characters
6. Duplicate characters are removed irrespective of whether or not it will render the word
mispelled. For instance, doodle will become dodle, despite doodle being the correct 
spelling. 

Questions
1. Do consequetive duplicate characters include space characters?

Mental Model
The program will declare a function that takes a string as an input. It will then iterate
through each character of the string individually. If character i is the same as character
i - 1, then the character is not included in the new string. Otherwise, it is inlcuded.
The program returns the new string. 

Examples / Test Cases

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Data Structure
The program will take a string type as an input. It will not accept any other type. 
It will then split the string into an array, and create a new array for the new string.
Once the proper string values have been added to the new array, the new array will be
joined into a string and returned. 

Algorithm
1. Declare a function called "crunch" that defines one parameter "str"
2. Declare a variable called "strArray"
2. Split str into an array and assign it to "strArray"
3. Declare a new array variable "newArray" 
4. For each index in strArray:
    if strArray[index] !== strArray[index - 1] || index === 0
      newStr.push(strArray[index])
5. Concatenate newArray into a string 
6. Return newArray

*/

// Code with intent

function crunch(str) {
  let strArray = str.split("");
  let newArray = [];
  for (i = 0; i < str.length; i++) {
    if (strArray[i] !== strArray[i - 1]) {
      newArray.push(strArray[i]);
    }
  }

  return newArray.join("");
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""

/* Explaination for the above code
The function crunch is declared with str as a parameter, which is presumably as string value.
The variable strArray is then declared. The str parameter is transformed into an 
array with the string method .split() and assigned to the strArray. The variable newArray
is then declared and assigned to an empty array. 

Then, the program interates through each
character in strArray using a for loop, with index i initialized to zero, halting when i
is equal to the length of strArray. For each iteration of the loop, a conditional 
statement checks to see if the current index is either 0, or that the array element in slot i 
does not equal the element at slot i - 1. If This condition is met, the array value at index 
i is added to the newArray. 

When the loop terminates, newArray is concatenated into a string with the array method
.join and returned to the caller. 
*/

// Could also potentially use the .filter string method

function crunch2(str) {
  return str
    .split("")
    .filter((element, index, array) => {
      return element !== array[index - 1];
    })
    .join("");
}

console.log(crunch2("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch2("4444abcabccba")); // "4abcabcba"
console.log(crunch2("ggggggggggggggg")); // "g"
console.log(crunch2("a")); // "a"
console.log(crunch2("")); // ""

// Reflection: The solution is similar to my first solution. However, instead of checking
// to see if the previous element is equal to the current element in the array, it checks
// to see if the next element is equal to the current element. 

// I think that this works because any index referenced after the last index will return
// undefined, which is what an object returns when the property does not exist. However,
// calling -1 on an array index will also return undefined. What's the deal with this? 
// I think I've determined that I do not need the check for the index being equal to 0.

// In the further exploration, with respect to Launch School's solution, not 
// iterating when index is equal to text.length - 1 will cause the program to skip the 
// last element. So the output would always have the last character shaved off. 

