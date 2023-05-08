import { Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Game from "../../../model/Game.js";

function StartTurnButton(props) {
  const { game } = props;
  const navigate = useNavigate();

  const handleOnClick = () => {
    let nextPlayer = game.getCurPlayer();
    // nextPlayer.drawHand();
    nextPlayer.mana = 0;
    nextPlayer.attack = 0;
    // do ruins cards
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

export default StartTurnButton;
