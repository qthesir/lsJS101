// What will the following code log to the console and why? 

let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);

// The above code will log ['Hello'] to the console. This is because the .toUpperCase
// method is returning a string value with all uppercase letters, but it is not mutating 
// the string value, because strings are primitives and cannot be mutated. Therefore,
// no modification to the string at index 0 will have occured and, by extension, no 
// mutation of the array. 