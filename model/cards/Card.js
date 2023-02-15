class Card {
  // type: basic, added, ruin, guild member, monster
  // basic cards cannot be bought
  // monster cards cannot be bought
  constructor(name, type, cost, fulfilment, description) {
    this.name = name;
    this.type = type;
    this.cost = cost;
    this.fulfilment = fulfilment;
    this.description = description;
    // this.id
  }

  getDescription() {
    return this.description;
  }

  toString() {
    const cardText = 
      `${this.name}  
      type: ${this.type}
      cost: ${this.cost}
      fulfilment: ${this.fulfilment}`
    return cardText;
  }
}

export default Card;