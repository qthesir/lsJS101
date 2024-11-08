// Build a program that asks the user to enter the length and width of a room in meters,
// and then logs the area of the room to the console in both square meters and square feet.
// Don't worry about validating the input

// PEDAC

// Understand the problem
// Input
//    User determined number for length
//    User determined number for width
// Output
//    Number of square meters
//    Number of square feet

// Implicit assumptions
// 1. The result is being logged to the terminal console, and not some other console.
// 2. Input can be a floating point number. Does not have to be a whole integer.
// 3. The output will display the result in natural language.
// 4. There will need to be a mechanism for the user to enter the length and width of
// the room.
// 5. The two inputs are in meters, and not in square feet.
// 6. The conversion factor from meters to square feet is 10.7639
// 7. The output in meters and sq ft are both rounded to two decimal points (per the example)
// 8. Use the readline-sync prompt method, not the question method.

// Mental Model
// Ask the user to input the length of the room and width of the room in meters. Calculate
// the area of the room. Convert that value to square feet and store it as a separate value.
// Round the values to two decimals. Then, log the values to the console in a sentence.

// Example/Test Cases
// Input:
//   length: 10
//    width: 7
// Output:
//    Area of room in meters: 70
//    Area of room in sq feet: 753.47

// Input:
//    length: 0
//    width: 7
// Output:
//    Area of room in meters & sq feet: 0

// Input:
//    length: 1
//    width: 1
// Output:
//    Area of room in meters: 1
//    Area of room in sq feet: 10.7639

// Data Structure
// Input will be in a floating point number, and ouput will also be a floating point number
// wrapped in a string.

// Algorithm

// 1. Set a value "length". Request the user input a value.
// 2. Set a value "width". Request the user input a value.
// 3. Set a value "areaMeters" and set it equal to length * width. Round to 2 decimals.
// 4. Set a value "areaSqFeet" and set it equal to areaMeters * 10.7639. Round to 2 decimals
// 5. Log "The area of the room is ${areaMeters} square meters (${areaSqfeet} square feet)."

// Code

const SQ_METERS_TO_FEET = 10.7639;

const readline = require("readline-sync");

function getRoomArea() {
  console.log("Enter the length of the room in meters:");
  let length = Number(readline.prompt());
  console.log("Enter the width of the room in meters:");
  let width = Number(readline.prompt());

  let areaMeters = length * width;
  let areaSqFeet = areaMeters * SQ_METERS_TO_FEET;

  console.log(
    `The area of the room is ${areaMeters.toFixed(
      2
    )} square meters (${areaSqFeet.toFixed(2)} square feet.)`
  );
}

getRoomArea();

// Reflection: It would be a better idea to make the .toFixed adjustment in the result
// itself. This is because, if the program is ever extended and areaMeters and areaSqFeet
// are adjusted for some intermediary calculation, then it would be better for these values
// to be their original values for a higher degree of precision.

// Also... Did not know the .toFixed method returned a string. This is useful to understand.

// I have made the change to accomodate for this. I did do a good job converting the
// square meters to square feet conversion factor into a javaScript constant, though!

