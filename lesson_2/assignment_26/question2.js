// What will the following code log to the console?

let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

// The above code will log ['red', 'green', 'blue', undefined] to the console. This is 
// because the parameter "color" is never passed the argument "color" and therefore 
// initializes to undefined. Undefined is pushed to the colors array, which is passed 
// by reference and modifies the colors array in the global scope when mutated. 