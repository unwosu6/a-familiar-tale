import Player from "./Player.js";
import MainDeck from "./cards/MainDeck.js";
import OrderedPile from "./cards/OrderedPile.js";

import CenterRowChoice from "./choices/CenterRowChoice.js";
import PlayCardChoice from "./choices/PlayCardChoice.js";
import BuyFamiliarChoice from "./choices/BuyFamiliarChoice.js";
import UseRelicChoice from "./choices/UseRelicChoice.js";
import EndTurnChoice from "./choices/EndTurnChoice.js";

const playCardChoice = new PlayCardChoice();
const centerRowChoice = new CenterRowChoice();
const buyFamiliarChoice = new BuyFamiliarChoice();
const useRelicChoice = new UseRelicChoice();
const endTurnChoice = new EndTurnChoice();

import promptSync from 'prompt-sync';
const prompt = promptSync({sigint:true});



class Game {
  constructor(numPlayers) {
    this.interactionNum = 0;
    this.topLevelChoices = ["menu-type", playCardChoice, centerRowChoice, buyFamiliarChoice, useRelicChoice, endTurnChoice]
    this.numQuests = 0;
    this.numPlayers = numPlayers;
    this.curPlayer = 0;
    this.players = [];
    this.mainDeck = new MainDeck();
    this.mainDeck.shuffle();
    this.centerRow = new OrderedPile();
    this.centerRowTotalCards = 6;
    this.greatBeyond = new OrderedPile();
    this.gameOver = false;
    this.possibleInteractions = this.topLevelChoices;
    for (let i = 0; i < 6; i++) {
      this.centerRow.addCard(this.mainDeck.popCard());
    }
    
    for (let i = 0; i < numPlayers; i++) {
      let player = new Player(this);
      this.players.push(player);
    }
    this.players[0].drawHand();
    this.players[0].mana = 0;
    this.players[0].attack = 0;
    this.printGameState();
  }

  getPlayer(i) {
    if (i > this.numPlayers || i < 0) {
      // throw exception
    }
    return this.players[i];
  }

  getCurPlayer() {
    return this.players[this.curPlayer];
  }

  printCenterRow() {
    console.log("+++CENTER ROW+++")
    console.log(this.centerRow.toString());
  }

  removeCenterRowCard(num) {
    if (num > this.centerRow.centerRowTotalCards - 1 || num < 0) {
      // throw exception
    }
    this.centerRow.removeCard(num);

    if (this.mainDeck.getNumCards() < 0) {
      // throw exception
    }
    this.centerRow.addCard(this.mainDeck.popCard());
  }

  getPossibleInteractions() {
    console.log(this.possibleInteractions);
    return this.possibleInteractions;
  }

  applyChoice(choice) {
    console.log("hi");
    choice.choose(this);
    return choice.getResult();
  }

  isGameOver() {
    if (this.numQuests === this.numPlayers) {
      return true;
    }
    return false;
  }

  printGameState() {
    this.printCenterRow();
    let player = this.getPlayer(this.curPlayer);
    console.log(`Player ${this.curPlayer + 1}'s turn:`);
    player.printHand();
    player.printStats();  
  }

  updatePlayer() {
    this.curPlayer++;
    this.curPlayer = this.curPlayer % this.numPlayers;
  }
}

export default Game;