// What will the following code return to the console? 

let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

// This console will log 'Goodbye' and then 'Hello'. These are both still primitive values.
// When myOtherWord is set to myWord, myWord evaluates to 'Hello', and the value is 
// stored at a different memory addres associated with myOtherWord. Therefore, when 
// myWord is reassigned to 'Goodbye,' the reasignment only affects myWord, and does not
// affect myOtherWord. 