const readline = require("readline-sync");
const outcomeMatrix = require("rps_outcomes.json");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function pickWinner(choice, computerChoice) {
  // Returns "Player", "Computer", or "Tie" depending on the outcome

  if (
    (choice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (choice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (choice === "lizard" &&
      (computerChoice === "spock" || computerChoice === "paper")) ||
    (choice === "spock" &&
      (computerChoice === "scissors" || computerChoice === "rock"))
  ) {
    return "Player";
  } else if (
    (choice === "rock" &&
      (computerChoice === "paper" || computerChoice === "spock")) ||
    (choice === "paper" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (choice === "scissors" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "lizard" &&
      (computerChoice === "rock" || computerChoice === "scissors")) ||
    (choice === "spock" &&
      (computerChoice === "paper" || computerChoice === "lizard"))
  ) {
    return "Computer";
  } else {
    return "Tie";
  }
}

while (true) {
  let score = 0;
  let computerScore = 0;

  prompt("The first to win 3 games wins the round!");

  while (score < 3 && computerScore < 3) {
    prompt("Current score:");
    prompt(`You: ${score}, Computer: ${computerScore}`);

    prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    let winner = pickWinner(choice, computerChoice);

    switch (winner) {
      case "Player":
        prompt("You win!");
        score += 1;
        break;
      case "Computer":
        prompt("Computer wins!");
        computerScore += 1;
        break;
      case "Tie":
        prompt("It's a tie!");
        break;
    }

    prompt("-------------------------------------------");
  }

  prompt("Final Score:");
  prompt(`You: ${score}, computer: ${computerScore}`);

  if (score > computerScore) {
    prompt("Congratulations! You're the grand winner.");
  } else {
    prompt("Bummer! The computer is the grand winner.");
  }

  prompt("Do you want to play again y/n?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") break;
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

/*
RPS Bonus features question 3 pseudocode:

1. Declare score and computerScore variables. Set both variables to 0.
2. For each game played:
  If player wins:
    Increment score by 1
  If Computer wins:
    Increment computerScore by 2
3. If score === 3:
    display "You are the grand winner!"
    break
4. If computerScore === 3:
    display "Computer is the grand winner!"
    break

Questions:
1. How do we want to deal with playing again? I think that we should define each game
as a tournament, and then ask the user if they want to play again after the tournament
is over. This means that each game loop will be nested in the tournament loop. The
outer tournament loop is where the score and computerScore variables will be declared,
and where the final score is displayed.
2. It also looks like I have to reconstruct the displayWinner functionality. Or at least,
I have to abstract the conditional logic of who won the game, because I'm going to need it
to add a score.
3. What do you do for a tie? Ties don't count. Basically need to play again, no one
gets score, just like in the real game.

*/

// Do a code review!
