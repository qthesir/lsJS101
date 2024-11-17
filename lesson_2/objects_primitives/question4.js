// What will the following code log to the console and why?

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);

// I can't be completely certain here, because myWords.concat may mutate the array or return
// a new one. I'm going to guess it mutates the array, however, and that would mean that
// myWords will log ['Hello', 'Goodbye'], since concatenating the two arrays together 
// will mutate the existing array by adding ['Goodbye'] to the last index.

// What was returned was actually just 'Hello.' My guess was wrong. .concat is not 
// a mutating method, and instead just returns a new array. 