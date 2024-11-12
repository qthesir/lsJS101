/* 
Write a program that will ask for user's name. The program will then greet the user. 
If the user writes "name!" then the computer yells back to the user.
*/

/* 
PEDAC
Input:
  User-provided name
Output:
  None
Side Effects:
  Logs a greeting to the console with the user's name

Implicit Assumptions
1. The name entered by the user is not literally "name!" as stated in the prompt, but the
name the user enters, followed by a "!"
2. By "yells" at the user, the prompt is saying that the output logged to the console
is going to be in all caps (e.g. HELLO MAX!)
3. The prompt displayed to the user will read: "What is your name? " 
4. Remove the ! from the users name before logging it to the console, if the name 
includes a !

Mental Model
Display a prompt to the user that asks them to enter a name, and store it as a string.
Check if the string contains the '!' character. If it doesn't, display a simple Hello. 
If it does, display a 'HELLO' message in all caps, and ask the user, in all caps, 
why they are screaming.

Examples/Test Cases
Input:
  Bob
Output:
  Log: Hello Bob.

Input: 
  Bob!
Output:
  HELLO BOB. WHY ARE WE SCREAMING?

Data Structures: 
  The input will be a string, and the output will be a string logged to the console.

Algorithm:
1. Declare a function named "greeting"
2. Declare a variable called "name" 
3. Request the user enter their name. Set the result to the "name" variable.
4. If the name contains a '!' character:
      remove the '!' character from the name
      log `HELLO ${name}. WHY ARE WE SCREAMING?` to the console
   else:
      log `Hello ${name}` to the console.

*/

// Code

const readline = require("readline-sync");

function greeting() {
  let name;
  name = readline.question("What is your name? ");
  if (name.includes("!")) {
    name = name.slice(0, name.length - 1).toUpperCase();
    console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greeting();

// Reflection: Well, looks like I forgot a key detail: I needed to capitalize the user's 
// name, and also remove the "!" character from the string when the user passes in their
// name with an "!". This was an implicit assumption/detail that I missed. I have since 
// updated. Another thing I did not think about was where exactly the program would want
// the "!". Would it be acceptable to put it at the beggining? If so, we would have
// to turn the string into an array, check where the "!" is, remove it from the array,
// and then put the array back together into a string. 

// There is also a string method called name.endsWith('!'), where I could have put the
// character there.