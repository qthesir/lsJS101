/* 

Write a function that computes the sum of all numbers between 1 and some other number, 
inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, 
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

*/

/*
PEDAC
Problem
Input:
     Starting index: Set to 1 by default
     Supplied number: Passed as an argument
Output:
     The sum of all numbers between starting index and ending index that are multiples of 3
     and 5

Assumptions:
1. Mutiples of 3 and 5 means any number that is evenly divisible by 3 and 5. 
2. Values to be summed are unique, and do not appear twice. For instance, 15 is divisible by
both 3 and 5, but only appears once in the example.
3. The integer passed in must be greater than the startIndex. Therefore, it must be greater
than 1. 
4. The user will not pass in any strings or numbers less than 1
5. The search for number multiples includes the supplied number and starting index.

Mental Model
Identify and store all of the multiples between, and including, 1 and the supplied number. 
Eliminate any duplicates. Then, sum the list, and return the result to the user.

Examples / Test cases:
Input: 
    3
Output:
    3

Input:
    5
Output:
    8

Input:
    10
Output:
    33

Input:
    1000
Output:
    234168

Data Structure
Input is a primitive numerical input and so is the output. The data structure used to store
the multiples, however, will be an array, from which the sum can be computed.

Algorithm
1. Declare a function named "multisum" that takes one "integer" as an argument
2. Declare a variable "STARTING_INDEX" and set it to 1.
3. Declare a variable "index" and set it to STARTING_INDEX
4. Declare a new array "multiples"
5. While index <= integer:
    if index % 3 || index % 5:
         add index to multiples
    index += 1
6. Eliminate duplicates from multiples
7. Sum multiples
8. Return the sum
*/

// Code

function multisum(int) {
  // declare variables

  const STARTING_INDEX = 1
  let index = STARTING_INDEX
  let multiples = []

  // create multiples array
  while (index <= int) {
    if (index % 3 === 0 || index % 5 === 0) {
      multiples.push(index)
    }
    index += 1
  }

  // eliminate duplicates
  for (i = 0; i < multiples.length; i++) {
    for (j = 0; j < multiples.length; j++) {
      if (i !== j && multiples[i] === multiples[j]) {
        multiples.pop(i)
      }
    }
  }

  // return the sum of the array
  return multiples.reduce((acc, cv) => acc + cv)
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

// Reflection: Hmmmm. I suppose, in this case, I did not have to eliminate the duplicates,
// because I'm not iterating through an array of different multiples, I'm doing 
// 3 or 5, and then moving onto the next value, so it does not have a chance to duplicate.
// Just goes to show... shouldn't always go by memory from an old problem. Think of the 
// problem as if it is fresh. That also means, I do not need to make an array, and can simply
// add the value to the sum. 