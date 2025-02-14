// What will be the output on the last line of code? What concept does it demonstrate? -- Quinlan

function addOne(num) {
  return num + 1
}

function mutater(adder) {
  adder['a'] = 'mutated'
}

mutater(addOne);
console.log(addOne.a);

/* The output of the last line of code is going to be 'mutated.' This code is demonstrating a couple concepts. 
The first concept is functions as objects or functions as first class citizens, which allows functions to contain
properties like objects. The function mutater is adding the property 'a' to addOne when called. 
The second is pass by reference, which is the idea that a copy of the reference to addOne is passed to the 
mutater function rather than a copy of it. Therefore, the mutater function 
*/