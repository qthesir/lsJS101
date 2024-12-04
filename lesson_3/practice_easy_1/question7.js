// Determine whether the name Dino appears in the strings below -- check each string separately:

let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

// The string method .indexOf() will return -1 if the index is not present.

console.log(str1.indexOf("Dino"));

// The string method .match() will return null if there is no match, and an object if there is a match.
console.log(str2.match("Dino"));
