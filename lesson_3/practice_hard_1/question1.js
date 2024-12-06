// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

/* 
No, the two functions will not return the same results. The first function will return an object with prop1 as a
property and "hi there" as a value, whereas the second function is going to return undefined, because the object 
literal is on the line below the return statement.

One question here: Is javascript considering the object literal in the second function as function scope, or an 
object? I feel like I must be missing something here... This is a hard question, after all.

I was correct somehow. 

This is an example of how not using semicolons can have unintended consequences. Although, I am having a difficult
time getting any other semicolon placement to work on that second function. This seems to be the only arrangement
it will accept without throwing an error. It seems to be treating it that way because its on another line. 
So this is somewhat confusing. 

I am seeing that, when I press save in VS code, that it is inserting that semicolon next the the return statement.
But it is still not clear how to explicitly stop that from happening if it is on the same line. Hm. 
*/
