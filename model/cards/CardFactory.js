import Card from "./Card.js";
import {BasicType, Type} from "../util/enums.js";
import AddManaAction from "../actions/AddManaAction.js";

class CardFactory {
  constructor() {

  }

  makeBasicCard(basicType) {
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
    let card = new Card(basicType, name, type, cost, fulfilment, description);
    const action = new AddManaAction(1);
    card.addAction(action);
    return card;
  }

  makeCard(id, name, type, cost, fulfilment, description) {
    // based on id, add action object to card
    let card = new Card(id, name, type, cost, fulfilment, description);
    return card;
  }
}

export default CardFactory