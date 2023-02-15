import Pile from "./Pile.js";

// player's hand, center row, great beyond

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
}

export default OrderedPile;