// Using the following string, create a new string that contains all lowercase letters
// except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function allLowerFirstUpper(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(allLowerFirstUpper(munstersDescription));

// Reflection: After viewing the solution, I made 1 change: Just moved the slice in
// front of toLowerCase(). I don't think it affected much, but it makes the code
// easier to read.

// The solution used .charAt() instead of referencing the index, and substring
// instead of slice. Otherwise, it was essentially the same.
