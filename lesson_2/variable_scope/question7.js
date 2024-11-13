// What will the following code log to the console and why? 

let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

// Oof. This is a tricky one. Lets step through the logic: So num is declared in the outer
// scope. Then, the while loop checks if num is less than 3. Then, since num is less
// than 3, the while loop executes, declaring the new num value. I believe, in 
// block scope, since the book told us they are effectively the same as functions
// with some slight differences, should allow that num to shadow the num. But, then,
// which value is the conditional referencing? The num in the outer scope, or the num
// in the inner scope? If its the outer scope, the loop will run forever, and num never
// gets logged. If its the outer, the value of num will be 6 and then meet the loops
// halting condition, then the num that gets logged will be that of the outer scope,
// which will be 1. So, what is prioritized in the halting condition?? 
// The other possibility is that the halting condition is at the top of the scope of 
// the while loop block, and will return an error, because num has been called before
// being defined. That, actually, is what I think will happen. I think it will throw 
// a reference error. 
// But, wait... this is "block" scope we're talking about here. The variable is contained
// inside the block scope. The question is... is the conditional considered inside 
// the block scope, or outside of it? 
// No, inside of it. Lets go with that. That's what for loops do, I think!

// Well, I ran it, and it was an infinite loop. Damnit. Ok... well, that means that 
// the conditional statement in a while loop is not inside the block scope. So, 
// if the while loop depends on a variable in the global scope that has the same name
// as a variable in local scope that's being incremented, then it will run infinitely,
// because the variable in the outer scope is never incremented. 

// In the program "experimenter," I ran the same example, except in a for loop. 
// The for loop did not result in an infinite loop. Is that because the conditional 
// / parenthesis part of the loop is included in the scope? 