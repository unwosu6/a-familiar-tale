import ActionList from "../actions/ActionList.js";
import { Type } from "../util/enums.js";
import { faker } from '@faker-js/faker';

class Card {
  // type: basic, added, ruin, guild member, monster
  // basic cards cannot be bought
  // monster cards cannot be bought
  constructor(id, name, type, cost, description, fulfilment) {
    this.uuid = faker.datatype.uuid();
    this.id = id
    this.name = name;
    this.type = type;
    this.cost = cost;
    this.fulfilment = fulfilment;
    this.description = description;
    this.actionList = new ActionList();
  }

  getTypeString() {
    let type;
    if (this.type === Type.BASIC_SPIRIT) {
      type = "basic spirit";
    } else if (this.type === Type.GREATER_BASIC_SPIRIT) {
      type = "greater basic spirit";
    } else if (this.type === Type.RELIC) {
      type = "relic";
    } else if (this.type === Type.GUILD_MEMBER) {
      type = "guild member";
    } else if (this.type === Type.MONSTER) {
      type = "monster";
    }
    return type;
  }

  getDescription() {
    return this.description;
  }

  toString() {
    const cardText = 
      `${this.name}  
      type: ${this.getTypeString(this.type)}
      cost: ${this.cost}
      fulfilment: ${this.fulfilment}
      description: ${this.description}`
    return cardText;
  }

  play(game) {
    this.actionList.act(game);
  }

  addAction(action) {
    this.actionList.addAction(action);
  }
}

export default Card;