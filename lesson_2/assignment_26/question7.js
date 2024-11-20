// What will the following code log to the console and why? 

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

// NOW what we get is 'hello', 'Hello', and 'Hello!!!' In this case, a parameter is defined
// with the functions. That parameter, when assigned to the argument word and capitalizedWord,
// respectively, are passed in as value and shadow the word variable in the global scope.
// Thus, in none of the function calls is the global scoped word value altered, and it 
// maintains its original 'hello' value. Capitalize performs the expected operation, 
// returning 'Hello.' exclaimedWord returns the result of adding '!!!' to the 
// capitalizedWord passed into the function, returning 'Hello!!!'. It does not, in this
// case, affect the global scoped word, because the word parameter shadows the 
// word in the global scope and it is a primitive, thus passed by value and not by 
// reference. 