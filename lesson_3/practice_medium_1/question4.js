/*
Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a 
rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in 
the buffer.

She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her 
team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

Is there a difference between these implementations, other than the method she used to add an 
element to the buffer? You may assume that newElement will always be a primitive value.
*/

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/* 
Yes, there is a difference. In the first function, the buffer array is being mutated. In the second, there has 
been a reassignment. Since the buffer is an array and is being passed by reference, the mutation in the first 
function is going to mutate the array being passed in as a argument, in addition to the parameter within the 
function. In the second function, the buffer parameter is being reasigned to the value returned by a non-mutating
array method .concat, which will be a reference to a new array. This also means that, in the first function, the 
.shift() method will mutate the argument as well, but in the second function, it will mutate the new array 
reference returned by buffer.concat(newelement).

By extension, another difference is that the first function will return the reference (pass by reference) of the 
original buffer argument, while the second function will return the reference (also a pass by reference) of 
the new array reference returned by buffer.concat(). 

Lets test to see if I'm correct:
*/

let testBuffer1 = [1,2,3,4,5,6]
let testBuffer2 = [1,2,3,4,5,6]
let testNewElement = 4
let testMaxBufferSize = 6

let retArr1 = addToRollingBuffer1(testBuffer1, testMaxBufferSize, testNewElement);
console.log(retArr1 === testBuffer1, retArr1, testBuffer1)
let retArr2 = addToRollingBuffer2(testBuffer2, testMaxBufferSize, testNewElement);
console.log(retArr2 === testBuffer2, retArr2, testBuffer2)
