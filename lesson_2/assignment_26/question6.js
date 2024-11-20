// What will the following code log to the console and why? 

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

// The following values will be logged to the console: 'hello', 'Hello', 'hello!!!'.
// The reason for this is because the functions do not accept any parameters, so they ignore
// any arguments passed into the function. While capitalizedWord will yield the expected
// value 'Hello,' exclaimedWord will add !!! to the original word 'hello' from the 
// global scope, rather than capitalizedWord. 

// Reflection: Fucked up slightly here! The exclaim function is actually reassigning
// the global scope "word" variable with the += operation. For some reason, my brain
// did not pick that up as an assignment. Very odd. 
