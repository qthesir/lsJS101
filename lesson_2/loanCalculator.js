// Build a mortgage / car loan calculator

/*
PEDAC
Input:
  Loan amount: the total loan amount outstanding as a number
  APR: the annual percentage rate on the loan, expressed as a whole number
  The loan duration in years or months: The amount of time, in years, that the loan needs to
  be repaid by
Output:
  Monthly payment: The dollar amount the user will need to pay each month based on the
  inputs

Important and Implicit Requirements
1. Loan duration is going to be expressed in months, since it compounds monthly, and thus
will need to be converted from years to months if the user provides months
2. APR is expressed as an annual percentage, and will thus need to be converted to monthly
interest rate by dividing by 12
3. The loan amount, annual percentage rate, and loan duration will be entered by the user
4. The formula for calculating the monthly payment is M = P * ( J / ( 1 - ( 1 + J ) ^ -N) )
5. Print the monthly payment amount in dollars
6. When printing the monthly payment amount, some text will be included ("The payment amount
is...")
7. The output will be rounded to the nearest two decimal places (in dollars and cents)
8. APR will be accepted in percentage terms.
9. When the interest rate is 0, use a different formula.

Questions
1. How can you support no interest loans?
2. What is the formula expecting? Is it expecting the APR in decimal or percentage terms?
Likely decimal.
3. What is the formula for 0 interest loans? Just the loan amount divided by the # of
months.

Edge cases
1. No interest loans
2. Loans that are not expressed in integer years, but rather in months
3. Loans that are expressed in hours or days; durations less than a month.
4. Loans with variable interest rates
5. Different compounding periods
6. Different payback periods
7. Interest rates over 100%
8. User selects 0 for all 3 inputs

Mental Model
Ask the user to provide the loan amount, APR, and loan duration in years or months. Then, if
APR is greater than 0, convert APR and loan duration to monthly values. If the loan
duration is in years, convert it to months. Calculate the monthly payment by plugging in
the loan amount, APR, and loan duration to the formula. Return the monthly payment to the
user in the console.

Examples / Test Cases

Input:
  Loan amount: $1000
  Loan APR: 5%
  Loan duration: 12 months
Output:
  Monthly payment: $85.61

Input:
  Loan Amount: $1000
  Loan APR: 110%
  Loan duration: 12 months
Output:
  Monthly payment: $140.83

Input:
  Loan Amount: $1000
  Loan APR: 1000
  Loan duration: 12 months
Output:
  Monthly payment: $833.91

Input:
  Loan amount: $1000
  Loan APR: 0
  Loan duration: 12 months
Output:
  Monthly Payment: 83.33

Input:
  Loan amount: 0
  APR: 5%
  Loan duration: 12 months
Output:
  Monthly payment: 0

Input: 
  Loan amount: 0
  APR: 0
  Loan duration: 0
Output: 
  Monthly payment: 0

Data Structure
The user will enter the information as floating point numbers, and the output will also
be a floating point number.

Algorithm
1. Request the user enter the loan amount as loan Amount. They should enter a number.
2. Request the user enter the APR as APR, in percentage terms.
3. Ask whether the user wants to enter loan duration in months or years
4.    Declare variable loanDuration. If months, ask the user to enter in months. If years,
      ask the user to enter in years.
5. If the user selected years:
6.    loanDuration = loanDuration * 12
7. Declare the variable monthlyPayment
8. If loanAmount, APR, and loanDuration all = 0
9.    monthlyPayment = 0
10. else If APR is equal to 0:
11.    Calculate monthlyPayment as loanAmount / loanDuration
12. else: 
13.   Declare a variable called monthlyInterest and set it equal to (APR / 12) / 100
14.   With loanAmount, monthlyInterest, and loanDuration, calculate the monthly payment
15. Log the monthly payment to the console in dollar terms, rounded to 2 decimals.

*/

// Code

const readline = require("readline-sync");

