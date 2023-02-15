import UnorderedPile from "./UnorderedPile.js";
import CardFactory from "./CardFactory.js";

class MainDeck extends UnorderedPile {
  constructor() {
    super();
    const cardFactory = new CardFactory();
    for (let i = 1; i < 4; i++) {
      let gCard = cardFactory.makeCard(i + 2, `guy ${i}`, i, i, "+${i} mana");
      let rCard = cardFactory.makeCard(i + 3, `ruin ${i}`, i, i, "+${i} mana on each turn");
      let mCard = cardFactory.makeCard(i + 4, `monster ${i}`, i, i, "+${i} attack on this turn");
      this.cards.push(gCard);
      this.cards.push(rCard);
      this.cards.push(mCard);
    }
  }
}

export default MainDeck;