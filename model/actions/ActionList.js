import Action from "./Action.js";

class ActionList {
  constructor() {
    this.lst = []
  }

  addAction(action) {
    this.lst.push(action);
  }

  act(player) {
    this.lst.forEach((action) => { action.act(player) });
  }
}

export default ActionList;