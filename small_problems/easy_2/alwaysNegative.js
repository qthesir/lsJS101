/*
Write a function that takes a number as an argument. If the 
argument is a positive number, return the negative of that 
number. If the argument is a negative number, return it 
as-is. 
*/

/* 
PEDAC

Problem

Input: 
  Number
Output:
  Negative number

Implicit assumptions
1. 0 is handled by returning -0.
2. If the argument is positive, return a negative version
of that number. 
3. If the argument is negative, do not change it.
4. The function only takes numbers
5. -0 will also have to be handled

Questions
1. How to check if number is -0?

Mental Model
The program takes a number as an input. If the number is 
greater than 0, multiply it by -1 and return the result. If 
it is negative, return the input as-is.

Examples / Test Cases

Input: 
  5
Output:
  -5 

Input:
  -3
Output:
  -3

Input: 
  0
Output:
  -0

Input: 
  -0
Output: 
  -0

Data Structure:
The input will be a number type and so will the output.

Algorithm:
1. Take a number as an input
2. If number < 0:
    return number
3. If number > 0:
    return number * -1
4. If number === 0:
    checkZero = 2 / number
    if checkZero === -Infinity:
      return number
    Else 
      return number * -1
*/

// Code

function negative(number) {
  if (number < 0) {
    return number;
  } else if (number > 0) {
    return number * -1;
  } else if (number === 0) {
    return 2 / number === -Infinity ? number : number * -1;
    // Could also simply return -0 here
  }
}

console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0
console.log(negative(-0)); // -0

// Reflection: The easier way to do this would have been
// take the absolute value of the number and multiply by
// -1. SOOOO much easier to do this. I thought this initially.
// But I guess I felt that would be cheating for some
// reason?
// I could also use object.is to determine whether -0 and 0
// are equal to one another.
