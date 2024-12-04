// The following function unnecessarily uses two return statements to return boolean values.
// Can you rewrite this function so it only has one return statement and does not explicitly
// use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Try to come up with at least two different solutions.

function isColorValid1(color) {
  return color === "blue" || color === "green";
}

// What I did here was play around with the venn diagram in my head. How else can you shade in the venn diagram
// of green or blue? 
function isColorValid2(color) {
  return !(color !== "blue" && color !== "green")
}

// This is a good way because then you can alter the "valid colors" array in a setting constant. 
function isColorValid3(color) {
  return ['blue', 'green'].includes(color)
}


// test cases

let color1 = "blue";
let color2 = "red";
let color3 = "green";

console.log(isColorValid(color1));
console.log(isColorValid1(color1));
console.log(isColorValid2(color1));
console.log(isColorValid3(color1));
console.log(isColorValid(color2));
console.log(isColorValid1(color2));
console.log(isColorValid2(color2));
console.log(isColorValid3(color2));
console.log(isColorValid(color3));
console.log(isColorValid1(color3));
console.log(isColorValid2(color3));
console.log(isColorValid3(color3));