// Helper function to calculate monthly payment
function calculatePayment(loanAmount, monthlyInterest, loanDuration) {
  let monthlyPayment =
    loanAmount *
    (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -loanDuration)));
  return monthlyPayment;
}

// Helper function to determine whether a numerical input is valid
function isInvalidInput(input) {
  return (
    String(Number(input)) === "NaN" || input.trim() === "" || Number(input) < 0
  ); // This does not work for 0, and I want to accept 0 as a value for APR, loan amount, and loan duration.
}

function message(message) {
  return readline.question(`=> ${message}`);
}

console.log("Welcome to the loan monthly payment calculator!");

while (true) {
  console.log("----------------------------------");

  // Acquire user inputs for loanAmount, APR, and loanDuration
  let loanAmount = message("Enter the total loan amount: ");
  while (isInvalidInput(loanAmount)) {
    loanAmount = message(
      "Invalid input. Enter a numerical value greater than 0: "
    );
  }
  let APR = message(
    "Enter the Annual Percentage Rate of the loan in percentage terms. For example, 5 for 5%: "
  );
  while (isInvalidInput(APR)) {
    APR = message("Invalid input. Enter a numerical value greater than 0: ");
  }
  let userChoice = message(
    "Would you like to enter the loan duration in months or years? Type 'm' for months and 'y' for years: "
  );
  while (!["m", "y"].includes(userChoice)) {
    userChoice = message(
      "Invalid input. Enter either 'm' for months or 'y' for years: "
    );
  }
  let loanDuration;
  if (userChoice === "y") {
    loanDuration = message("Enter the loan duration in years: ");
    while (isInvalidInput(loanDuration)) {
      loanDuration = message(
        "Invalid Input. Enter a numerical value greater than 0: "
      );
    }
    loanDuration = Number(loanDuration) * 12;
  } else if (userChoice === "m") {
    loanDuration = message("Enter the loan duration in months: ");
    while (isInvalidInput(loanDuration)) {
      loanDuration = message("Invalid Input. Enter a numerical value: ");
    }
  } else {
    console.log("Something went wrong.");
  }

  // Calculate the monthly payment
  let monthlyPayment;
  let monthlyInterest;

  // Dealing with edge cases
  if (
    Number(APR) === 0 &&
    Number(loanAmount) === 0 &&
    Number(loanDuration) === 0
  ) {
    monthlyPayment = 0;
  } else if (APR === "0") {
    monthlyPayment = Number(loanAmount) / Number(loanDuration);
  } else {
    monthlyInterest = APR / 12 / 100;
    monthlyPayment = calculatePayment(
      Number(loanAmount),
      Number(monthlyInterest),
      Number(loanDuration)
    );
  }

  console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  // Ask the user if they want to repeat the calculator
  let doAgain = message(
    'Would you like to calculate another loan? Enter "y" for yes: '
  );

  if (doAgain !== "y") break;
}

// Reflection: As I learned with checking the loan calculation edge cases, always put the least common case
// first. This simplifies the if statements. Otherwise, I would be nesting if statements. I also liked the
// Solution's tactic of putting messages on multiple lines. This both allows the code to look a lot cleaner,
// and also is easier for the user to understand.

// In addition, the tactic of using prompt, prompt, and then readline.question without a message is also a lot
// cleaner and more readable. This is as opposed to insering a \n in readline.question for a new line.
// Need to remember, also, that the prompt is not built-in. It is a function defined in the solution,
// that adds an '=>' character in console.log().

// The solution also used Number.isNan(number) to check if the user input wasn't a number. I could have done this,
// but instead used the more manual method of coercing it to a string and comparing it to the string value 'NaN'.

// You can also put the break right after the if statement since it is a simple, one line expression. I made this 
// change. 

// The "Do again" function in the answer key also only takes the first character of the response, yes, and forces
// it to lower case. This accounts for the instances where the user enters yes or y. In my case, I explicitly 
// told the user what to enter. I think this is better honestly. To make it explicit what is expected. 
