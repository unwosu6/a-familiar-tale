import Action from "./Action.js";

class AddManaAction extends Action {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  act() {
    // add this.amount to the players mana on that turn
  }

}

export default AddManaAction;