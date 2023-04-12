import Action from "./Action.js";

class AddManaAction extends Action {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  act(game) {
    // add this.amount to the players mana on that turn
    let player = game.getPlayer(game.curPlayer);
    player.mana += this.amount;
  }

}

export default AddManaAction;