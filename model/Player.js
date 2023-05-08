import Hand from "./cards/Hand.js";
import Deck from "./cards/Deck.js";
import Discard from "./cards/Discard.js";
import OrderedPile from "./cards/OrderedPile.js";
import { Type, SingleUseRelicIDs } from "./util/enums.js";

import CenterRowChoice from "./choices/CenterRowChoice.js";
import PlayCardChoice from "./choices/PlayCardChoice.js";
import BuyFamiliarChoice from "./choices/BuyFamiliarChoice.js";
import UseRelicChoice from "./choices/UseRelicChoice.js";
import EndTurnChoice from "./choices/EndTurnChoice.js";
// a player has a hand, a deck, and a discard

class Player {
  constructor(game) {
    this.game = game;
    this.deck = new Deck();
    this.deck.shuffle();
    this.discard = new Discard();
    this.hand = new Hand();
    this.handSize = 5;
    this.playedCards = new OrderedPile();
    this.relicsInPlay = new OrderedPile();
    this.playedRelics = new OrderedPile();
    this.usedSingleUseRelics = new Set();

    // karma scores, never reset
    this.kindness = 0;
    this.cunning = 0;
    this.cruelty = 0;

    // reset to 0 each turn
    this.mana = 0;
    this.attack = 0;
    this.uniqueGuildIDs = new Set();
    this.uniqueRelicsInPlayIDs = new Set();
    this.totalAttackDealt = 0;

    // scores
    this.fulfilment = 0;
    this.wonKindness = false;
    this.wonCunning = false;
    this.wonCruelty = false;
  }

  drawCards(num) {
    for (let i = 0; i < num; i++) {
      if (this.deck.empty()) {
        this.discard.shuffle();
        let len = this.discard.getNumCards();
        for (let j = 0; j < len; j++) {
          this.deck.addCard(this.discard.popCard());
        }
      }
      this.hand.addCard(this.deck.popCard());
    }
  }

  drawHand() {
    this.drawCards(this.handSize);
  }

  discardCards(pile) {
    let len = pile.getNumCards();
    for (let i = 0; i < len; i++) {
      this.discard.addCard(pile.popCard());
    }
  }

  discardCardByName(name) {
    let result = {};
    for (let i = 0; i < this.hand.getNumCards(); i++) {
      if (this.hand.getCard(i).name.toLowerCase() === name.toLowerCase()) {
        this.discard.addCard(this.hand.removeCard(i));
        result.success = true;
        return result;
      }
    }
    result.success = false;
    result.error = `card with name ${name} is not in hand`;
    return result;
  }

  getHand() {
    return this.hand;
  }

  hasCardsInHand() {
    return !this.hand.empty();
  }

  printHand() {
    console.log("***YOUR HAND***");
    console.log(this.hand.toString())
  }

  printPlayedCards() {
    if (!this.playedCards.empty()) {
      console.log("***YOUR PLAYED CARDS***");
      console.log(this.playedCards.toString())
    }
  }

  playCardFromHand(num) {
    let result = {}
    let card = this.hand.removeCard(num);
    card.play(this.game);
    if (card.type === Type.RELIC) {
      this.uniqueRelicsInPlayIDs.add(card.id);
      this.playedRelics.addCard(card);
    } else {
      if (card.type === Type.GUILD_MEMBER) {
        this.uniqueGuildIDs.add(card.id);
      }
      this.playedCards.addCard(card);
    }
    result.success = true;
    return result;
  } 

  playCardFromHandById(id) {
    let result = {};
    for (let i = 0; i < this.hand.getNumCards(); i++) {
      if (this.hand.getCard(i).id === id) {
        result = this.playCardFromHand(i);
        return result;
      }
    }
    result.success = false;
    result.error = `card with id ${id} is not in hand`;
    return result;
  }

  playCardFromPlayedCardsById(id) {
    let result = {};
    result.success = false;
    result.error = `a played card cannot be unplayed`;
    return result;
  }

  // playSingleUseRelic(num) {
  //   let result = {};
  //   if (this.usedRelics.has(card.id)) {
  //     // error message, this relic cannot be used c
  //     result.error = ("This relic has already been used")
  //   }
  //   let card = this.relicsInPlay.removeCard(num);
  //   card.play(this.game);
  //   this.usedRelics.addCard(card);
  //   return result;
  // } 

