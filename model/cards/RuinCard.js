import Card from "./Card.js";
import { Type } from "../util/enums.js";

class RuinCard extends Card {
  constructor(name, cost, fulfilment, description) {
    let type = Type.RUIN;
    super(name, type, cost, fulfilment, description);
  }
}

export default RuinCard;