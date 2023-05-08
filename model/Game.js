import Player from "./Player.js";
import MainDeck from "./cards/MainDeck.js";
import OrderedPile from "./cards/OrderedPile.js";
import { Type } from "./util/enums.js";

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
import PlayerEndCard from "../app/src/components/PlayerEndCard.jsx";
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

    this.kindnessQuestDone = false;
    this.cunningQuestDone = false;
    this.crueltyQuestDone = false;
    this.numGuildForQuest = 1;
    this.numRelicsForQuest = 1;
    this.numAttackForQuest = 2;
    
    this.gameOver = false;
    this.playerWinOrder = [];
    this.possibleInteractions = this.topLevelChoices;
    for (let i = 0; i < 6; i++) {
      this.centerRow.addCard(this.mainDeck.popCard());
    }
    
    for (let i = 0; i < numPlayers; i++) {
      let player = new Player(this);
      this.players.push(player);
    }
    this.players[0].drawHand();
    // this.players[0].mana = 0;
    // this.players[0].attack = 0;
    // this.printGameState();
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
    let result = {};
    if (num > this.centerRow.centerRowTotalCards - 1 || num < 0) {
      result.error = "card is not in center row";
      result.success = false;
      return result;
    }
    result.card = this.centerRow.removeCard(num);
    // replace card
    if (this.mainDeck.getNumCards() <= 0) {
      // throw exception
      result.error = "there are no more cards in the main deck\n";
      result.success = true;
      return result;
    }
    this.centerRow.addCard(this.mainDeck.popCard());
    result.success = true;
    return result;
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
    let total = this.cunningQuestDone + this.crueltyQuestDone + this.kindnessQuestDone
    if (total >= this.numPlayers - 1) { // no subtract
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
    let result = {};
    this.curPlayer++;
    this.curPlayer = this.curPlayer % this.numPlayers;
    if (!this.isGameOver()) {
      this.getCurPlayer().drawHand();
    } else if (this.isGameOver() && this.curPlayer !== 0) {
      this.getCurPlayer().drawHand();
      result.message = `Player ${this.curPlayer + 1}'s final turn`;
    } else {
      result.success = false;
      result.message = "The game is over.";
      this.updatePlayerWinOrder();
      result.players = this.playerWinOrder;
      console.log("in gam.js", result.players);
      return result;
    }
    result.success = true;
    return result;
  }

  updatePlayerWinOrder() {
    let playerNums = [];
    for (let i = 0; i < this.numPlayers; i++) {
      playerNums.push(i);
    }
    for (let i = 0; i < this.numPlayers; i++) {
      let player = this.getPlayer(playerNums[i]);
      let curMax = player.fulfilment;
      let maxInd = i;
      for (let j = i + 1; j < this.numPlayers; j++) {
        let otherPlayer = this.getPlayer(playerNums[j]);
        let score = otherPlayer.fulfilment;
        if ( curMax < score ) {
          maxInd = j;
          curMax = score;
        } else if (curMax === score) {
          // tie breakers
          // the player with less quests loses
        }
      }
      let temp = playerNums[i];
      playerNums[i] = playerNums[maxInd];
      playerNums[maxInd] = temp;
    }
    this.playerWinOrder = playerNums;
  }

  checkKindnessWin(player) {
    let result = {};
    result.success = false;
    if (!this.kindnessQuestDone && player.uniqueGuildIDs.size >= this.numGuildForQuest) {
      this.kindnessQuestDone = true;
      result.success = true;
      player.wonKindness = true;
      player.fulfilment += 10;
      result.message = `player ${this.curPlayer + 1} won the kindness quest by playing ${this.numGuildForQuest} unique guild members in one turn`;
      return result;
    }
    return result;
  }

  checkCunningWin(player) {
    let result = {};
    result.success = false;
    if (!this.cunningQuestDone && player.uniqueRelicsInPlayIDs.size >= this.numRelicsForQuest) {
      this.cunningQuestDone = true;
      result.success = true;
      player.wonCunning = true;
      player.fulfilment += 10;
      result.message = `player ${this.curPlayer + 1} won the cunning quest by having ${this.numRelicsForQuest} unique relics in play at once`;
      return result;
    }
    return result;
  }
  checkCrueltyWin(player) {
    let result = {};
    if (!this.crueltyQuestDone && player.totalAttackDealt >= this.numAttackForQuest) {
      this.crueltyQuestDone = true;
      result.success = true;
      player.wonCruelty = true;
      player.fulfilment += 10;
      result.message = `player ${this.curPlayer + 1} won the cruelty quest by dealing ${this.numAttackForQuest} attack in one turn`;
      return result;
    }
    result.success = false;
    return result;
  }
}

export default Game;