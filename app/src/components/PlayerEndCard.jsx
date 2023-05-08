import {
  Card,
  CardActionArea,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router";

const styles = {
  paper: {
    margin: "1rem",
  },
  winPaper: {
    background: "lavenderblush",
    margin: "1rem",
  },
};

function PlayerEndCard(props) {
  const { game, playerNum } = props;
  const player = game.getPlayer(playerNum);
  

  const getStyle = () => {
    if (game.playerWinOrder[0] === playerNum) {
      return styles.winPaper;
    } else {
      return styles.paper;
    }
  };

  const getPlace = () => {
    if (game.playerWinOrder[0] === playerNum) {
      return "First";
    } else if (game.playerWinOrder[1] === playerNum) {
      return "Second";
    } else if (game.playerWinOrder.length >= 3 && game.playerWinOrder[2] === playerNum) {
      return "third";
    }
    return "...";
  }

  return (
    <Box>
      <Paper style={getStyle()} elevation={1}>
        <Box display="flex" padding={2} width={"100%"} alignItems={"center"}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.25}
          >
            <Grid item>
              <Typography variant={"h6"} fontWeight={"bold"}>
                {getPlace()} Place: Player {playerNum + 1} <br />
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
            <Grid item>
              {player.wonKindness ? ( <Typography variant="subtitle" color={"#707070"}>Won the Kindness Quest <br /></Typography>) : (<></>) }
              {player.wonCunning ? ( <Typography variant="subtitle" color={"#707070"}>Won the Cunning Quest <br /></Typography>) : (<></>) }
              {player.wonCruelty ? ( <Typography variant="subtitle" color={"#707070"}>Won the Cruelty Quest <br /></Typography>) : (<></>) }
              <Typography variant="subtitle" color={"#707070"}>
                fulfilment: {player.fulfilment}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}

export default PlayerEndCard;
