import ActionList from "../actions/ActionList.js";

class Card {
  // type: basic, added, ruin, guild member, monster
  // basic cards cannot be bought
  // monster cards cannot be bought
  constructor(id, name, type, cost, fulfilment, description) {
    this.id = id
    this.name = name;
    this.type = type;
    this.cost = cost;
    this.fulfilment = fulfilment;
    this.description = description;
    this.actionList = new ActionList();
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

  play() {
    this.actionList.act();
  }

  addAction(action) {
    this.actionList.addAction(action);
  }
}

export default Card;