import Card from "./Card.js";
import { Type } from "../util/enums.js";

class MonsterCard extends Card {
  constructor(name, cost, fulfilment, description) {
    let type = Type.MONSTER;
    super(name, type, cost, fulfilment, description);
  }
}

export default MonsterCard;