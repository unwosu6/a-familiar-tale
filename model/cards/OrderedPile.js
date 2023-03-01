import Pile from "./Pile.js";

// player's hand, player's played cards, player's relics in play, center row, great beyond

class OrderedPile extends Pile {
  constructor() {
    super();
  }

  getCard(i) {
    if (this.cards.length < i) {
      // throw exception
    }
    return this.cards[i];
  }

  removeCard(i) {
    const card = this.getCard(i);
    this.cards.splice(i, 1);
    return card;
  }
}

export default OrderedPile;