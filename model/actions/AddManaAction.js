import Action from "./Action.js";

class AddManaAction extends Action {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  act(player) {
    // add this.amount to the players mana on that turn
    player.mana += this.amount;
  }

}

export default AddManaAction;