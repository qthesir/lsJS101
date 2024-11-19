// What will the following code log to the console and why? Don't run it until you have
// tried to answer.

let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

// The console will log ['red', 'green', 'blue', 'yellow']. This is because colors is 
// passed by reference, and when color is pushed to colors inside the function, the 
// array is mutated at the same reference as colors in the global scope.