/* 
Write a function that returns an Array that contains every other element of an Array 
that is passed in as an argument. The values in the returned list should be those values 
that are in the 1st, 3rd, 5th, and so on elements of the argument Array.
*/

/*
PEDAC

Problem

Input:
  Array
Output:
  Array with every other element of the input array.

Implicit Assumptions
1. The returned array wil contain every other element starting with the 0th index. 
2. A nested array is considered 1 element.
3. Only array's will be accepted as an argument
4. The function will only accept arrays
5. Elements can contain any value. 

Mental Model
Declare a function that takes an array as an argument. Create a new array, and append
every other value from the input array starting at the 0th index. Return the input array.

Examples / Test Cases

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []



*/