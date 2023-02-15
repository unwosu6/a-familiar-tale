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

  popCard() {
    if (this.cards.length === 0) {
      // throw exception
    }
    return this.cards.pop();
  }

  empty() {
    if (this.cards.length === 0) {
      return true;
    }
    return false;
  }
}

export default Pile;