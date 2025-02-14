// What will be the output on the last line of code? What concept does it demonstrate?

function addOne(num) {
  return num + 1
}

function mutater(adder) {
  adder['a'] = 'mutated'
}

mutater(addOne);
console.log(addOne.a);

// The output is going to be 'mutated.' In JavaScript, functions are first class citzens, which means they
// inherit all of the properties of objects. When addOne is passed into the mutater funtion, a property 'a' is
// created and given the value 'mutated.' Therefore, when you access the 'a' property on addOne after that function
// is called, you get the value 'mutated.' This is also demonstrating the concept of passing an argument as a reference,
// since the addOne function is getting mutated by the function mutater via the reference to the function object
// addOne. This is also an example of a side effect, since the mutater is not returning any value. 

// What will be the output on the last line of code? What concept does it demonstrate?
const myObj = {
  b: "world"
}

function addOne(num) {
  return num + 1
}

function mutater(adder) {
  adder['a'] = 'mutated'
}

mutater(addOne);
mutater(myObj);
// console.log(addOne.a);
console.log(addOne());
myObj();
addOne();

console.log(addOne);
console.log(myObj);

/*
When you try to call myObj as a function, when it is not a function, you get a TypeError, because, fundamentally,
you are trying to do something with an ordinary object type that it cannot do. Functions are objects, but objects
are not functions - objects are conceptual precursors to objects. In addition, when you attempt to call addOne,
without passing in a value, the parameter num gets set to undefined. When you perform the operation undefined + 1,
javascript coerces undefined to NaN, and NaN + 1 is equal to NaN. Thus, addOne() will return NaN. 

A reference error is thrown when you reference a variable or call a function that doesn't exist. A TypeError gets
thrown (or an exception raised) when the error is related to the type of variable and how its being manipulated.
For instance, if you try to call an object property on undefined or null, you get a TypeError. If you try 
to call a non-function object or primitive, you will also get a TypeError. Finally, a SyntaxError will be thrown if 
you screw something up with the actual syntax of the language, like a missing curly brace in a function call. 


*/ 