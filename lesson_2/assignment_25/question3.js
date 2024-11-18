// What will the following code log to the console?

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = "Hello";
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);

// 'Hello' and then 'HELLO' will be returned the console. myWord is passed-by-value, and
// myWord and the word parameter do not share a reference, so myWord is not
// altered by the function. myOtherWord, however, is set to the value returned by the
// function, which is upper cased Hello.

// Small mistake here: 'Hello' will be logged twice, because there is also a
// console.log inside of the function that will log 'Hello.'
