import UnorderedPile from "./UnorderedPile.js";
import CardFactory from "./CardFactory.js";

class MainDeck extends UnorderedPile {
  constructor() {
    super();
    const cardFactory = new CardFactory();
    this.cards = cardFactory.makeMainDeckCards();
  }
}

export default MainDeck;