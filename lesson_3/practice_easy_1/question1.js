// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// No, the above code will not raise and error. It will instead initialize new indices 
// from 2 to 6, set the 6th index to 5, and then indices 2-5 to undefined. 

numbers[4]

// What will the above return?
// It will return undefined

// Reflection: I had this answer slightly wrong. The indices 2-5 are not initialized to 
// undefined. They have no value at all. This is important, because if you use an array 
// method like map(), the mapping will not apply to the empty items. It will simply 
// skip them.