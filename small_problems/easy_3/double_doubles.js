/* 
A double number is an even-length number whose left-side digits are exactly the same as 
its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 
444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument 
is a double number; otherwise, return the double number as-is.

*/

// Examples

twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676

/*

PEDAC

Input
  Number > 0
Output
  If the input is a double number, return the input. If not, return the input * 2. 

Implicit Assumptions
1. The function only accepts numbers greater than or equal to 0
2. A number can only be a double number if the number of digits are even, as only even numbers will have numbers on both sides.
3. If the input is a double number, it will not be multiplied by two. The function will simply return the input
4. The order of the digits on the double numbers matters. For example, a mirror image, like 334 and 443, would not be applicable.
5. Per the above, the value of the number on each side of the double number has to be equal. 7667 contains the same digits,
but its value would not be equal.

Mental Model 
The program will accept a single integer greater than 0 as an input. It will then check whether the number is a double number, where a double 
number is defined as an even-length number whose left-side digits are the same as its right side digits (i.e. the value of the two sides 
are equal). If the number is a double number, the program will return the input. If it is not a double number, the program will return the 
input multiplied by two.

Data Structures 
The program will take a number type as an input and output a number type.

Algorithm 
1. Define a function named "twice" that sets "int" as a parameter. 
2. Check that int is an integer and greater than 0. If not, return an error.
3. If the number of digits in int is not even,
    return int
   else:
    turn int into an array
    split the array into two arrays by the centermost index
    concatenate the arrays and transform to a num type
    if the values of the two pieces are equal:
      return int * 2
    else: 
      return int 


Notes
Start with the least common case....

*/

// Code with intent

function twice(int) {
  // Guard clause
  if (!(int > 0 && Number.isInteger(int))) {
    console.log("Please enter an intenger greater than 0");
  }

  if (isDoubleNumber(int)) {
    return int;
  } else {
    return int * 2;
  }
}

function isDoubleNumber(int) {
  if (int.toString().length % 2 !== 0) {
    return false;
  } else {
    let intArr = int.toString().split("");
    let arrLeft = intArr.splice(0, intArr.length / 2);
    let arrRight = intArr;

    if (Number(arrLeft.join("")) === Number(arrRight.join(""))) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676

/* 
Reflection:
First, the solution separated the check for a double number into a seperate function. 
I like this a lot, should have done it myself, going to change my own function to account
for this. 

Done. Also, the logic in the solution is a bit different than mine. Much more 
elegant. What I did, that made my logic a bit more clunky, was that I first checked to
see if the number of digits in the number was even. If it was not, I would discard it.
I suppose I could have simply done math.floor(intArr.length) / 2 instead of 
intArr.length / 2 to avoid that. Then I wouldnt need the check at all. 

In addition, I used slice instead of substring to create the two arrays. In hindsite,
the mutating function was space-saving, but it was less clear to the reader, which probably
matters a great deal more than a small amount of additional code. In fact, I even deliberately
made arrRight equal to intArr (even though it was a sliced version, ready to go) to make
it clear to the reader, so I may as well have just done the damn substring. 

Finally, instead of returnign true or false, the solution returned leftNumber === rightNumber,
which avoids the additional if statement. 
*/
