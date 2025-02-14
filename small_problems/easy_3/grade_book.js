/*
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Examples:
*/

// getGrade(95, 90, 93); // "A"
// getGrade(50, 50, 95); // "D"

/*
PEDAC

Input
  Three scores / grades between 0 and 100
Output
  Letter grade of the mean of the score passed in

Assumptions
1. The score passed into the function is a valid grade on a scale of 1 - 100.
2. Grades cannot be over 100 (i.e. from extra credit or curved test scores)

Mental Model
The program gradeBook will take three grade scores between 1 - 100. It will then calculate the average of those scores. Once the average 
is obtained, the program will determine which grade the average score is associated with. It will then return the grade to the user.

Example / test cases

Input:
  95, 90, 93
Output: 
  A

Input:
  50, 50, 95
Output:
  D

Data Type
The program will accept 3 integers (number types) and output a string (letter grade)

Algorithm
1. Declare a function called gradeBook that defines 3 parameters, grade1, grade2, and grade3.
2. SET averageGrade = (grade1 + grade2 + grade3) / 3
3. If avgGrade >= 90:
    return "A"
  else If avgGrade >= 80:
    Return "B"
  else If avgGrade >= 70
    Return "C"
  else If avgGrade >= 60
    Return "D"
  else:
    Return "F"

*/

// Code with intent

function getGrade(grade1, grade2, grade3) {
  let avgGrade = (grade1 + grade2 + grade3) / 3;

  if (avgGrade >= 90) {
    return "A";
  } else if (avgGrade >= 80) {
    return "B";
  } else if (avgGrade >= 70) {
    return "C";
  } else if (avgGrade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93)); // Expected: "A"
console.log(getGrade(50, 50, 95)); // Expected: "D"

/* 
As I'm thinking through this, I am imagining that one could create a list of grades, with each letter grade in the dict having a 
reference to a range that would apply to that grade. That may make it more modular, if the letter grades were to be used by 
multiple functions.

Man... I've forgotten quite a lot. It's been about 3 weeks I think since I've been obsessing over the posture stuff. Since I've been
obsessing over my nose. Since New Years I think I haven't really put a concentrated effort into this material. That isn't ideal. 

If I can't do this, then what can I do? 
*/

// Lets try for any arbritrary number of grades:

function getGrade2(...scores) {
  let avgGrade =
    scores.reduce((acc, cv) => {
      return acc + cv;
    }) / scores.length;
  switch (true) {
    case avgGrade < 60:
      return "F";
    case avgGrade < 70:
      return "D";
    case avgGrade < 80:
      return "C";
    case avgGrade < 90:
      return "B";
    default:
      return "A";
  }
}

console.log(getGrade2(95, 90, 93, 50)); // Expected: "B"
console.log(getGrade2(50, 50, 95)); // Expected: "D"

// the ...scores is what's called a "rest parameter". This basically acculumates all the arguments pass into the function as an
// array, so you manipulate the "score" variable (in this case) within the function as an array variable.
