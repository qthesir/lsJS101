// Write a function that will take a short line of text, and write it to
// the console log within a box.

/* 
PEDAC

Problem

Input:
  String value
Output:
   String value inside of a box in the console

Assumptions
1. The box will look like this: 
+--+
|  |
|  |
|  |
+--+
2. The box will expand and contract depending on the length of the string
3. The string value cannot be longer than what will fit in the browser window.
4. If the string value is longer than what will fit in the browser window, this is an invalid
value.
5. The box will have exactly one space character (padding) between the left and right 
borders and the string passed in as an argument, like so: 
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

Mental model:
The program will declare a function called logInBox that accepts a string value as an
argument. The function will first create each of the 5 lines necessary to construct the box
based on the length of the string value, the first of which is the top border of the box, 
the second the space above the statement, the third the statement itself, 
the fourth the space below the statement, and the fifth the bottom border. Then, each
piece of the box will be logged to the console with a console.log statement. 

Examples / Test Cases:

Input:
  To boldly go where no one has gone before.
Ouput:
  +--------------------------------------------+
   |                                            |
  | To boldly go where no one has gone before. |
  |                                            |
  +--------------------------------------------+

Input: 
  ""
Output:
  +--+
  |  |
  |  |
  |  |
  +--+

Data Structures:

The function will accept a string value as an argument and log a string value to the console.

Algorithm

1. Declare the function logInBox which defines str as a parameter
2. Declare a variable strLength and assign it to the length of the string
3. Set the top/bottom border as "+" + ("-" * strLength + 2) + "+"
4. Set the middle borders as "|" + (" " * strLength + 2) + "|"
5. Set the text line as "|" + " " + str + " " + |
6. Construct the box and log to the console

*/

// Code with intent

function printBox(outerBorders, innerBorders, textLine) {
  console.log(outerBorders);
  console.log(innerBorders);
  console.log(textLine);
  console.log(innerBorders);
  console.log(outerBorders);
}

function logInBox(str, maxWidth = Infinity) {
  if (str.length > maxWidth) {
    str = str.substring(0, maxWidth);
  }
  let outerBorders = "+" + "-".repeat(str.length + 2) + "+";
  let innerBorders = "|" + " ".repeat(str.length + 2) + "|";
  let textLine = "| " + str + " |";

  printBox(outerBorders, innerBorders, textLine);
}

logInBox("To boldly go where no one has gone before.");
logInBox("");

// Reflection: The solution used string interpolation, rather than straightforward
// operator concatenation. Suppose it doesn't matter.

// Create a function that wraps messages that are too long to fit on the screen:

/* 
Running through the thought process here: What basically needs to happen, is that the str
needs to be broken down into individual bite size statements. The size of the statement 
is the maximum width, set by the parameter maxWidth. You then need to add these bite size 
statements to an array.

When the box is printed, instead of printing one line for the center text, you need a loop
that prints each element in the array you've created. This will wrap the text.

Pseudocode:

1. Declare the function logInBox which defines str as a parameter
2. Check if the the length exceeds the max width
  If the length does exceed the max width, 
3. Set the top/bottom border as "+" + ("-" * strLength + 2) + "+"
4. Set the middle borders as "|" + (" " * strLength + 2) + "|"
5. Set the text line as "|" + " " + str + " " + |
6. Construct the box and log to the console

*/

function printBox2(outerBorders, innerBorders, array, width) {
  console.log(outerBorders);
  console.log(innerBorders);

  // Log each substring
  for (i = 0; i < array.length - 1; i++) {
    console.log("| " + array[i] + " |");
  }

  // Dealing with the remainder
  console.log(
    "| " +
      array[array.length - 1] +
      " ".repeat(width - array[array.length - 1].length) +
      " |"
  );

  console.log(innerBorders);
  console.log(outerBorders);
}

function logInBox2(str, maxWidth = Infinity) {

  // Create an array of the string in maxWidth size pieces
  let strArray = [];
  if (str.length > maxWidth) {
    let remainder = str.length % maxWidth;
    let numIters = (str.length - remainder) / maxWidth;

    // Create substrings of length maxWidth and add them to the array
    for (i = 0; i < numIters; i++) {
      strArray.push(str.substring(i * maxWidth, i * maxWidth + maxWidth));
    }

    // Add any remaining strings to the array after all maxWidth size strings 
    // have been added.
    if (remainder > 0) {
      strArray.push(str.substring(str.length - remainder, str.length));
    }
  } else {

    // If the string is less than the maxWidth, set maxWidth equal to the string.
    strArray.push(str);
    maxWidth = str.length;
  }

  let outerBorders = "+" + "-".repeat(maxWidth + 2) + "+";
  let innerBorders = "|" + " ".repeat(maxWidth + 2) + "|";

  printBox2(outerBorders, innerBorders, strArray, maxWidth);
}

let testStr =
  "To boldly go where no one has gone before. Lorem ipsum this is another test with greater length."; // length = 42
let testMaxWidth = 50;
logInBox2(testStr, testMaxWidth);
logInBox2(testStr);
logInBox2("");

// Setting the box size beforehand actually significantly simplifies this problem.
// My box adjusts depending on how long the sentance is if its under the width. 
// It does not set a box size and then wrap. This is why PEDAC is important! Missing 
// assumptions and all that. I literally totally ignored that requirement.