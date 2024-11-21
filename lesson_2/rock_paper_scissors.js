const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice == "paper")
  ) {
    prompt("You win!");
  } else if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "rock")
  ) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice)

  prompt('Do you want to play again y/n?')
  let answer = readline.question().toLowerCase();
  while(answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".')
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}

// Things to consider:

// 1. The function displayWinner still works, because its hoisted to the top of the program
// 2. You would need to console.log the prompt function if it returned a string.
// 3. You could simply subtract one from the valid_choices.length if you used 
// Math.ceil(). For Math.Round()... hmmm. Subtracting 1 in that case would not work. 
// Actually, no, it still could work. That way you're guaranteeing its between 0 and 
// the length. 
// 4. Yeah, this is easy: Just set a return value "isTrue" and set it equal to true if 
// the user answers y and false if they answer no. Make that the halting condition for 
// the for loop. This avoids the break. 