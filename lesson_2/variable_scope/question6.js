// What will the following code log to the console and why?

let num = 1;

while (num < 3) {
  num += 1;
}

console.log(num);

// This code wil log 3 to the console. While a "while" loop has its own block scope,
// using num in the halting condition does not create a new variable num. It references
// num in the global scope, and also reassigns (adds 1 to) num until num = 3. 
// It halts once num reaches the value of 3. Thus, the value of num once it reaches 
// console.log will be equal to 3.  