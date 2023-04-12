import Action from "./Action.js";

class AddAttackAction extends Action {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  act(game) {
    let player = game.getPlayer(game.curPlayer);
    // add this.amount to the players attack on that turn
    player.attack += this.amount;
  }

}

export default AddAttackAction;