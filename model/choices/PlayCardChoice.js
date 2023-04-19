import Choice from "./Choice.js";
import PlayCardSubChoice from "./PlayCardSubChoice.js";

import promptSync from 'prompt-sync';

const playCardSubChoice = new PlayCardSubChoice();

const prompt = promptSync({sigint:true});

class PlayCardChoice extends Choice {
  constructor() {
    super();
  }

  getPrompt() {
    return "Play Card";
  }

  choose(game) {
    game.possibleInteractions = ["card-entry-type", playCardSubChoice];
  }

}

export default PlayCardChoice;