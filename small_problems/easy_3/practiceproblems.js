// What will be logged to the console and why? -- Nick

const original = {
  a: 1,
  b: { c: 2 },
};

const shallowCopy = { ...original };
shallowCopy.a = 10;
shallowCopy.b.c = 20;

console.log(original.a, original.b.c); // 1 20
console.log(shallowCopy.a, shallowCopy.b.c);//  10 20

// Here, when the object "original" is copied with the spreader syntax, the spreader syntax is also copying
// the reference to the nested object. Therefore, if the nested object is mutated in either object, the change
// will reflect in both objects. Which is why 20 appears in both the original and the shallow copy.

// I am not sure what concept this represents, however.


// What is logged on the last line? Explain -- MOnte

const a = 1 && 2;
const b = 0 || 3;

if (a > b) {
  c = a;
} else {
  c = b;
}

console.log(c);

// This has to do with short circuiting logical operators. In &&, both values need to evaluate to true before
// the operator returns a value (if it were false, it would return that value immediately, because the logical
// operation would be complete). Thus, a is going to equal 2. In the case of b, it will return the first
// value if it evaluates to true. 0 evaluates to false, thus, it will check 3, which evaluates to true, and will
// thus return 3. So a = 2, and b = 3. In the comprison, therefore, a is not going to be greater than be, so
// the else statement will execute and c will be equal to 3. Thus, the console will log 3. This is illustrating the
// short-circuiting behavior of logical operators in JavaScript.

// // What is the output? Explain why.  -- Xavier
const person = {
  name: 'Alice',
  age: 30
};

function updateAge(obj) {
  obj = { name: 'Alice', age: 31 };
}

updateAge(person);
console.log(person);

// What's going to happen here, is the age of alice in the output is going to be age 30. This is because,
// although the person object is passed by reference to updateAge, the obj parameter is shadowing the person variable,
// and when it is set equal to a new value, the obj variable then holds that new value. In order to change the
// person object, the person object would have to be mutated.

// Specifically, reassigning obj creates a new reference, and obj then points to a new object in memory. Person in
// outer scope... Need to remember this type of syntax.

// // What will be the output on the last line of code? What concept does it demonstrate? -- Quinlan

// function addOne(num) {
//   return num + 1
// }

// function mutater(adder) {
//   adder['a'] = 'mutated'
// }

// mutater(addOne);
// console.log(addOne.a);


// // What is the output? Explain what is going in the code. -- Zack

const world = () => 'world';
const shout = (toShout) => `${toShout().toUpperCase()}!`;
console.log(shout(world));

// The function "shout" is a callback function that takes a function, calls it, and converts the return value
// to upper case. I'm not totally sure what's going to happen here. On one hand, one liner arrow functions
// should implicitly return the value calculated by the function, and do not require an explicit return statement.
// So my guess is that toShout will, in fact, return world, and convert it to upper case. Therefore, what will
// be logged to the console will be WORLD. Oh, also, this is a ${}, which is a template literal.
// I suppose this would be an example of functions as objects or functions as first class citizens. Also of the
// implicit return value of the one liner arrow function.

// Here are the concepts: Higher order functions, which are functions that accept other functions as arguments.
// This also illustrates the concept of functions as objects first class citizens, which includes the
// characteristic of being able to pass functions as arguments. Function invokation, which I'm not sure the
// test would be looking for, but functions are being invoked here.

// Function expressions vs. function declarations. world is an arrow function expression, not a declaration,
// meaning it is not hoisted, but it does have the property of implicitly returning "world" without a return
// statement.


// Primitive types

/*
1. Number
2. String
3. Undefined
4. BigInt
5. Boolean
6. Symbol
7. Null (the fact that typeof returns object here is actually a bug. An Accident. It is actually a primitive type
  that reflects the absence of a reference in the code)
*/