import Choice from "./Choice.js";
import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});

class BuyFamiliarChoice extends Choice {
  constructor() {
    super();
  }

  getPrompt() {
    return "Buy a Failiar";
  }
  
  choose(game) {  
    let ans;
    const choices = Set(["1", "2", "3", "4", "5", "6"]);
    while (!choices.has(ans)) {
      ans = prompt(
        `Choices:
        [1] Buy Kind Familar,
        [2] Buy Cunning Familiar,
        [3] Buy Cruelty Failiar,
        [4] Buy Legendary Kind Familar,
        [5] Buy Legendary Cunning Familiar,
        [6] Buy Legendary Cruelty Failiar`
      );
    }
  }
}

export default BuyFamiliarChoice;