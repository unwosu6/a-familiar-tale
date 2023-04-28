import { Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Game from "../../../model/Game.js";

function Start(props) {
  const { setGame } = props;
  const navigate = useNavigate();

  const handleOnClickTwo = () => {
    setGame(new Game(2));
    navigate("/game", { replace: true });
  };
  const handleOnClickThree = () => {
    setGame(new Game(3));
    navigate("/game", { replace: true });
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Typography>How many players?</Typography>
      </Grid>
      <Grid item xs={3}>
        <Button
          color="primary"
          size="medium"
          variant="outlined"
          onClick={handleOnClickTwo}
        >
          2
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          color="primary"
          size="medium"
          variant="outlined"
          onClick={handleOnClickThree}
        >
          3
        </Button>
      </Grid>
    </Grid>
  );
}

export default Start;
