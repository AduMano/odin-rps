const playGame = () => {
    // Init Variables
    let humanScore = 0;
    let computerScore = 0;
    let pressing = false;
    const logs = document.querySelector(".logs p");
    const compHumanScore = document.querySelector("#humanScore");
    const compComputerScore = document.querySelector("#computerScore");

    // Player's Action
    const actions = document.querySelectorAll("button");

    // Init Functions
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
        let log = logs.innerText + "======================\n";

        if (human === "rock") {
            if (computer == "rock") {
                log += "Its a tie!";
            }
            else if (computer == "paper") {
                log += "Computer got a point!";
                computerScore++;
            }
            else {
                log += "You got a point!";
                humanScore++;
            }
        }
        else if (human === "paper") {
            if (computer == "rock") {
                log += "You got a point!";
                humanScore++;
            }
            else if (computer == "paper") {
                log += "Its a tie!";
            }
            else {
                log += "Computer got a point!";
                computerScore++;
            }
        }
        else {
            if (computer == "rock") {
                log += "Computer got a point!";
                computerScore++;
            }
            else if (computer == "paper") {
                log += "You got a point!";
                humanScore++;
            }
            else {
                log += "Its a tie!";
            }
        }

        // Space
        log += "\n";

        // Update Score Board
        compHumanScore.innerText = humanScore;
        compComputerScore.innerText = computerScore;

        // Log the output
        logs.innerText = log;

        // Check Winner
        checkWinner();
    }

    const checkWinner = () => {
        if (humanScore == 5) {
            showModal("You Won!", `SCORE BOARD \n===============\n You: ${humanScore} \n Computer: ${computerScore}`);
        }
        else if (computerScore == 5) {
            showModal("You Lost!", `SCORE BOARD \n===============\n You: ${humanScore} \n Computer: ${computerScore}`);    
        }
    }
    
    const playRound = (YouChoice) => {
        // Choices
        const choices = ["rock", "paper", "scissor"];
        let log = "";

        // Get Bets
        const humanChoice = YouChoice;
        log += `You chose: ${humanChoice} \n`;

        const computerChoice = getComputerChoice(choices);
        log += `Computer chose: ${computerChoice} \n`;

        logs.innerText = log;

        // Compute
        computeRound(humanChoice, computerChoice);
    }

    // EVENTS
    // FOR CLICKING
    actions.forEach(element => {
        element.addEventListener("click", () => {
            let pick = element.getAttribute("id");

            playRound(pick);
        })
    });

    // FOR KEY INPUTS
    document.addEventListener("keydown", (e) => {
        if (e.key == "1" && !pressing) {
            playRound("rock");
            document.querySelector("#rock").classList.add("active");
        }
        else if (e.key == "2" && !pressing) {
            playRound("paper");
            document.querySelector("#paper").classList.add("active");
        }
        else if (e.key == "3" && !pressing) {
            playRound("scissor");
            document.querySelector("#scissor").classList.add("active");
        }

        pressing = true;
    });
    document.addEventListener("keyup", (e) => {
        pressing = false;
        document.querySelector(".active").classList.remove("active");
    });
}

playGame();