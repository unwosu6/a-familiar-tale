import Card from "./Card.js";
import { Type } from "../util/enums.js";

class GuildMemberCard extends Card {
  constructor(name, cost, fulfilment, description) {
    let type = Type.GUILD_MEMBER;
    super(name, type, cost, fulfilment, description);
  }
}

export default GuildMemberCard;