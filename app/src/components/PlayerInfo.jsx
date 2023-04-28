import {
  Card,
  CardActionArea,
  Grid,
  Typography,
  Box,
  Paper
} from "@mui/material";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router";

function PlayerInfo(props) {
  const { game } = props;
  const player = game.getCurPlayer();
  
  useEffect(() => {
    console.log("player", game.getCurPlayer())
  }, []);

  const { card, handleOnClick } = props;
  const navigate = useNavigate();

  return (
  <Box>
    <Paper variant="outlined">
      <Typography >
        Player {game.curPlayer + 1} <br/>
        mana: {player.mana} <br />
        attack: {player.attack} <br />
        kindness: {player.kindness} <br />
        cunning: {player.cunning} <br />
        cruelty: {player.cruelty} <br />
        cards left in deck: {player.deck.getNumCards()}
      </Typography>
      
    </Paper>
  </Box>
  );
}

export default PlayerInfo;