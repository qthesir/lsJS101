// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort
// can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the
// original array as shown below. Write two distinct ways of reversing the array without mutating the
// original array. Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
let newNumbers = numbers.slice().reverse();
console.log(numbers);
console.log(newNumbers);

numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
let newNumbers2 = numbers.slice().sort((num1, num2) => num2 - num1);

let newNumbersSpread = [...numbers].sort((num1, num2) => num2 - num1);

console.log(numbers);
console.log(newNumbers2);
console.log(newNumbersSpread);

// Hmmm. Well, I mean, can't you just copy the damn thing? Like with Object.assign?

// Bonus Question: Can you do it using the Array.prototype.forEach() method?

let newNums = []
numbers.forEach((num) => {
  newNums.unshift(num)
})

console.log(newNums)

// Reflection: The lesson in this one is that it is a litte tricky dealing with array reassignment with
// rferences and mutation. You can't just make a copy by setting it equal to the other variable, you 
// have to make a complete copy of the array. The .slice and spread syntax are quick ways to do that.

// In the forEach solution, the unshift method makes this pretty easy, where, as the numbers array is being iterated
// through, appends each number to the beginning of a new array, with the last number of the numbers array, 5, 
// being appended to the first slot of the new array, completing the reversal. 