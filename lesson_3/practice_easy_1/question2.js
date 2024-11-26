// How can you determine whether a given string ends with an exclamation mark?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

const hasExclaimation = (str) => {
  return str[str1.length - 1] === "!";
};

console.log(hasExclaimation(str1)); // true
console.log(hasExclaimation(str2)); // false

// Reflection: Could also use the following string method:

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));
