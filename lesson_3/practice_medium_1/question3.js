// Alan wrote the following function, which was intended to return all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

/* 
Alyssa noticed that this code would fail when the input is 0 or a negative number, 
and asked Alan to change the loop. How can he make this work without using a do/while loop? 
Note that we're not looking to find the factors for 0 or negative numbers, but we want to 
handle it gracefully instead of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?
*/

/* 
Explaining the code to myself briefly - the above code is basically taking a number, decrementing that number by
1 and checking if the next number down is a factor, looping, and doing it until the number = 0. This causes a couple
problems. The first problem is that, if the number is negative, it causes and infinite loop. This will also
happen if the number is equal to 0, as it will decrement. 
*/

function factors2(number) {
  // insert guard clause
  if (number <= 0) {
    return "Error: Please enter a number greater than 0.";
  }

  let factors = [];

  // use a for loop
  for (i = number; i > 0; i--) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(factors2(10)); // [10, 5, 2, 1]
console.log(factors2(4)); // [4, 2, 1]
console.log(factors2(0)); // Error: Please enter a number greater than 0.
console.log(factors2(-10)); // Error: Please enter a number greater than 0.

// Bonus: What is the purpose of number % divisor === 0 in that code?

/* The % operator is the modulo operator, which evaluates to the remainder of the left operand divided by 
the right. If the remainder is 0, then that means the divisor is a factor of number. */

// Lets check Launch School's solution.

function factors3(number) {
  let factors = [];
  let divisor = number;
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1
  }
  return factors;
}

console.log(factors3(10)); // [10, 5, 2, 1]
console.log(factors3(4)); // [4, 2, 1]
console.log(factors3(0)); // []
console.log(factors3(-10)); // []

// Ahh. LS solution simply checks, in a while loop, if the divisor is greater than 0. If it is 0 or a negative
// number, the loop just doesn't run and returns an empty set. This is a lot more clever than my solution. 