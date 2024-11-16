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
6. The function can accept empty array types 

Mental Model
Declare a function that takes an array as an argument. Create a new array, and append
every other value from the input array starting at the 0th index. Return the input array.

Examples / Test Cases

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

Data Structure
The input will be an array data type and the output will also be an array data 
type. 

Algorithm
1. Declare a function named "oddities" that accepts 1 argument "array"
2. Check if the argument is an array type. If it is, continue. If not, return "Error:
argument is not an Array type"
3. Declare a variable "oddList". Set it equal to an empty array.
4. For each index in array.length - 1
  If index % 2 === 0:
    append array[index] to oddList
5. Return oddList

*/

// Code

function oddities(array) {
  if (!Array.isArray(array)) {
    return "Error: Argument is not an Array type";
  }

  let oddList = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      oddList.push(array[i]);
    }
  }

  return oddList;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
console.log(oddities(1)); // logs "Error: Argument is not an Array type"

// Reflection: The LS solution, as opposed to checking if the array index was even,
// incremented the index by 2 each loop. I wonder if this is more efficient, although
// I do think its not quite as clear as my example.

// Further Exploration: Write a companion function that returns every 2nd, 4th, 6th
// element of the array, and try to solve the exercise in a different way.

function evenities(array) {
  if (!Array.isArray(array)) {
    return "Error: Argument is not an Array type";
  }

  let evenList = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      evenList.push(array[i]);
    }
  }

  return evenList;
}

console.log(evenities([2, 3, 4, 5, 6])); // logs [3, 5]

// I made a simple modification to the above function: Check to see if the index has a
// remainder greater than 0, as opposed to 0.

// Alternative solution:

function oddities2(array) {
  if (!Array.isArray(array)) {
    return "Error: Argument is not an Array type";
  }

  let oddList = [];
  array.forEach((x, index) => {
    if (index % 2 === 0) oddList.push(x);
  });

  return oddList;
}

console.log(oddities2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]

function oddities3(array) {
  if (!Array.isArray(array)) {
    return "Error: Argument is not an Array type";
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      array.splice(i + 1, 1);
    }
  }
  return array;
}

console.log(oddities3([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities3([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]

let oddities4 = (arr) => arr.filter((_, index) => index % 2 === 0)

console.log(oddities4([2, 3, 4, 5, 6])); // logs [2, 4, 6]