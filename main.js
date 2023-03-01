import Game from "./model/Game.js";
import promptSync from 'prompt-sync';
import { Type } from "./model/util/enums.js";

const prompt = promptSync({sigint:true});

console.log("welcome to a familiar tale.");
let numPlayers = 0;
while (numPlayers > 3 || numPlayers < 2) {
  numPlayers = prompt("enter the number of players (2 or 3): ");
}

let game = new Game(numPlayers);

let gameOver = false;
let curPlayer = 0;

// const x = [[0,"yes",3], [2,3,1]];
// for (let i = 0; i < x.length; i++) {
//   for (let j = 0; j < x[i].length; j++) {
//     console.log(x[i][j]);
//   }
// }

// function xyz(a, b, c) {
//   console.log(a + b);
// }

// const x = [1, 3];
// x.forEach((num) => {
//   xyz.apply(this, x);
// });

function playTurn(player) {
  player.mana = 0;
  player.attack = 0;

  while (player.hasCardsInHand()) {
    player.printHand();
    let ans = prompt("end turn? y/n: ");
    if (ans === "y") {
      break;
    }
    let num = prompt("enter number of card to play: ");
    player.playCard(num);
    player.printPlayedCards();
    player.printStats();

    // interact with center row
    ans = prompt("do you want to buy a ruin, recruit a guild member, or fight a monster in the center row? y/n: ");
    if (ans === "y") {
      num = prompt("enter number of card from center row: ");
      let centerCard = game.centerRow.getCard(num);
      if (centerCard.type === Type.MONSTER) {
        if (player.attack >= centerCard.cost) {
          game.greatBeyond.addCard(game.removeCenterRowCard(num));
          player.killMonster();
          game.centerRow.add
        } else {
          console.log("INSUFFICIENT ATTACK");
        }
      } else {
        if (player.mana >= centerCard.cost) {
          player.discard.addCard(game.removeCenterRowCard(num));
        } else {
          console.log("INSUFFICIENT MANA");
        }
      }
      player.printStats();
    }
    
    
  }
  player.endTurn();
}

while (!gameOver) {
  gameOver = game.isGameOver();

  game.printCenterRow();

  let player = game.getPlayer(curPlayer);

  console.log(`Player ${curPlayer + 1}'s turn:`);
  player.drawHand();

  playTurn(player);

  curPlayer++;
  curPlayer = curPlayer % numPlayers;  
}