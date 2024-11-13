// What will the following code log into the console?

let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);

// The console will log 5. This is because a new num variable was declared inside myFunc,
// shadowing the variable declared in the outer scope. The outer scope variable is what
// is referenced by console.log(). In other words, line 4 is initializing a new variable,
// rather than reassigning the varialbe num declared in the global scope.
