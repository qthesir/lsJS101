// Pseudocode practice


// Write pseudocode that returns the sum of two numbers: 

// Informal:
// For a given two numbers, a and b
// Set a and b to the quantities to be summed
// Add a and b
// Return the sum of a and b

// Formal: 
// START
// SET A 
// SET B
// C = A + B
// PRINT C
// END


// Write pseudocode for a function that takes an array of strings, and returns a string 
// that is all those strings concatenated together

// Informal: 
// For a given collection of strings
// Set a variable, A, to an empty string
// Iterate through the collection of strings one by one
// For each iteration, add the current value to variable A
// Continue until there are no more strings in the collection
// Return variable A

// Formal: 
// START
// # FOR A GIVEN COLLECTION OF STRINGS
// A = ''
// WHILE iterator < length of string collection:
//    A = A + value within collection of strings at space "iterator"
// PRINT A
// END


// Write pseudocode for a method that takes an array of integers, and returns a new array 
// with every other element from the original array, starting with the first element. 
// For instance: everyOther([1,4,7,2,5]); // => [1,7,5]

// Informal: 
// For a given collection of integers
// Set A to an empty array
// Iterate through the collection of integers
// For each iteration, check if the index is even. 
// If the index is even, add the integer to A 
// After iterating through the collection, return A

// Formal:
// START
// #FOR A GIVEN COLLECTION OF INTEGERS
// SET A = []
// WHILE iterator < length of collection of integers
//    IF iterator % 2 == 0
//        Append integer within the collection of strings at space "iterator"
// PRINT A
// END 


// Write pseudocode for a function that determines the index of the 3rd occurrence of a 
// given character in a string. For instance, if the given character is 'x' and the string 
// is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given 
// character does not occur at least 3 times, return null.

// Informal:
// For a given string and a given character of a string
// Set A to the value of the desired character
// Set I to 0
// Iterate through the characters of the string
// For each iteration, check if the character is equal to A
// If the character is equal to A, increment I by 1
// When I is equal to 3, exit the loop and return the index of the 3rd occurence
// If the loop terminates and I is less than 3, return null

// Formal: 
// START 
// # FOR A GIVEN STRING AND GIVEN ALPHABETIC CHARACTER
// SET A = Character
// SET I = 0
// WHILE iterator < length of the string
//    IF character at space iterator is equal to A:
//    I = I + 1
//    IF I == 3:
//        PRINT character at space iterator
// IF I < 3:
//    PRINT null
// END


// Write pseudocode for a function that takes two arrays of numbers and returns the result 
// of merging the arrays. The elements of the first array should become the elements at 
// the even indexes of the returned array, while the elements of the second array should 
// become the elements at the odd indexes. For instance:

// Informal: 
// For a given array A and array B 
// - Set newArray to an empty array
// - Set I equal to 0
// - Iterate through the values of array A
// - For each iteration, set the value of newArray at space I to the value of array A at
//   the current iteration. Then, add 2 to I
// - Set I to 1
// - Iterate through the values of array b 
// - For each iteration, set the value of newArray at space I to the value of array b at
//   the current iteration. Then, add 2 to I
// - Return newArray

// Formal: 
// START 
// # FOR A GIVEN ARRAY A AND ARRAY B
// SET newArray = 0
// SET I = 0
// WHILE iterator < length of array A
//     newArray at space I = array A at space of the current iteration
//     I = I + 2 
// SET I = 1
// WHILE iterator < length of array B
//     newArray at space I = array B at space of the current iteration
//     I = I + 2 
// PRINT newArray 
// END 

