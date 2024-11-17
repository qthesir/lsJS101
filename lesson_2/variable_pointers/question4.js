// What will the following code log to the console and why? 

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

//  The console will log ['Hi', 'Bye'] followed by ['Hello', 'Goodbye']. This is because,
// as opposed to the case in the last question where the variable referenced by 
// myWords had a value reassigned, myWords itself is being reassigned. When myWords is
// reassigned, its value is a new reference to a new object. Since myWords and 
// myOtherWords each have a unique address in memory, the reassignment of myWords 
// does not affect the value of myOtherWords. 