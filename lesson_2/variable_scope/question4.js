// What will log to the console and why?

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

// The program will log undefined with the first console.log and 5 with the second. 
// The reason for this is because the num declaration inside the function is hoisted to 
// the top of the function, but the declaration is not. Therefore, when calling the 
// variable num in myFunc prior to line 7, it will return undefined. Since the 
// num value referenced is shadowing the global scope num, it will not return 5. 
// The last console.log will return 5, since the variable assignment inside the function 
// is referencing the new variable. 

// I was slightly wrong on this one: It actually returns an error. The let and const
// keywords are hoisted, but do not get initialized until the statement in the code,
// and remain in what's called a temporal dead zone. When called in this zone, prior to 
// declaration, 
// they return a reference error. In the case of the var statement, the variable is
// initialized to undefined and then hoisted, and can be accessed as undefined until
// its value is assigned. This is why programmers don't use var much: It has confusing
// behavior that's hard to debug. 