import Action from "./Action.js";

class ActionList {
  constructor() {
    this.lst = []
  }

  addAction(action) {
    this.lst.push(action);
  }

  act(player) {
    if (this.lst.length > 1) {
      console.log("LST", this.lst);
    }
    this.lst.forEach((action) => { action.act(player) });
  }
}

export default ActionList;