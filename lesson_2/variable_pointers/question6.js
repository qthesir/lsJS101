// What will the following code log to the console?

let myWords = ["Hello", "Goodbye"];
let myWord = "Hi";
myWords[0] = myWord;
myWord = "Hello";

console.log(myWords);
console.log(myWord);

// The program will log ['Hi', 'Goodbye'] followed by 'Hello'. This is because myWords
// at the 0th index is set to equal myWord, which is equal to 'Hi'. When myWord is
// reassigned to 'Hello,' this does not effect the object property myWords[0], because
// it is a primitive. Changing the value of one does not affect the other, because
// the value of primitive values are stored at different memory addresses.
