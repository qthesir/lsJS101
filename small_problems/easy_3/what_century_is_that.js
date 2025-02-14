/* 

Write a function that takes a year as input and returns the century. The return value should be a 
string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:

*/

/*
PEDAC

Problem

Input:
  Numerical input that is a valid AD year. That is, integers greater than 0.
Output
  The century, in the format [century number][suffix]. I.e. 1st century, 3rd century, and so on. 

Assumptions:

1. A valid year input is only considering years AD, not BC.
2. The 'st', 'nd', 'rd', 'th' suffixes are placed in accordance to what is typical in the english language. 
3. The input cannot be negative. It must be greater than 0, but could also be 0, if there is such a thing as 
0 AD. 

Mental Model
The program will take a standard AD year as an input. It will then translate the raw year into the proper 
numerical century. The program will then add the appropriate suffix to the century according to the rightmost 
digit, or the ones place, and return the result to the user. 

Examples / Test Cases

Input: 
  2000
Output:
  20th

Input: 
  5
Output:
  1st

Input: 
  11201
Output:
  113th

Data Structure
The program will take a number as an input and return a string as an output. 

Algorithm
1. Define a function century and that defines a parameter "year"
2. Set the parameter "century" and set it to (year / 100) rounded down + 1
3. Set the parameter "lastDigit" to century % 10
4. If lastDigit === 1 (use switch statement here)
    return String(century) + "st"
   else if (lastDigit === 2) 
    return String(century) + "nd"
   else if (lastDigit === 3)
    return String(century) + "rd"
   else 
    return String(century) + "th"

*/

// Code with intent

function century(year) {
  let century = Math.floor(year / 100 + 1);

  // taking care of edge case where the year is at the end of the century
  if (year % 100 === 0) {
    century = century - 1;
  }

  return String(century) + getSuffix(century);
}

function getSuffix(century) {
  if (checkForTeens(century % 100)) {
    return "th";
  }

  let lastDigit = century % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function checkForTeens(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"

/* Fucked up slightly. Year 2000 is not 21st century... I should have read the prompt more carefully. 
Although... Isn't that how the year 2000 is typically looked at? I guess, again, teaching you not to assume anything.
No, it's actually not! Wow. Alright then. 

In addition, the 11th, 12th, and 13th numbers buck the rule for adding the 1st 2nd and 3rd. So I will need
special exceptions for those.

Also sort of interesting the way the solution broke up the function... Like, they had the logic for adding
the suffix contained in its own function. Somehow, it all works pretty well. looks pretty clean. Cleaner
than mine perhaps. But why? How did they stumble upon that? Might be worth revisiting the function principles 
section in my notes, while its on top of mind. 

Reading back through my notes: "If the function contains more than 15 lines of code (ideally 10), 
consider breaking it down into two or more functions." My function here is obviously more than 15 lines of code,
so I should definitely be breaking it down into more functions than this. What are the exceptions here? I am
not 100% sure about that. 

*/
