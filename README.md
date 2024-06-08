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
 - choices (const) in _Function_ playRound()
 - humanChoice (const) in _Function_ playRound()
 - computerChoice (const) in _Function_ playRound()

#### We need these functions:
 - _f_ playGame()
 - _f_ playRound()
 - _f_ getHumanChoice()
 - _f_ getComputerChoice()
 - _f_ computeRound()
 - _f_ getWinner()


# With UI (NEW RULE) [ENTRY #2: June 9, 2024]
> [!NOTE]
> In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt. 

1. For now, remove the logic that plays exactly five rounds.
2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
3. Add a div for displaying results and change all of your console.logs into DOM methods.
4. Display the running score, and announce a winner of the game once one player reaches 5 points.
5. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

## CHANGES
> [!IMPORTANT]
> As mentioned in the last item above, I mostly reworked the old code, like 50% of it and added new things. There are changes thats been made in this branch that will soon be merged with the original (Main) Branch.

#### Changes in variables:
 - humanScore (let)
 - computerScore (let)
 - pressing (let) * 
 - logs (const) (component) *
 - compHumanScore (const) (component) *
 - compComputerScore (const) (component) *
 - choices (const) in _Function_ playRound()
 - humanChoice (const) in _Function_ playRound()
 - computerChoice (const) in _Function_ playRound()
 - log (let) (universal content holder) *

#### Changes in functions:
 - _f_ playGame()
 - _f_ playRound()
 - ~~_f_ getHumanChoice()~~
 - _f_ getComputerChoice()
 - _f_ computeRound()
 - ~~_f_ getWinner()~~
 - _f_ checkWinner() *
 - _f_ showModal() *

#### Events (NEW):
 - Buttons (On Click Event) *
 - Keyboard (On KeyPress Event) *