import Hand from "./cards/Hand.js";
import Deck from "./cards/Deck.js";
import Discard from "./cards/Discard.js";


// a player has a hand, a deck, and a discard

class Player {
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.hand = new Hand();
    this.discard = new Discard();
    this.handSize = 5;

    this.kindness = 0;
    this.cunning = 0;
    this.cruelty = 0;

    // this.ruinsInPlay = new RuinsPile();
    
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

  discardHand() {
    let len = this.hand.getNumCards();
    for (let i = 0; i < len; i++) {
      this.discard.addCard(this.hand.popCard());
    }

  }

  getHand() {
    return this.hand;
  }

  printHand() {
    console.log("Your Hand:");
    console.log(this.hand.toString())
  }

  endTurn() {
    this.discardHand();
  }
  

}

export default Player;