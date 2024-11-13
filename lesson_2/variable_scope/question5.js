// What will the following code log to the console? 

let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

// 5. in myFunc, the num parameter is initialized as a new variable 
// (undefined, in this case, because we didn't pass anything explicitly to the function)
// and shadows the variable in the outer scope. Thus, the num = 10 inside the function is 
// referencing the variable inside the function scope. 