// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides 
// each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have 
// one end at the lower-left of the triangle, and the other end at the upper-right.

/* 
PEDAC

Problem

Input:
  Positive integer (5)
Output:
Right triangle whose sides have n stars.
    *
   **
  ***
 ****
*****

Assumptions

1. The right most star will always be separated from the left most border of the log by n - 1 white spaces.
2. Does the above actually matter? Based on the stated requirements, the output could be as many whitespaces away 
from the border of the log as we want, as long as the hypotenuse has one end in the lower left, and one end in the 
upper right. So this depends on whether or not your going based off of the given test cases.
3. The output is meant to be in the shape of a right triangle, meaning, that the right-most stars should all be in
the same output column. 
4. Each set of stars is going to require a new line.
5. The adjacent and opposite sides of the triangle will be n stars in length, but the size of the space between each
of the stars will differ depending on the size of the whitespace in the output log. 

Mental Model
The program accepts a positive integer as an argument. It will then run a loop that iterates the same number of times
as the argument integer. For each iteration, the program will print a string that is of length equal to the argument
with the number of stars in each string being equal to the current iteration. The program then terminates, the right 
triangle printed in the output log. 

Examples / Test Cases

Input:
  5
Output:
    *
   **
  ***
 ****
*****

Data Structure

The program will take a number type integer as an input and output a series of strings to the console.

Algorithm

1. Delcare a function rightTriangle that defines "num" as a parameter 
2. Declare an array with "num - 1" single spaced whitespaces, with the last slot (num - 1) a "*" character
2. Declare the variable i and set it to num
3. While i >= 0 :
  console.log(arr.join())
  array[i - 2] = '*'
  i--

Notes
What we could do, then, is print a statement with strings of length n, adding 1 star, starting with a base case of 
1 star, to each successive print statement. 

Could also solve the problem by looping through it backwards. You declare an array variable with a star in the num - 1 slot, or the last
slot. Iterate for the same number of times as num, logging a concat of the array on the first line, and then adding a star in the second one.
*/

// Code with intent

function rightTriangle(num) {
  let array = [..." ".repeat(num)]
  array[num - 1] = '*'
  let i = num
  while (i > 0) {
    console.log(array.join(""))
    array[i - 2] = "*"
    i--
  }
}

rightTriangle(5)

rightTriangle(9)
