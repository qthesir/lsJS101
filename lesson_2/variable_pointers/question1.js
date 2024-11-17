// What will the following code log to the console and why? 

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);

// 'Hello' and 'Hello' will be logged to the console. This is because myOtherWord is 
// going to have the same value as myWord, since myWord evaluated to 'Hello' when 
// myOtherWord was declared and assigned. These strings are the same value, but they 
// are stored at different memory addresses. 

