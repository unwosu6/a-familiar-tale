import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PlayerEndCard from "../components/PlayerEndCard.jsx";
import { useEffect } from "react";

function GameOver(props) {
  const { game, players } = props;
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/", {replace:true});
  }
  useEffect(() => {
    console.log("player", players);
    console.log("hello")
  }, [])

  return (  
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Typography>
          Thank you for playing A Familiar Tale
        </Typography>
      </Grid>
      {players.map((num) => (
          <Grid key={num} item xs={2}>
            <PlayerEndCard playerNum={num} game={game} />
          </Grid>
        ))}
      <Grid item xs={3}>
        <Button
          color="primary"
          size="medium"
          variant="outlined"  
          onClick={handleOnClick}
        >
          Play Again?
        </Button>
      </Grid> 
    </Grid> 
  );
}

export default GameOver;
