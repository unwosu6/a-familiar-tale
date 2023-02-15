import Player from "./Player.js";
import MainDeck from "./cards/MainDeck.js";
import OrderedPile from "./cards/OrderedPile.js";

class Game {
  constructor(numPlayers) {
    this.numQuests = 0;
    this.numPlayers = numPlayers;
    this.players = [];
    this.mainDeck = new MainDeck();
    this.mainDeck.shuffle();
    this.centerRow = new OrderedPile();
    for (let i = 0; i < 6; i++) {
      this.centerRow.addCard(this.mainDeck.popCard());
    }
    
    for (let i = 0; i < numPlayers; i++) {
      let player = new Player();
      this.players.push(player);
    }
     
  }

  getPlayer(i) {
    if (i > this.numPlayers || i < 0) {
      // throw exception
    }
    return this.players[i];
  }

  printCenterRow() {
    console.log("CENTER ROW: ")
    console.log(this.centerRow.toString());
  }

  isGameOver() {
    if (this.numQuests === this.numPlayers) {
      return true;
    }
    return false;
  }
}

export default Game;