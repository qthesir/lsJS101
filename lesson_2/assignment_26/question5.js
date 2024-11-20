// What will the following code log to the console? 

let color = "purple";
let colors = ["red", "green", "blue"];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);

// ['red', 'green', 'blue']. In the first function removeColor, color in the global scope
// is being set to the colors.pop() value, which is blue. The function also returns
// the colors array reference to the newColors variable declaration, setting the 
// newColors array reference to that of colors. In the addColor function call,
// the color value, which is now 'blue', is appended to the colors array, which 
// mutates the same array referenced by newColors. Thus, console.log(newColors) will
// return the same value as the original colors.

