// What will the following code log to the console and why?

let myWords = ["Hello", "Goodbye"];
let myWord = myWords[0];
myWords[0] = "Hi";

console.log(myWords);
console.log(myWord);

// The console will log ['Hi', 'Goodbye'] and 'Hello' to the console. myWord is assigned the
// string value of myWords at index 0, which is 'Hello'. This is not a reference to the
// property in myWords, since primitive values, like strings, are stored directly at the
// variable's memory reference (this is slightly different for strings but their behavior
// is the same as other primitives). When myWords[0] is reassigned to 'Hi', this is
// mutating the myWords array, but does not alter myWord.

// Would be interesting to see what happens if the first value in myWords is an 
// object.