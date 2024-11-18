// What will the following code log to the console?

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);

// 'Hello' will be logged to the console twice. This is because when myWord is passed into 
// the function, changeMyWord, it is passed by value, since it's a primitive. Thus, 
// reassigning 'word' in the changeMyWord function is modifying a different variable at 
// a different memory address, leaving myWord unaffected. The first console.log is 
// called on word before it is reassigned in the function. 

// One thought that did pop up was whether or not this would be running into the hoisted
// problem, since word was being called before it was declared in the function. I then 
// realized that it was not declared, but assigned; the declaration is happening 
// when the argument is passed in and set to the parameter 'word.' 
