class Pile {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  getNumCards() {
    return this.cards.length;
  }

  toString() {
    let cardsText = ``;
    let cardNum = 0;
    this.cards.forEach(card => { 

      cardsText += `\nCard ${cardNum}:\n ${card.toString()}`;
      cardNum += 1;
    });
    return cardsText;
  }

  getCard(i) {
    if (this.cards.length < i) {
      // throw exception
    }
    return this.cards[i];
  }

  popCard() {
    if (this.cards.length === 0) {
      // throw exception
    }
    return this.cards.pop();
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

  empty() {
    if (this.cards.length === 0) {
      return true;
    }
    return false;
  }

  // removeUndef() {
  //   this.cards = this.cards.filter(( card ) => {
  //     return card !== undefined;
  //   });
  // }
}

export default Pile;