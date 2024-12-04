// Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let tCount = statement1.split("").reduce((accumulator, currentValue) => currentValue === 't' ? accumulator + 1 : accumulator, 0)
let tCount2 = statement2.split("").reduce((accumulator, currentValue) => currentValue === 't' ? accumulator + 1 : accumulator, 0)

console.log("By using accumulator:")
console.log(tCount)
console.log(tCount2)

// Here's another way using filter:

let tCount3 = statement1.split("").filter(letter => letter === 't').length
let tCount4 = statement2.split("").filter(letter => letter === 't').length

console.log("By using filter:")
console.log(tCount3)
console.log(tCount4)