// What will log to the console? 

function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

// The code will log ['Hello', 'Goodbye'] followed by ['Hi', 'Goodbye']. This is because
// myWords is passed by reference to the changeMyWords function, and the words[0] = 'Hi' 
// operation mutates the reference shared by the words parameter and the myWords 
// variable. 