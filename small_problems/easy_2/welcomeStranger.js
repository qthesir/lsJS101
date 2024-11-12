/* Create a function that takes 2 arguments, an array and an object. The array will 
contain 2 or more elements that, when combined with adjoining spaces, will produce a 
person's name. The object will contain two keys, "title" and "occupation", and the 
appropriate values. Your function should return a greeting that uses the person's full 
name, and mentions the person's title.
*/

/*
PEDAC

Problem

Input:
  An array of two or more elements that produce a persons name
  An object that contains two keys, title and occupation.
Output:
  "Hello (name)! Nice to have a (title) (occupation) around!"
Side Effects:
  None

Implicit and Core Assumptions
1. The array must have at least two elements
2. The elements in the array are all string values
3. The values of title and occupation keys are string values
4. The program is logging the output to the console.
5. The object must include the keys title and occupation. No other object format should be accepted
6. Per the example, the logged value is also going to include the persons occupation.
This is not mentioned explicitly in the problem statement.
7. The input array contains no nested arrays

Mental Model
A function "greetings" will take an array of length greater than two, and an object with
two keys: title and occupation. The array elements will be combined into a single string 
value, separated by spaces. The resulting string value, plus the title and occupation value 
from the object, will be returned to the user interpolated into a sentance. 

Examples/Test Cases

Input: 
  ['John', 'Q', 'Doe']
  { title: 'Master', occupation: 'Plumber'}
Output: 
  Hello, John Q Doe! Nice to have a Master Plumber around.

Input: 
  ['Aston', 'Martin']
  {title: 'Journeyman', occupation: 'electrician}
Output: 
  Hello, Aston Martin! Nice to have a Journeyman Electrician around. 

Data Structure
The program will accept an array of two or more elements, and an object with the keys 
title and occupation. Both will only contain string values with no nested objects or 
arrays.

Algorithm 
1. Declare a function named "greetings" that accepts two arguments, nameArray and 
occupationObj
2. Declare a variable nameString. 
3. Concatenate nameArray to a single string separated 
by 1 space and set it to nameString.
4. Use spring interpolation to return nameString and occupationObj.title and 
occupationObj.occupation in the format:
"Hello, ${nameArray}! Nice to have a ${occupationObj.title} and ${occupationObj.occupation
  around."

*/

// Code

function greetings(nameArray, occupationObj) {
  let nameString;
  nameString = nameArray.join(" ");
  return `Hello, ${nameString}! Nice to have a ${occupationObj.title} ${
    occupationObj.occupation
  } around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
