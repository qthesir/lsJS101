// What will the following codel og to the console and why?

function changeMyWords(words) {
  console.log(words);
  words = ["Hi", "Goodbye"];
}

let myWords = ["Hello", "Goodbye"];
changeMyWords(myWords);
console.log(myWords);

// The above code will log ['Hello', 'Goodbye'] to the console twice. Rather than
// changeMyWords mutating the object, it is instead reassigning it to a new value.
// This leaves the original myWords variable unaltered.
