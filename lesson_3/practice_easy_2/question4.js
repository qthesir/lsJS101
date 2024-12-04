// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

let words = 'Four score and '

let newFamousWords = words + famousWords
console.log(newFamousWords) 
newFamousWords = words.concat(famousWords)
console.log(newFamousWords)

