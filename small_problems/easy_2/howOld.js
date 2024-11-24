/* 
  Build a program that randomly generates Teddy's age, and logs it to the console. Have the 
  age be a random number between 20 and 120 (inclusive).
*/

/* 
PEDAC 

Input:
  start the program
Output:
  Log teddy's age to the console.

Implicit assumptions:
1. Teddy's age should be wrapped by "Teddy is ${age} years old!" in the output to the
console.
2. Teddy's age in the range of 20 and 120, inclusive
3. The age will be rounded to the nearest whole number. 

Mental model
The program will randomly generate a number between 20 and 120, then log it to the 
console.

Examples / Test cases

Input:
  *Start the program
Output:
  Teddy is 69 years old!

Data structure
There is not input value to this program, except the user action to run it. Output 
will be a string logged to the console. 

Algorithm
1. Generate a random value
2. Convert the value to a range of 20 to 120
3. Set the value equal to variable "age"
3. console.log(`Teddy is ${age} years old!)

*/

// Code

const MAX_AGE = 120;
const MIN_AGE = 20;

function generateAge(min, max) {
  if (min > max) {
    console.log("Error: Please enter values where max is greater than min");
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let teddyAge = generateAge(MAX_AGE, MIN_AGE);

if (!Number.isNaN(teddyAge)) {
  console.log(`Teddy is ${teddyAge} years old!`);
}

// Reflection: Could have made this more flexible by having the generate age function
// take two arguments, the min and the max. Made the change.
// It's also not clear why the answer key would use floor as opposed to rounding and
// adding 1. Why not just round? In the worst case, you end up with 0 + the min, which
// is 20, and the age is in inclusive anyway. I don't think it changes the odds in anyway.
// You just remove the plus 1 and its good.

// Turns out... that it does change the odds. The numbers at the end of the range are
// about half as likely to be selected than all of the other integers, because
// 20.5 or less will round down to 20 and 119.5 or above will round up to 120. So,
// the floor modification is essential for this function to return each age with
// equal probability.

// If you gave inputs where the min was greater than the max, well, first of all, this
// should be guarded against because it's nonsensical and should always be a mistake.
// If this did happen, though, it would actually return the same range as if they were
// entered the other way around.

// (20 - 50) + 50
// (20 - 120) + 120
