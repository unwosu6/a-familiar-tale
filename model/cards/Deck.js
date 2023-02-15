import CardFactory from "./CardFactory.js";
import UnorderedPile from "./UnorderedPile.js";
import {BasicType} from "../util/enums.js";

class Deck extends UnorderedPile {
  constructor() {
    super();
    const cardFactory = new CardFactory();
    let card;
    for (let i = 0; i < 8; i++) {
      card = cardFactory.makeBasicCard(BasicType.MANA)
      this.cards.push(card);
    }
    for (let i = 0; i < 2; i++) {
      card = cardFactory.makeBasicCard(BasicType.ATTACK);
      this.cards.push(card);
    }
  }
}

export default Deck;