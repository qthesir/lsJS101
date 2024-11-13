// What will the following code log into the console?

let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num);

// The console.log inside the function will log 5, while the second console.log will
// log 10. The reason for this is because the num variable is declared in the outer scope,
// and the function does not run until it is called, so console.log(num) is called
// before the variable is set to 10. The console.log after myFunc, however, will log 
// 10, because it runs after the funciton where the variable is set to 10. 