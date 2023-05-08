import Action from "./Action.js";
// import promptSync from 'prompt-sync';

// const prompt = promptSync({sigint:true});

class DiscardCardAction extends Action {
  constructor() {
    super();
  }

  act(game) {
    let player = game.getPlayer(game.curPlayer);
    // add this.amount to the players attack on that turn
    let success = false;
    while (!success) {
      let name = prompt("enter the name of the card you would like to discard")
      if (name !== null) {
        let result = player.discardCardByName(name);
        success = result.success;
      }
    }
  }

}

export default DiscardCardAction;