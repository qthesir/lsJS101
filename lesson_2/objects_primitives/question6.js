// What will the following code log to the console and why?

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

// The program will log ['HELLO'] to the console. In this case, the value in array myWords
// at index 0 is being reassigned to the value returned by called toUpperCase() on 
// myWords[0]. This mutates the array.  