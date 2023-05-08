import { Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Game from "../../../model/Game.js";

function EndTurnButton(props) {
  const { game, setPlayers, setGameStateChange } = props;
  const navigate = useNavigate();

  const handleOnClick = () => {
    let results = game.getCurPlayer().endTurn();
    for (let result of results) {
      if (result.message) {
      alert(result.message);
      }
    }
    let result = game.updatePlayer();
    if (result.message) {
      alert(result.message);
    }
    if (result.success === false) {
      setPlayers(result.players);
      navigate("/game-over", { replace: true });
    }
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
