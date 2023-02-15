import Game from "./model/Game.js";
import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});

console.log("welcome to a familiar tale.");
let numPlayers = 0;
while (numPlayers > 3 || numPlayers < 2) {
  numPlayers = prompt("enter the number of players (2 or 3): ");
}

let game = new Game(numPlayers);

let gameOver = false;
let curPlayer = 0;

while (!gameOver) {
  gameOver = game.isGameOver();

  game.printCenterRow();

  let player = game.getPlayer(curPlayer);
  console.log(`Player ${curPlayer + 1}'s turn:`);
  player.drawHand();
  player.printHand();

  prompt("enter number of card to play: ");

  player.endTurn();
  curPlayer++;
  curPlayer = curPlayer % numPlayers;
  
  
}