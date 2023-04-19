import Choice from "./Choice.js";
import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});

class PlayCardSubChoice extends Choice {
  constructor() {
    super();
  }

  getPrompt() {
    return "Enter number of card to play";
  }

  choose(game) {
    let player = game.getPlayer(game.curPlayer);
    player.playCardFromHand(game.interactionNum);
    game.possibleInteractions = game.topLevelChoices;
  }

}

export default PlayCardSubChoice;