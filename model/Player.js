import Hand from "./cards/Hand.js";
import Deck from "./cards/Deck.js";
import Discard from "./cards/Discard.js";
import OrderedPile from "./cards/OrderedPile.js";


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
    this.usedRelics = new Set();

    // karma scores, never reset
    this.kindness = 0;
    this.cunning = 0;
    this.cruelty = 0;

    // reset to 0 each turn
    this.mana = 0;
    this.attack = 0;

    this.fulfilment = 0;
  }

  drawHand() {
    for (let i = 0; i < this.handSize; i++) {
      if (this.deck.empty()) {
        this.discard.shuffle();
        let len = this.discard.getNumCards();
        for (let j = 0; j < len; j++) {
          this.deck.addCard(this.discard.popCard());
        }
      }
      this.hand.addCard(this.deck.popCard());
    }
    // console.log(this.hand);
  }

  discardCards(pile) {
    let len = pile.getNumCards();
    for (let i = 0; i < len; i++) {
      this.discard.addCard(pile.popCard());
    }

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
    let card = this.hand.removeCard(num);
    card.play(this.game);
    this.playedCards.addCard(card);
  } 

  useSingleUseRelic(num) {
    if (this.usedRelics.has(card.id)) {
      // error message, this relic cannot be used c
      console.log("This relic has already been used")
    }
    let card = this.relicsInPlay.getCard(num);
    card.play(this.game);
    this.usedRelics.add(card.id);
  } 

  killMonster(card) {
    card.play(this.game);
    this.fulfilment += card.fulfilment;
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

  endTurn() {
    this.discardCards(this.hand);
    this.discardCards(this.playedCards);
  }

}

export default Player;