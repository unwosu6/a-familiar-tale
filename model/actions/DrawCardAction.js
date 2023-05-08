import Action from "./Action.js";

class DrawCardAction extends Action {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  act(game) {
    let player = game.getPlayer(game.curPlayer);
    player.drawCards(this.amount);
  }

}

export default DrawCardAction;