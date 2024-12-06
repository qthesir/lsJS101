// What will the following two lines of code output? 

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

/* 
The first line of code will output 0.9. This is what's returned by the operator acting on the left and right 
operand.

The second line of code is a different situation. First of all, it depends on the order of operations. 
Does JavaScript execute the === comparison operator first, or the addition operator first? If its the former, then 
the result will be 0.3, because the comparison operator will evaluate to false, which will then be coherced
to a 0 (0 is false and 1 is true) by the + operator. If it is the latter, then the result will evaluate to 
true, and true will be returned to the console.

Lets check the MDN doc to see which of these operations evaluate first.

Additive operators will execute before the equality operator, so the second console.log statement will 
therefore return true.

Well, that's goddamn weird. The first operation returned 0.899999999999... and the second, obviously, returned
false. What's the deal with that? I suppose this is a gotcha about floating point precision, and you should not 
rely on equality operators to evaluate floating point operations without rounding first. 
*/ 