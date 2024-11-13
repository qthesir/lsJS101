// What will the following code run and why? 

let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num);

// Its going to log 10. This is because the variable num is declared in the outer scope,
// so the inner scope in myFunc has access to it. Since it is not passed in as an argument
// or declared inside the function, it is thus not shadowed. 