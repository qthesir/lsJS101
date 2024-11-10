// Write a function that takes two strings as arguments, determines the length of the two
// strings, and then returns the result of concatenating the shorter string, the longer
// string, and the shorter string once again. You may assume that the strings are of
// different lengths.

// PEDAC

// Problem
// Input:
//     Two Strings of different lengths
// Output:
//     One string that is a concatenation of the shorter string, longer string, then shorter
//     string.

// Implicit Requirements
// 1. Assuming that this is written in a programming context. Arguments means arguments as
// defined in programming, concatanation means to add two strings, etc.
// 2. The function is returning the result, not logging it to the console.

// Mental Model
// Take two strings of different lengths as arguments. Determine which string is shorter.
// Add the shorter string to the longer string, and then add the shorter string to that string.
// Return the string.

// Test Cases
// Input:
//    First string: 'abc'
//    Second string: 'defgh'
// Output:
//    Concat string: "abcdefghabc"
// Input:
//    First string: ''
//    Second string: 'xyz'
// Output:
//    Concat string: 'xyz'
// Input:
//    First string: 'abcde'
//    Second string: 'fgh'
// Output:
//    Concat string: fghabcdefgh

// Data structure
// Input will be two string arghuments. Output will also be a string.

// Algorithm
// 1. Declare a function called "shortLongShort" that takes two strings, string1 and string2,
// as arguments
// 2. Declare a variable called "result"
// 3. If string1.length < string2.length:
//        result =  string1 + string2 + string1
// 4. Else:
//        result = string2 + string1 + string2
// 5. Return the result

// Code

function shortLongShort(string1, string2) {
  return string1.length < string2.length
    ? string1 + string2 + string1
    : string2 + string1 + string2;
}

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"

// Reflection: I had initially wrote this problem out comparing the two strings directly,
// rather than their lengths. I investigated this and discovered that 'fgh' > 'abcde' is
// true, which confused me. The reason for this is because, when comparing strings, javaScript
// compares each character in the string with each character in the other string sequentially.
// If it is alphanumeric, JavaScript coerces it to unicode, and f has a unicode value of 102,
// while a has a unicode value of 97. It stops the comparison at that point. If the two values
// were equal, like 'agh' > 'abcde', it would go to the next character comparison, i.e. 'b'
// and 'g', which would also evaluate to true.

// The string.length property also has an interesting characteristic: This is javascript
// temporarily coercing the string primitve to a string object when needed, allowing it to
// access the length property. Its as if both values were created using the new String() 
// function. 