  playRelic(num) {
    let result = {};
    let card = this.relicsInPlay.getCard(num);
    // check if single use relic
    if (SingleUseRelicIDs.has(card.id)) {
      this.usedSingleUseRelics.add(card.uuid);
    }
    // play relic
    card = this.relicsInPlay.removeCard(num);
    card.play(this.game);
    this.playedRelics.addCard(card);
    result.success = true;
    return result;
  }

  restoreRelics() {
    let pile = this.playedRelics;
    let len = pile.getNumCards();
    let played = [];
    for (let i = 0; i < len; i++) {
      let card = pile.popCard();
      this.uniqueRelicsInPlayIDs.add(card.id);
      if (!this.usedSingleUseRelics.has(card.uuid)) {
        this.relicsInPlay.addCard(card);
      } else {
        played.append(card);
      }
    }
    for (let card of played) {
      this.playedRelics.addCard(card);
    }
  }

  disableRelics() {
    let pile = this.relicsInPlay;
    let len = pile.getNumCards();
    for (let i = 0; i < len; i++) {
      this.playedRelics.addCard(pile.popCard());
    }
  }

  playRelicByUuid(uuid) {
    let result = {};
    for (let i = 0; i < this.relicsInPlay.getNumCards(); i++) {
      if (this.relicsInPlay.getCard(i).uuid === uuid) {
        result = this.playRelic(i);
        return result;
      }
    }
    result.success = false;
    result.error = `card with uuid ${uuid} is not in relics`;
    return result;
  } 

  playUsedRelicById(id) {
    let result = {};
    result.success = false;
    result.error = `this relic has already been played`;
    return result;
  }

  killMonster(card) {
    this.attack -= card.cost;
    card.play(this.game);
    this.fulfilment += card.fulfilment;
    this.cruelty += 1;
  }

  buyCard(card) {
    this.mana -= card.cost;
    this.fulfilment += card.fulfilment;
    if (card.type === Type.GUILD_MEMBER) {
      this.kindness += 1;
    }
    if (card.type === Type.RELIC) {
      this.cunning += 1;
    }
  }

  buyCenterRowCard(num) {
    let result = {};
    let centerCard = this.game.centerRow.getCard(num);
    if (centerCard.type === Type.MONSTER) {
      if (this.attack >= centerCard.cost) {
        let cardResult = this.game.removeCenterRowCard(num);
        if (cardResult.error) {
          result.error = cardResult.error
        }
        if (cardResult.card) {
          this.game.greatBeyond.addCard(cardResult.card);
        }
        this.killMonster(centerCard);
      } else {
        result.error = "INSUFFICIENT ATTACK";
        result.success = false;
        return result;
      }
    } else {
      if (this.mana >= centerCard.cost) {
        this.buyCard(centerCard);
        let cardResult = this.game.removeCenterRowCard(num);
        if (cardResult.error) {
          result.error = cardResult.error
        }
        if (cardResult.card) {
          this.discard.addCard(cardResult.card);
        }
      } else {
        result.error = "INSUFFICIENT MANA";
        result.success = false;
        return result;
      }
    }
    result.success = true;
    return result;
  }

  buyCenterRowCardById(id) {
    let result = {};
    for (let i = 0; i < this.game.centerRow.getNumCards(); i++) {
      if (this.game.centerRow.getCard(i).id === id) {
        result = this.buyCenterRowCard(i);
        return result;
      }
    }
    result.success = false;
    result.error = `card with id ${id} is not in center row`;
    return result;
  }

  printStats() {
    console.log(`***STATS***:  
      mana: ${this.mana}
      attack: ${this.attack}
      kindness: ${this.kindness}
      cunning: ${this.cunning}
      cruelty: ${this.cruelty}
      cards left in deck: ${this.deck.getNumCards()}`);
  }

  checkWin() {
    let result = {};
    let kindnessResult = this.game.checkKindnessWin(this);
    let cunningResult = this.game.checkCunningWin(this);
    let crueltyResult = this.game.checkCrueltyWin(this);
    // let message = `player ${this.game.getCurPlayer()} has won a quest`
    let results = [kindnessResult, cunningResult, crueltyResult];
    return results;
  }

  endTurn() {
    let result = {};
    result = this.checkWin();
    this.mana = 0;
    this.attack = 0;
    this.uniqueGuildIDs = new Set();
    this.uniqueRelicsInPlayIDs = new Set();
    this.totalAttackDealt = 0;
    this.restoreRelics();
    this.discardCards(this.hand);
    this.discardCards(this.playedCards);
    return result;
  }

}

export default Player;