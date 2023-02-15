import Card from "./Card.js";
import BasicCard from "./BasicCard.js";
import Pile from "./Pile.js";
import {BasicType} from "../util/enums.js";

class Deck extends Pile {
  constructor() {
    super();
    let card;
    for (let i = 0; i < 8; i++) {
      card = new BasicCard(BasicType.MANA);
      this.cards.push(card);
    }
    for (let i = 0; i < 2; i++) {
      card = new BasicCard(BasicType.ATTACK);
      this.cards.push(card);
    }
  }
}

export default Deck;