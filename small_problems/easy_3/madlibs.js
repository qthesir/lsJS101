/* 
Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, 
then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, 
and injects them into a story that you create.

Example: 

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

*/

/*
PEDAC

Input 
  User provided noun, verb, adjective, and adverb
Output
  Do you [verb] your [adjective] [noun] [adverb]? That's hilarious! 
  The [adjective] [noun] [verb] [adverb] over the lazy dog. 
  The [noun] [adverb] [verb] up [adjective] Joe's turtle. 

Assumptions
1. The output text will be the paragraph listed in the example, with the user entrys imputed into 
the slots where the example noun, adjective, verb, and adverb are located. 
2. There are no checks on whether the word entered by the user is a proper verb, noun, adjective, adverb etc. 

Mental Model
The program asks the user to input a noun, verb, adjective, and adverb in that order. The program then outputs
a text template with  the variables entered by the user imputed. 

Data Structure
The program will take a string as an input and output a string. 

Algorithm 
1. Declare a function called "madlib" that doesn't accept any arguments (a function with side effects if you will)
2. Declare and assign the following variables to the user input
  [noun], user prompt: Enter a noun: 
  [verb], user prompt: Enter a verb:
  [adjective], user prompt: Enter an adjective:
  [adverb], user prompt: Enter a prompt
4. Log the template with the respective variables interpolated: 
  Do you [verb] your [adjective] [noun] [adverb]? That's hilarious! 
  The [adjective] [noun] [verb] [adverb] over the lazy dog. 
  The [noun] [adverb] [verb] up [adjective] Joe's turtle. 

*/

// Code with intent

let rlSync = require("readline-sync");

function madlib() {
  let noun = rlSync.question("Enter a noun: ");

  let verb = rlSync.question("Enter a verb: ");

  let adjective = rlSync.question("Enter an adjective: ");

  let adverb = rlSync.question("Enter an adverb: ");

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious! 
  The ${adjective} ${noun} ${verb} ${adverb} over the lazy dog. 
  The ${noun} ${adverb} ${verb} up ${adjective} Joe's turtle. `);
}

madlib();
