import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});

class CLI {
  constructor() {
  }

  promptUser(game, possibleInteractions) {
    let question = "Choices:\n";

    // if possibleInteractions is top level then do this
    for (let i = 1; i < possibleInteractions.length; i++) {
      let choice = possibleInteractions[i];
      question += `[${i}] ` + choice.getPrompt() + "\n";
    }
    let ans = "x";
    while (isNaN(ans)) {
      ans = prompt(question);
      console.log(isNaN(ans));
    }

    // else if it is a sub choice do this
    if (possibleInteractions[0] === "menu-type") {
      const choice = possibleInteractions[parseInt(ans)];
      console.log(possibleInteractions);
      console.log(choice);
      return choice;
    } else {
      game.interactionNum = parseInt(ans);
      return possibleInteractions[1];
    }

  }

  showResult(game, result) {
    // console.log(result);
    if (result.err !== "") {
      console.log(result.err);
    }

    if (result.success) {
      game.printGameState();
    }
  }
}

export default CLI;