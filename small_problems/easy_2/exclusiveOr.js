/* 
The || operator returns a truthy value if either or both of its operands are truthy, a 
falsey value if both operands are falsey. The && operator returns a truthy value if both 
of its operands are truthy, and a falsey value if either operand is falsey. This works 
great until you need only one, but not both, of two conditions to be truthy: the so-called 
exclusive or.

In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise. 
Note that we are looking for a boolean result instead of a truthy/falsy value as 
returned by || and &&.
*/

/* 
PEDAC

Problem

Input: 
  One boolean
  Second boolean
Output:
  True if exactly one argument is true, false otherwise

Implicit Assumptions
1. The function will convert numerical and string values to truthy or falsey 
2. If both arguments are falsey, the function will return false. If both arguments are
truthy, the function will return false. If one argument is truthy and the other falsey,
the function will return true. 

Questions
1. Will the program accept objects or arrays? The truthy or falsiness of these values
is a bit confusing, so perhaps its best to filter them out? 

Mental Model
The program will take two arguments and convert them to truthy or falsey values. The program
will evaluate to true if exactly one of the arguments is truthy, and false if both are 
truthy or both are falsey. 

Examples / Test Cases

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true
console.log(xor("hello", '') === true);   // true

Data Structure
The program will take any numerical, string, or boolean value as an input, and return a 
boolean value as an output.

Algorithm

1. Declare a function called "xor" that takes two arguments, "prim1" and "prim2"
2. Convert string or number arguments to truthy values
3. If prim1 || prim2 && !(prim1 && prim2):
  return true
4. Else 
  return false

*/

// Code

function xor(value1, value2) {
  if (!!(value1 || value2) && !(value1 && value2)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true
console.log(xor(0, false) === false); // true
console.log(xor(0, 0) === false); // true
console.log(xor("hello", "") === true);

// Reflection: The solution presented by LS is actually more intuitive than mine. 
// Its more explicitly writing what the rule is - the two scenarios where one value
// is true, and the other false. Another interesting solution I came across in the 
// comments section is checking to see if value1 and value2 are equal to one another.
// If they are not, the function returns true. 

function xorSolution(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

// Further exploration: What other real world situations could be modeled by xor?

// Does the xor functin short circuit its operands? Yes. In LS solution, it would 
// short circuit if both value1 were true and value2 were not true, 
// returning true before evaluating the second case. In the case of my solution, the function
// would short circuit if both value1 and value2 were false. 