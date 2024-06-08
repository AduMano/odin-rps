# ODIN ROCK PAPER AND SCISSOR GAME

- For this project, you will create the game Rock Paper Scissors. This game will be played entirely in the console.
  > Rock Paper and Scissors is a game where 2 players will choose between Rock, Paper or Scissor then check if they win.

  > Conditions: Rock beats Scissors, Scissors beats Paper, and Paper beats Rock. 

- For now, This project only aims to only have 1 player and the opponent will be the computer.

<br>

# Console Based Game Algorithm [ENTRY #1: June 8, 2024]

 1. The game starts as soon as the page loads (Observe in Console)
 2. The program will then initiate the round
 3. The program will then ask the user to enter Rock, Paper or Scissor
 4. The program will randomly pick for the computer
 5. The program will compute who wins that round
 6. Apply the score to the winner and print it (1 point)
 7. The game will then repeat 5 times
 8. Display who is the winner of the game (Who ever has the most points wins).

## Divide and Conquer!

Now that we know the flow of the game, lets analyze to apply it in coding.

#### We need these variables:
 - humanScore (let)
 - computerScore (let)
 - humanChoice (const) in _Function_ playRound()
 - computerChoice (const) in _Function_ playRound()

#### We need these functions:
 - _f_ playGame()
 - _f_ playRound()
 - _f_ getHumanChoice()
 - _f_ getComputerChoice()
 - _f_ computeRound()
 - _f_ getWinner()