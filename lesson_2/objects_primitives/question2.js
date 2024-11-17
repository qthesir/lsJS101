// What will the following code log to the console and why? 

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.toUpperCase();
console.log(myWord);

// The code will log 'Hello' to the console 3 times. All of the functions called are 
// returning a new string, not mutating myWord. 

