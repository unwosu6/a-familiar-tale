import Pile from "./Pile.js";
import GuildMemberCard from "./GuildMemberCard.js";
import RuinCard from "./RuinCard.js";
import MonsterCard from "./MonsterCard.js";

class MainDeck extends Pile {
  constructor() {
    super();
    for (let i = 1; i < 4; i++) {
      let gCard = new GuildMemberCard(`guy ${i}`, i, i, "+${i} mana");
      let rCard = new RuinCard(`ruin ${i}`, i, i, "+${i} mana on each turn");
      let mCard = new MonsterCard(`monster ${i}`, i, i, "+${i} attack on this turn");
      this.cards.push(gCard);
      this.cards.push(rCard);
      this.cards.push(mCard);
    }
  }
}

export default MainDeck;