// What will the following code log to the console and why? 

let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);

// ['red', 'green', 'blue', 'purple', 'pink'] will be logged to the console. This is because
// the colors array is passed by reference into the function and the object referenced
// is mutated by .push by color1 and color2 in sequence. Thus, the original array
// plus those two additions will be logged after the two function calls. 