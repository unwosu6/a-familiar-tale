import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Button,
  TextField,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard.jsx";
import CardList from "../components/CardList.jsx";
import CardGroup from "../components/CardGroup.jsx";
import PlayerInfo from "../components/PlayerInfo.jsx";
import EndTurnButton from "../components/EndTurnButton.jsx";

function Board(props) {
  const { game, setGame, players, setPlayers } = props;
  const [gameStateChange, setGameStateChange] = useState(0);
  const [turnStarted, setTurnStarted] = useState(false);

  useEffect(() => {
    setGame(game);
  }, [gameStateChange]);

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        {players.map((num) => (
          <Grid key={num} item xs={3}>
            <PlayerInfo playerNum={num} game={game} />
          </Grid>
        ))}

        <Grid item xs={3} justify="center">
          <Box textAlign="center">
            <EndTurnButton
              game={game}
              setGameStateChange={setGameStateChange}
              setPlayers={setPlayers}
            />
          </Box>
        </Grid>
      </Grid>

      <CardGroup
        title={"Center Row"}
        game={game}
        setGameStateChange={setGameStateChange}
        cards={game.centerRow.cards}
        cardType={"center row"}
      />

      <CardGroup
        title={`Player ${game.curPlayer + 1} Hand`}
        game={game}
        setGameStateChange={setGameStateChange}
        cards={game.getCurPlayer().hand.cards}
        cardType={"hand"}
      />

      <CardGroup
        title={`Player ${game.curPlayer + 1} Played Cards`}
        game={game}
        setGameStateChange={setGameStateChange}
        cards={game.getCurPlayer().playedCards.cards}
        cardType={"played"}
      />

      <CardGroup
        title={`Player ${game.curPlayer + 1} Relics in Play`}
        game={game}
        setGameStateChange={setGameStateChange}
        cards={game.getCurPlayer().relicsInPlay.cards}
        cardType={"relic"}
      />

      <CardGroup
        title={`Player ${game.curPlayer + 1} Played Relics`}
        game={game}
        setGameStateChange={setGameStateChange}
        cards={game.getCurPlayer().playedRelics.cards}
        cardType={"played"}
      />
    </>
  );
}

export default Board;
