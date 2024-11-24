/* 
Build a program that logs when the user will retire and how many more years the user
has to work until retirement.
*/

/* 
PEDAC

Problem

Input: 
  User selected current age
  User selected age of retirement
Output:
  Current year
  Year of retirement
  Number of years before retirement

Implicit Assumptions
1. The user must enter ages that are greater than 0
2. The age of retirement must be greater than current age
3. The program is also logging the year of retirement, and the current year.
4. I'm assuming that 2017 is the current year and not some different year. 
5. Current age and retirement age must be rounded to the nearest age if a floating 
point number is entered.
6. The program will only accept to whole years, and will not accept months. 
7. The console output should be wrapped in the text in the example.

Mental Model
The program asks the user to enter their current age and retirement age, and calculates 
the number of years remaining until retirement. Then, the program retrieves the current
year, and adds the number of years remaining until retirement to the current year to get 
a retirement year. Current year, retirement year, and the number of years until retirement 
are all logged to the console. 

Examples / Test Cases

Input: 
  Current Age: 30
  Retirement Age: 70
Output:
  Current Year: 2017
  Retirement year: 2057
  Years until retirement: 40

Input: 
  Current Age: 25
  Retirement Age: 60
Output:
  Current year: 2024
  Retirement year: 2059
  Years until retirement: 35 

Data Structure

The program will take two number types as an input, and output string values to the
console.

Algorithm
1. SET the variable age, and set it equal to user input (number only)
2. SET the variable retirementAge, and set it equal to user input
3. SET yearsToRetirement = retirementAge - age
4. SET currentYear = current year
5. SET retirementYear = currentYear + yearsToRetirement
6. Log currentYear, retirementYear, and yearsToRetirement to the console
*/

// Code

const readline = require("readline-sync");

let age = Number(readline.question("What is your age? "));
let retirementAge = Number(
  readline.question("At what age would you like to retire? ")
);

let yearsToRetirement = retirementAge - age;

let currentYear = new Date().getFullYear();
let retirementYear = currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${yearsToRetirement} years of work to go!`);

// Reflection: I forgot to turn the readline.question into a number type! Ag.

// When the new keyword is not used in front of the Date, the
// program returns a typeError: .getFullYear is not a function. 
// I think this is because its returning a string, which is attempting
// to coherce the given value to a Date, whereas new Date() returns a 
// new Date object, which basically creates a new prototype of the Date. 
