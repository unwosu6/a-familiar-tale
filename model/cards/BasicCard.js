import Card from "./Card.js";
import {BasicType, Type} from "../util/enums.js";


class BasicCard extends Card {
  
  constructor(basicType) {
    let name;
    let type = Type.BASIC;
    let cost = 0;
    let fulfilment = 0;
    let description;
    

    if (basicType === BasicType.MANA) {
      name = "+1 mana";
      description = "+1 mana";
    } else {
      name = "+1 attack"
      description = "+1 attack";
    }
    super(name, type, cost, fulfilment, description);
    this.basicType = basicType;
  }

  toString() {
    return `name: ${this.name}`;
  }
}

export default BasicCard;