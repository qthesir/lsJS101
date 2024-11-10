// In the modern era under the Gregorian Calendar, leap years occur in every year that is
// evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly
// divisible by 100, then it is not a leap year, unless the year is also evenly divisible
// by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes
// any year greater than 0 as input and returns true if the year is a leap year, or false
// if it is not a leap year.

// PEDAC
// Problem
// Input:
//    An integer greater than 0 representing a year.
// Output:
//    True when it is a leap year
//    Or
//    False when it is not a leap year

// Implicit Assumptions:
// 1. The function cannot accept negative numbers
// 2. The number it accepts must be less than infinity
// 3. The function is returning true or false, and not logging it to the console.
// 4.

// Questions
// 1. Are there rules that consitute what an acceptable year under the greogorian calendar
// is? Like, what are the limitations? The problem says greater than 0, but is there an
// upper limit? I suppose not. It could be any number greater than 0.

// Mental Model
// Take an integer value greater than 0 as an input. Determine whether the year is divisible
// by 4. If it is not, the year is not a leap year. If it is, determine if the year is
// divisible by 100. If it is not, it is a leap year. If it is, determine if the year is
// divisible by 400. If it is, the year is a leap year. If it is not, the year is not a
// leap year.

// Examples / Test Cases

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// Data Structure:
// Input will be a numerical integer, while the output will be a boolean true/false.

// Algorithm

// 1. Declare a function called isLeapYear that accepts a integer greater than 0 as an argument
// 2. If year % 4 === 0:
// 3.     If year % 100 === 0:
// 4.           If year % 400 === 0:
// 5.                 return true
// 6.            else:
// 7.                 return false
// 8.     else:
// 9.            return true
// 10. else:
// 11.     return false

// Code

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true


// Reflection: I originally wrote the code in a very verbose set of if, else statements,
// which was confusing to write about, confusing to read, and confusing to think about. 
// I simplified the problem to having 3 possible cases, and wrote those cases directly using
// logical operators, which, in my view, makes it way easier to read, follow, and understand.

// Upon looking at the solution, I could have simplified the problem considerably. The reason,
// is because if a year is divisible by 400, it is also divisible by 100 and by 4. So we do 
// not have to check the other conditions. If the year is, in any case, divisible by 100, and
// not 400, we can assume it is false, irrespective of whether or not the year is divided by
// 4. With those two checks out of the way, we can check if it is divisible by 4, and return
// true if it is, and false if it isn't. This is more elegant than my solution. 

// As for the further explaination, every test year that is divisible by 400 will fail, because
// 400 is also divisible by 100. I wrote the solution in opposite order, testing for the most
// common cases first, in my first solution, and it was definitely more complicated. Testing
// for the least common cases first seems to be the way. 


// *NOTE: Next time, use /* */ instead.
