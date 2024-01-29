//confirm if the player wants to play the game
let playGame = confirm("Shall we play rock, paper, scissors?");

//if yes proceed with the game
if (playGame) {
  //ask the player to enter either rock paper or scissors
  let playerChoice = prompt("Enter rock, paper or scissors to play");
  //check if player entered any value, if yes proceeed
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    //check if the value entered by the player is either rock paper or scissors
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "It's a Tie!"
          : (playerOne === "rock") & (computer === "paper")
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : (playerOne === "paper") & (computer === "scissors")
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : (playerOne === "scissors") & (computer === "rock")
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;

      alert(result);

      let playAgain = confirm("play Again");
      playAgain ? location.reload() : alert("Thanks for playing")
    } else {
      alert("You did not enter rock, paper or scissors");
    }
  } else {
    alert("Maybe you changed your mind");
  }
} else {
  alert("Okay, maybe another day");
}
