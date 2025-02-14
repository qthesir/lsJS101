// Question 1

// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

let advice2 = advice.replace("important", "urgent");
// This code will only replace the first instance. To replace them all, you can do:

let advice4 = advice.replaceAll("important", "urgent");
console.log(advice4);

// The loop will also replace everything

console.log(advice2);

// for loop practice

let adviceArr = advice.split(" ");

for (i = 0; i < adviceArr.length; i++) {
  if (adviceArr[i] === "important") {
    adviceArr[i] = "urgent";
  }
}

let advice3 = adviceArr.join(" ");
console.log(advice3);

// Question 2

// use reverse and sort to reverse the order of the array, but do it without mutating the original array.

let numbers = [1, 2, 3, 4, 5];
let numbers2 = numbers.slice().reverse();
console.log(numbers2); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let numbers3 = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers3); // [ 5, 4, 3, 2, 1 ]

console.log(numbers);

// with forEach

let newNumbers = [];
numbers.forEach((val) => {
  newNumbers.unshift(val);
});

console.log(newNumbers);
