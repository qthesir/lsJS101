// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo());

("No");

console.log(bar(foo()));

// After evaluating the logic of the inner and outer function, the above function will return "No".
