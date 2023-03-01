import CardFactory from "./CardFactory.js";
import UnorderedPile from "./UnorderedPile.js";

class Deck extends UnorderedPile {
  constructor() {
    super();
    const cardFactory = new CardFactory();
    this.cards = cardFactory.makeStartingDeckCards();
  }
}

export default Deck;