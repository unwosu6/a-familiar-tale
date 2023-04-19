import Choice from "./Choice.js";
import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});


class UseRelicChoice extends Choice {
  constructor() {
    super();
  }

  getPrompt() {
    return "Use Single-Use Relic";
  }
  
  choose(game) {  
    // throw exception?
    let player = game.getCurPlayer() ;
    const num = prompt("enter number of single use relic card to play: ");
    // if card is not of id in set, send error message
    player.useSingleUseRelic(num);
  }
}

export default UseRelicChoice;