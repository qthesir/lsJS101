// Can you identify all of the variables, primitive values, and objects in the following code?

function boo(scare) { // variables scare and boo
  let myBoo = scare.toUpperCase() + "!!!"; // variable myBoo
  console.log(myBoo);
}

const halloweenCollection = { // variable "halloweenCollection"
  greet: "Happy Halloween", // variable greet
  scare: "Boo", // variable scare
  wish: "May all your pumpkins be glowing", // variable wish
};

let myBoo = boo(halloweenCollection["greet"]); // variable myBoo 

/*
Variables: scare, boo, myBoo (function scope), halloweenCollection, myBoo (global)
Total: 5
Question: Are properties considered variables? Not sure. If not, this is 5. There is 5. Removed the 3 properties.

Primitives: "!!!", "Happy halloween", "boo", "may all your pumpkins be glowing", "greet", "scare", "wish",
scare (function scope), scare.toUpperCase(), myBoo (function scope)), 
"greet" (object reference), myBoo (global scope), halloweenCollection["greet"]
Total: 13

Objects: halloweenCollection, boo
Total: 2

Forgot that myBoo is actually going to be assigned to undefined, which is a primitive. 

*/

