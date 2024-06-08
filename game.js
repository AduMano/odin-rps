const playGame = () => {
    // Init Variables
    let humanScore = 0;
    let computerScore = 0;

    // Init Functions
    const getHumanChoice = () => {
        // Get Human Choice
        while (true) {
            const getHumanChoice = prompt("Choose: \n - Rock \n - Paper \n - Scissor").toLowerCase();
            if (
                    (getHumanChoice === "rock") || 
                    (getHumanChoice === "paper") || 
                    (getHumanChoice === "scissor")
            ) {
                return getHumanChoice;
            }
                
            console.log("Invalid. Please pick between Rock, Paper or Scissor");
        }
    }
    
    const getComputerChoice = (choices) => {
        // Math.floor() returns a whole number, reducing it to the base number
        // EX: 4.24 => 4
        // Math.random() returns a random seed number between 0 to 0.99999 but not 1.
        // EX: random() => 0.5232323
    
        // By Multiplying the random generated number to the length of choices (3),
        // we will get a float number between 0 to 2. Could be 0.25435 or 1.3234234 or 2.12323.
        // Using Math.floor() fixes that to become a whole number and use the base digit instead.
        // Ex: 1.3234234 => 1, the 1 index of the choices is paper : [rock(0), paper(1), scissor(2)]
        const getComputerChoice = Math.floor(Math.random() * choices.length);
        return choices[getComputerChoice];
    }
    
    const computeRound = (human, computer) => {
        // Divider
        console.log("======================");

        if (human === "rock") {
            if (computer == "rock") {
                console.log("Its a tie!");
            }
            else if (computer == "paper") {
                console.log("Computer got a point!");
                computerScore++;
            }
            else {
                console.log("Player got a point!");
                humanScore++;
            }
        }
        else if (human === "paper") {
            if (computer == "rock") {
                console.log("Player got a point!");
                humanScore++;
            }
            else if (computer == "paper") {
                console.log("Its a tie!");
            }
            else {
                console.log("Computer got a point!");
                computerScore++;
            }
        }
        else {
            if (computer == "rock") {
                console.log("Computer got a point!");
                computerScore++;
            }
            else if (computer == "paper") {
                console.log("Player got a point!");
                humanScore++;
            }
            else {
                console.log("Its a tie!");
            }
        }

        // Space
        console.log("\n");
    }

    const getWinner = () => {
        // Print out the scoreboard
        console.log(`SCORE BOARD:\n - Player: ${humanScore} \n - Computer: ${computerScore}`);

        if (humanScore > computerScore) {
            console.log("Player wins the game!");
        }
        else if (computerScore > humanScore) {
            console.log("Computer wins the game!");
        }
        else {
            console.log("We have a tie! no one wins!");
        }
    }
    
    const playRound = () => {
        // Choices
        const choices = ["rock", "paper", "scissor"];

        // Get Bets
        const humanChoice = getHumanChoice();
        console.log(`You chose: ${humanChoice}`);

        const computerChoice = getComputerChoice(choices);
        console.log(`Computer chose: ${computerChoice}`);

        // Compute
        computeRound(humanChoice, computerChoice);

    }

    // Play 5 times
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    // Display Winner
    getWinner();
}

playGame();