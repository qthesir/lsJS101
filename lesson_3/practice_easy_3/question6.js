// Examine the following code carefully. Can you identify all of the variables, primitive values,
// and objects that exist when this code executes?

let arr = [1, 2, 3]; // object
let newArr = arr; // object pointing to arr

const num = arr[0]; // primitive
let newNum = num; // primitive

function double(num) {
  // function object "double"
  return num * 2; //num shadowing num in the global scope
}

double(newNum); // This returns a primitive value of 1 * 2 = 2.

// Variables: arr, newArr, num, newNum, double, num in function scope
// Primitive values: num, newNum, num in fuction scope, the value returned by double
// Objects: [1,2,3] (refernced by arr and newArr), and the function double

/* 
One thing I got wrong here was the number of primitives... There are 9 primitives. I only listed 4. Before reading 
the solution, I can see that I missed 3 primitives in the array object. That makes 7. I also missed the primitve
used to reference the arr[0] slot, "0". That makes 8. I then also missed the number 2 in the double function
used to multiply the num in function scope. That makes 9 in total. Does the primitive returned by double 
count? I'm not totally sure, but I'm going to assume so, since the value exists when the code executes. 

To note: newNum is passed by value to the function double, and returning num * 2 is also considered a pass by value,
since the value being returned is a primitive. 
*/ 
