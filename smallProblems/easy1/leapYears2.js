/* This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 
1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year 
that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine 
leap years both before and after 1752. */

/* PEDAC 
Input:
    Numerical integer year
Output:
    True if leap year
    False if not a leap year

Implicit Requirements
1. Any numerical input that is less than 1752 should be treated as a leap year if it is divisible
by 4. 
2. Pre-1752, the ONLY criteria for a leap year is if it is evenly divisible by 4. 
3. Given this is based off the previous exercise, which deals with the gregorian calendar,
any numerical input greater than or equal to 1752 should be a leap year according to 
the rules set in the previous exercise. 
4. Requirements set in the previous exercise should also therefore carryover. The year must
be greater than 0, no negative numbers, no infinity, and only Number types are allowed. 

Mental Model
Declare a function that takes year as an argument. If the year is greater than or equal to 
1752, than apply the Gregorian Calendar leap year rules. If the year is less than 1752, then
apply Julian Calendar rules. If the year is a leap year, return true. If it is not, return
false.

Examples/Test Cases 
(same as the previous)

Data Structure
The function will take an integer as an input and output a boolean value.

Algorithm
1. Declare "GREGORIAN_CUTOFF" as a constant set to 1752.
2. Declare a function called "isGregorianLeap" which will apply gregorian calendar leap year
rules and return true if leap year and false if not.
3. Declare a function called "isJulianLeap", which will return true if the year is divisible 
by 4. 
4. Declare a function "isLeapYear" that accepts an integer, "year", greater than 0 as an 
argument.
5.    If year < GREGORIAN_CUTOFF:
6.        return year % 4 === 0
7.    Else:
8.        return isGregorianLeap(year)
*/

// Code

const GREGORIAN_CUTOFF = 1752;

function isGregorianLeap(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function isJulianLeap(year) {
  return year % 4 === 0;
}

function isLeapYear(year) {
  if (year < GREGORIAN_CUTOFF) {
    return isJulianLeap(year)
  } else {
    return isGregorianLeap(year)
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true

// Reflection: In the solution, they simply added an additional if clause at the beginning 
// of the function that checked if the year was less than 1752 and it was divisible by 4,
// then went into the rest of the logic from the gregorian calendar. This is shorter,
// but I think that my code is actually more readible and maintainable, since it separates 
// them out into functions. There is more abstraction in my code, in other words. 