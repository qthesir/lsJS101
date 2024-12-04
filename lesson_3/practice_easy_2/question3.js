// Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true

function includesNumber(array, number) {
  return array.includes(number);
}

console.log(includesNumber(numbers, number1));
console.log(includesNumber(numbers, number2));
