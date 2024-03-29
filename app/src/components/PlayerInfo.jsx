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
  curPaper: {
    background: "lavenderblush",
    margin: "1rem",
  },
};

function PlayerInfo(props) {
  const { game, playerNum } = props;
  const player = game.getPlayer(playerNum);

  const getStyle = () => {
    if (game.curPlayer === playerNum) {
      return styles.curPaper;
    } else {
      return styles.paper;
    }
  };

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
                Player {playerNum + 1} <br />
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle" color={"#707070"}>
                mana: {player.mana} <br />
                attack: {player.attack} <br />
                kindness: {player.kindness} <br />
                cunning: {player.cunning} <br />
                cruelty: {player.cruelty} <br />
                cards left in deck: {player.deck.getNumCards()} <br />
                cards in discard: {player.discard.getNumCards()} <br />
                # unique guild members played: {player.uniqueGuildIDs.size} <br />
                # unique relics in play: {player.uniqueRelicsInPlayIDs.size} <br />
                total attack dealt: {player.totalAttackDealt} <br />
                fulfilment: {player.fulfilment}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}

export default PlayerInfo;
