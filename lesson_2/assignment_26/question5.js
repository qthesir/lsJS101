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

/* In this code snippet, the variable color is declared and initialized to the string 
value "purple" on line 3, and the variable "colors" is declared and initialized to the
array object with 3 string values "red", "green", and "blue". Line 6 through 9 define 
the function addColors, with parameters colors and color. In the function, the 
array method .push is applied to colors and adds the value color to the variable colors, 
and then returns the array. On line 11, the function removeColor is defined with the 
parameter colors. The variable color is set to the value returned by the .pop array 
method applied to the value of colors, and returns the value of colors.

On line 16, the variable newColors is declared and initialized to the value returned by
invoking the removeColor function with the argument colors. When removeColor is called, 
last value of the  colors array, 'blue', is then removed, and the function returns the array with only 
two remaining colors. As a side effect, the removeColor function also sets the color 
variable in the global scope to "blue," and, since the array is passed by reference,
the reference of newColors will be the same as colors, and the colors array will also have
the value "blue" removed from it.

On line 17, the function addColor is invoked by passing the variables colors and color 
as arguments. The addcolor function will add the value of color, now set to "blue",
to the colors array, as a side effect, and return the value colors. Since the colors
variable and the newColors array reference the same object in memory, when newColors is
logged to the console on line 18, it will be logged ['red', 'green', 'blue'].

This example demonstrates several concepts. It demonstrates the concept that variables
in an outer scope can be referenced in the inner scope, as with the color variable in removeColor. 
It shows the impacting of passing by reference. It shows how functions can have side 
effects, and how objects declared in an inner scope will shadow the variables in the 
outer scope. It also demonstrates the concept of variables as pointers, with the variables
newColors and colors pointing to the same object in memory. 

*/