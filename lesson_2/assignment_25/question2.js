// What will the following code log to the console and why?

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = "Hello";
myWord = changeMyWord(myWord);
console.log(myWord);

// The above code will log 'Hello' and then 'HELLO' to the console. myWord is set equal to
// 'Hello' initially, and then passed into the function changeMyWord. Change my
// word logs the value of myWord to the console, changes it to upper case, and returns
// the new value. This new value is assigned to myWord, and thus, the value of myWord
// becomes 'HELLO', which is why is logged to the console in the last console log.
