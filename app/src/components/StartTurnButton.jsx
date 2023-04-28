import { Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Game from "../../../model/Game.js";

function StartTurnButton(props) {
  const { game } = props;
  const navigate = useNavigate();

  const handleOnClick = () => {
    game.getCurPlayer().drawHand();
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
