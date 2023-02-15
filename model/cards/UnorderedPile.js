import Pile from "./Pile.js";

// player's discard, player's deck, main deck

class UnorderedPile extends Pile {
  constructor() {
    super();
  }

  // Fisher–Yates shuffle
  shuffle() {
    // for i from n−1 downto 1 do
    //  j ← random integer such that 0 ≤ j ≤ i
    //  exchange a[j] and a[i]
    let len = this.cards.length;
    for (let i = len - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
  }
}

export default UnorderedPile;