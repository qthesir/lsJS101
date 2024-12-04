// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2,
// so that the array becomes [1, 2, 4, 5].

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.filter((_, index) => index !== 2));

// Thing about this is that it is not mutating. Fuck. 

console.log(numbers)
numbers.splice(2,1)

console.log(numbers)

// Splice mutates it. Splice takes two parameters: The first, which is the index, and the second, is 
// the number of characters after the index. 