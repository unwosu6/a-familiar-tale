class Choice {
  constructor() {
    this.err = "";
  }

  getPrompt() {
    
  }
  
  choose(game) {  
    // throw exception?
  }

  getResult() {
    let result = {}
    if (this.err !== "") {
      result.err = this.err;
      result.success = false;
      this.err = "";
    } else {
      result.success = true;
      // game.printGameState();
    }
    return result;
  }
}

export default Choice;