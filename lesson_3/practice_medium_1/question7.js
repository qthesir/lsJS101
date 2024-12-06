// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/* 
There's something to do here with including the () before a return value... Or no, actually, that has to do 
with a function declaration vs a function expression. A function declaration, when surrounded with parenthesis,
becomes a function expression, and thus does not get hoisted to the top of the function.

At any rate, what is going to happen here? So, newAnswer will be set to 42 + 8, which is 50. newAnswer will be
50. This does not affect the original value "answer" because answer is passed by value, not by reference. 
Thus, answer will still be 42, and when 8 is subtracted by 42 in the console, it will equal 34. 

34 will be returned in the console.

One peculiarity here, is the return value. It is not someNumber that will be returned, but rather the result of 
the operation, which is 42 + 8, which equals 50. 

It's also possible that an error will be returned here. Can you set variable values in parenthesis like that and
return them? Well, I'm going to assume yes, actually, because this is how it works in if () statements. 

34 is the final answer.
*/ 