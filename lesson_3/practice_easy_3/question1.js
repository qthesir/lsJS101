// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

//copies 
let newArr1 = numbers.slice(0,0)
let newArr2 = [...numbers].splice(3,0)
let newArr3 = numbers.filter(element => false)

// Mutations
while (numbers.length > 0) {
  numbers.pop()
  // numbers.shift()
}

// numbers.splice(3,0)

// One I missed:
// numbers.length = 0


console.log("original array", numbers)
console.log(newArr1)
console.log(newArr2)
console.log(newArr3)

// This problem did not specify whether to create a new array or mutate the existing one. However, given that
// it specifically says to remove the elements from the array, I'm going to assume mutate, which means that the
// applicable answers in that case would be 

