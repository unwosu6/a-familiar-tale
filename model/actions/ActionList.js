import Action from "./Action.js";

class ActionList {
  constructor() {
    this.lst = []
  }

  addAction(action) {
    this.lst.push(action);
  }

  act() {
    this.lst.forEach(action => { action.act() });
  }
}

export default ActionList;