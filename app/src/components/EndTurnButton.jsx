import { Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Game from "../../../model/Game.js";

function EndTurnButton(props) {
  const { game, setGameStateChange } = props;
  const navigate = useNavigate();

  const handleOnClick = () => {
    game.getCurPlayer().endTurn();
    game.updatePlayer();
    game.getCurPlayer().drawHand();
    setGameStateChange((prevState, props) => ({
      counter: prevState.counter + 1,
    }));
  };
  return (

        <Button
          color="primary"
          size="medium"
          variant="outlined"
          onClick={handleOnClick}
        >
          End Turn
        </Button>
     
  );
}

export default EndTurnButton;
