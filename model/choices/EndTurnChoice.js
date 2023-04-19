import Choice from "./Choice.js";
import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});


class EndTurnChoice extends Choice {
  constructor() {
    super();
  }

  getPrompt() {
    return "End Turn";
  }
  
  choose(game) {  
    // throw exception?
    let player = game.getCurPlayer() ;
    player.endTurn();
    game.updatePlayer();
    let nextPlayer = game.getCurPlayer() ;
    nextPlayer.drawHand();
    nextPlayer.mana = 0;
    nextPlayer.attack = 0;
  }
}

export default EndTurnChoice;