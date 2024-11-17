// What will the following code log to the console? 

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

// The code will log ['Hi', 'Goodbye'] to the console twice. Since myWords is an object,
// when myOtherWords is assigned to myWords, myOtherWords and myWords store the 
// same object reference as a value. Thus, when myWords[0] is reassigned to 'Hi', 
// mutating the object at the shared reference, the mutation is reflected in both variables.

