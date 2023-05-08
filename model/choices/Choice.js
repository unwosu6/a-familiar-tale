class Choice {
  constructor() {
    this.error = "";
  }

  getPrompt() {
    
  }
  
  choose(game) {  
    // throw exception?
  }

  getResult() {
    let result = {}
    if (this.error !== "") {
      result.error = this.error;
      result.success = false;
      this.error = "";
    } else {
      result.success = true;
      // game.printGameState();
    }
    return result;
  }
}

export default Choice;