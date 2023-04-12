import Card from "./Card.js";
import {BasicType, Type} from "../util/enums.js";
import AddManaAction from "../actions/AddManaAction.js";
import AddAttackAction from "../actions/AddAttackAction.js";
import { MainDeckCards, BasicSpiritCards } from "./CardLists.js";

class CardFactory {
  constructor() {
    this.cards = [];
  }

  makeBasicCard(basicType) {
    let name;
    let type = Type.BASIC_SPIRIT;
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
    
    return card;
  }
// Card Name,Card Type,Card Cost,Card Ability,Quantity,Fulfillment Points
addCard(id, name, type, cost, description, quantity, fulfilment) {
    // for right now fulfilment points will be the same as cost (until I get the actual values)
    let card;
    let action;
    for (let i = 0; i < quantity; i++) {
      card = new Card(id, name, type, cost, description, fulfilment);
      // based on id, add action object to card
      // +1 mana cards
      if (card.id === 6 ||
          card.id === 17 ||
          card.id === 35 ||
          card.id === 36) {
        action = new AddManaAction(1);
        card.addAction(action);
      }
      // +2 mana cards
      // check for set membership
      if (card.id === 5 ||
          card.id === 27 ||
          card.id === 28) {
        action = new AddManaAction(2);
        card.addAction(action);
      }
      // +3 mana cards
      if (card.id === 29) {
        action = new AddManaAction(3);
        card.addAction(action);
      }
      // +1 attack cards
      if (card.id === 1 ||
          card.id === 37) {
        action = new AddAttackAction(1);
        card.addAction(action);
      }
      // +2 attack cards
      if (card.id === 16 ||
          card.id === 25) {
        action = new AddAttackAction(1);
        card.addAction(action);
      }
      // +3 attack cards
      if (card.id === 10 ||
          card.id === 26) {
        action = new AddAttackAction(1);
        card.addAction(action);
      }
      this.cards.push(card);
    }
  }

  makeStartingDeckCards() {
    this.addCard.apply(this, BasicSpiritCards[0]);
    this.addCard.apply(this, BasicSpiritCards[1]);
    return this.cards;
  }

  makeMainDeckCards() {
    MainDeckCards.forEach((card) => {
      this.addCard.apply(this, card);
    });
    return this.cards;
  }
}

export default CardFactory;