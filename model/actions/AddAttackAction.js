import Action from "./Action.js";

class AddAttackAction extends Action {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  act(player) {
    // add this.amount to the players attack on that turn
    player.attack += this.amount;
  }

}

export default AddAttackAction;