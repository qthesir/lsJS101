// What will the following code log to the console and why? 


let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);

// ['red', 'green', 'blue', 'purple', 'pink']. The first function call and newColors
// declaration is setting newColors equal to the reference of the original colors array,
// since colors was passed by reference and returned the same reference. When newColors 
// is passed into the second call of updateColors, this was also a pass by reference,
// and the same object is mutated by the .push method. 