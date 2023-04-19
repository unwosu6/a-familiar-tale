import Game from "./model/Game.js";
import CLI from "./CLI/CLI.js";
import promptSync from 'prompt-sync';
import { Type } from "./model/util/enums.js";

const prompt = promptSync({sigint:true});

console.log("welcome to a familiar tale.");
let numPlayers = 0;
while (numPlayers > 3 || numPlayers < 2) {
  numPlayers = prompt("enter the number of players (2 or 3): ");
}

let game = new Game(numPlayers);
let cli = new CLI();

// function playTurn(player) {
//   player.drawHand();
//   player.mana = 0;
//   player.attack = 0;

//   while (player.hasCardsInHand()) {
//     player.printHand();
    
//     let ans;
//     const choices = Set(["1", "2", "3", "4", "5"]);
//     while (!choices.has(ans)) {
//       ans = prompt(
//         `Choices:
//         [1] Play Card,
//         [2] Interact with the Center Row,
//         [3] Buy a Failiar,
//         [4] Use Single-Use Relic
//         [5] End Turn`
//       );
//     }

//     if (ans === "1") {
//       playCardChoice.choose();
//       player.printPlayedCards();
//     } else if (ans === "2") {
//       centerRowChoice.choose();
//     } else if (ans === "3") {
//       buyFamiliarChoice.choose();
//     } else if (ans === "4") {
//       useRelicChoice.choose();
//     } else {
//       break;
//     }
//     // maybe just reprint everything
//     player.printStats();    
//   }
//   player.endTurn();
// }

// possible_interactions = game.possible_interactions()
// choice = prompt_user(game, possible_interactions)
// result = game.apply_choice(choice)
// show_result(result)

while (true) {
  let possibleInteractions = game.getPossibleInteractions();
  // UI should be a completely seperate component:
  // UI.promptUser(game, possibleInteractions)
  let choice = cli.promptUser(game, possibleInteractions);
  let result = game.applyChoice(choice);
  // UI.showResult(game, result)
  cli.showResult(game, result);
}

// while (!game.gameOver) {
//   game.gameOver = game.isGameOver();

//   game.printCenterRow();

//   let player = game.getPlayer(game.curPlayer);

//   console.log(`Player ${game.curPlayer + 1}'s turn:`);

//   playTurn(player);

//   game.curPlayer++;
//   game.curPlayer = game.curPlayer % numPlayers;  
// }