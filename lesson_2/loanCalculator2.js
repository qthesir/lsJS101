/*
Build a Mortgage / Car Loan Calculator

You'll need three pieces of information:

- the loan amount
- the Annual Percentage Rate (APR)
- the loan duration

From the above, you'll need to calculate the following two things:

- monthly interest rate (APR / 12)
- loan duration in months
You can use the following formula:

M = P (J / (1 - (1+J)^-N))

Translated to javascript, the formula looks like this: 

*/

// let m = p * (j / (1 - Math.pow(1 + j, -n)));
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

/*
When you write your program, don't use the single-letter variables m, p, j, and n; use explicit names. For instance, you may want to use loanAmount instead of p.

Try to print the payment amount as a dollar and cents amount, e.g., $123.45 or $371.00.

Finally, don't forget to run your code through ESLint. Also, consider asking for a code review after you've reviewed your code against the possible solution, and made any adjustments that you need to make.
*/

/*
PEDAC

Problem

Input:
  - Loan Amount
  - APR
  - Loan Duration
Output:
  - Monthly Payment

Assumptions
1. The loan calculator could take loan amount in years
2. APR will be taken in percentage terms. 
3. The loan amount will be taken in dollars and cents format.
4. The output will print to the console. 
5. User inputs are required for the first 3 inputs. That is, there will need to be a component of the 
program that allows a user to enter the 3 inputs.
6. Payments compound monthly. This is implicit via the formula taking in a monthly duration as an input.
If you put in, say, years in the formula, this would be a yearly compound, or weeks, where this would be
a weekly compound. 
7. Going to be edge cases for $0 loans, 0% loans, and loan durations in between 1 year and several months.
8. The function will only accept numerical values greater than 0 

Questions
1. Is the interest payment compound monthly or compound yearly? 
2. Does the given formula require an integer or a decimal? I'm going to assume a decimal. 

Mental Model
The program will prompt the user to enter the loan amount, apr, and loan duration. The program will then convert the loan 
duration, if entered in years, to months, and the APR into the monthly interest rate. Then, from the loan amount, monthly 
interest rate, and loan duration in months, the program will calculate the monthly payment, which will be returned to the 
user in the console in Currency Format (e.g. $100.15). 

Examples / Test Cases

Input:
  Loan amount: $1000 
  Loan APR: 10%
  Loan Duration: 1 year
Output:
  Monthly Payment: 86.07

Input:
  Loan amount: $1000
  Loan APR: 0%
  Loan Duration: 1 year
Output:
  Monthly Payment: $83.33333

Input:
  Loan amount: $0
  Loan APR: 10%
  Loan Duration: 1 year
Output:
  Monthly Payment: $0

Input:
  Loan amount: $0
  Loan APR: 0%
  Loan Duration: 1 year
Output:
  Monthly Payment: $0

Data Structure
The program will accept 3 numerical inputs and output a string, which is constructed by transforming the numerical output 
into currency format. 

Algorithm 
1. Prompt the user to enter three inputs:
  1. loanAmount
  2. apr (in percentage terms)
  3. loanDuration (in years)
2. Convert apr to monthlyApr: monthlyApr = (apr / 12) / 100
3. Convert loanDuration to months from years and set to loanDurationMonths
4. Calculate the monthly payment: 
monthlyPayment = loanAmount * (monthlyApr / (1 - Math.pow((1 + monthlyApr), (-loanDurationMonths))));
5. Return monthlyPayment from number format to currency format

*/

// Code with intent

const readline = require("readline-sync");

function loanCalculator() {
  // Prompt the user for three inputs
  [loanAmount, apr, loanDuration] = getUserInputs();

  // convert to monthly values
  let monthlyApr = apr / 12 / 100;
  let loanDurationMonths = loanDuration * 12;

  // Calculate monthly payments
  let monthlyPayment = getMonthlyPayment(
    loanAmount,
    monthlyApr,
    loanDurationMonths
  );

  // return monthlyPayment to user
  console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
}

function getUserInputs() {
  let loanAmount = Number(
    readline.question("Enter the loan amount in dollars: ")
  );

  while (isInvalidInput(loanAmount)) {
    loanAmount = Number(
      readline.question(
        "Invalid input. Please enter a number greater than or equal to 0:  "
      ) 
    );
  }

  let apr = Number(
    readline.question(
      'Enter apr in percentage terms (e.g. enter "10" for 10%): '
    )
  );
  while (isInvalidInput(apr)) {
    apr = Number(
      readline.question(
        "Invalid input. Please enter a number greater than or equal to 0:  "
      )
    );
  }

  let loanDuration = Number(
    readline.question("Enter the duration of your loan in years: ")
  );
  while (isInvalidInput(loanDuration)) {
    loanDuration = Number(
      readline.question(
        "Invalid input. Please enter a number greater than or equal to 0:  "
      )
    );
  }

  return [loanAmount, apr, loanDuration];
}

function isInvalidInput(userEntry) {
  console.log(String(userEntry) === "NaN" || userEntry < 0);
  return String(userEntry) === "NaN" || userEntry < 0;
}

function getMonthlyPayment(loanAmount, monthlyApr, loanDurationMonths) {
  if (loanAmount === 0 && loanDuration === 0) {
    return 0;
  } else if (monthlyApr === 0) {
    return loanAmount / loanDurationMonths;
  } else {
    return (
      loanAmount *
      (monthlyApr / (1 - Math.pow(1 + monthlyApr, -loanDurationMonths)))
    );
  }
}

while (true) {
  loanCalculator();
  let answer = readline.question("Would you like to calculate another value?");
  if (answer[0] === "n") {
    break;
  }
}

/*
Notes
- Should I convert APR to decimals first or... ?

I could also consider running the while loop with its own function. This would modularize the program
quite a bit. I could also create functions for obtaining the values, converting to the monthly values, 
and also to calculate the monthly payments, which would make the program pretty succinct. Easier to read
and follow along. 

The other benefit to creating individual functions like that is that the individual functions can be 
tested independently. For example, I could put dummy data into the calculatePayment function and test just that
function to see if I get what I expect, as opposed to running the entire program independently. 

Noticing the advantage of separating concerns by splitting up the functions... By splitting up "getMonthlyPayment" 
into a separate function, I'm actually able to handle the edge cases associated with that calculation much more easily.
I.e., with the 0% apr problem, this makes it much easier to compartmentalize, and doesn't clutter up the main 
function. Even though it seemed kind of redundent to do it inititially, it is definitely a good practice, because
when the program gets more complicated, that breakdown is really important. 

Also, dealing with invalid inputs edge cases. Forgot about that! 

Can also see why you would do this for invalid input. Having the code separate / modularized for the 
invalidInput function will make it much easier to add / change details related to that specific objective. 

Literally makes the code so much more maintainable to modularize like that. 

What other edge cases can I think of here? I mean, there is really large numbers, potentially. Numbers and
characters, but this takes care of that. There is the 0 / 0 case, where everything is 0, because you end up with 
0 / 0. I mean what you'd prefer as an output, in that case, is 0, as opposed to NaN. 

You also don't want functions to do more than one thing. This is why. Or at least, the maintainability reason is why. 
If I were to, say, also wrap the output in a $0.00 format in my getmonthly payment, then I'd have to make changes
to a bunch of lines of the code. Same thing. 

Should also defo do a code review. 
*/
