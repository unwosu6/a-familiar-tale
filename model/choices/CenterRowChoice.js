import Choice from "./Choice.js";
import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});

class CenterRowChoice extends Choice {
  constructor() {
    super();
  }

  getPrompt() {
    return "Interact with the Center Row";
  }

  choose(game) {
    num = prompt("enter number of card from center row: ");
    let centerCard = game.centerRow.getCard(num);
    if (centerCard.type === Type.MONSTER) {
      if (player.attack >= centerCard.cost) {
        game.greatBeyond.addCard(game.removeCenterRowCard(num));
        player.killMonster();
      } else {
        this.error = "INSUFFICIENT ATTACK";
      }
    } else {
      if (player.mana >= centerCard.cost) {
        player.discard.addCard(game.removeCenterRowCard(num));
      } else {
        this.error = "INSUFFICIENT MANA";
      }
    }
  }
}

export default CenterRowChoice;