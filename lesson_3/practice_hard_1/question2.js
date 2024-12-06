// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Try to answer without running the code or looking at the solution.

/* 
Let's step through what's happening here: So first, object is declared, which contains one property "first" which
has the value of an array, which is another object. When numArray is set to the 'first' property of object, it is
set to the reference to the array object. Now, the nested array in object has the same reference as numArray. 

Then, numArray is mutated with the .push method, appending 2 to the end of the array. Now the array is [1,2]. 
Both numArray and the nested array in object point to that array, so both will now equal [1,2].

Therefore, the console.log(object) line will return { first: [1,2] } to the console.
*/