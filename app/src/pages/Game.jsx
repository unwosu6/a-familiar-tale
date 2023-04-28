import { useState, useEffect } from "react";
import {
  Typography,
  Container,
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
import PlayerInfo from "../components/PlayerInfo.jsx";
import EndTurnButton from "../components/EndTurnButton.jsx"

function Board(props) {
  const { game, setGame } = props;
  const [gameStateChange, setGameStateChange] = useState(0);
  
  useEffect(() => {
    setGame(game);
    console.log("GAME GAME GAME GAME", game.centerRow.cards);
  }, [gameStateChange]);

  // const navigate = useNavigate();

  // const handleOnClickCenterRowCard = (event) => {
  //   const id = event.target.id;
  //   console.log(event);
  //   const update = event.target.value;

  // };

  // const handleOnClickHandCard = (event) => {
  //   const id = event.target.id;
  //   game.getCurPlayer().playCardFromHandById(id);
  // };

  // const handleOnClickPlayedCard = (event) => {
  //   alert("You cannot un-played card");
  // };

  return (
    <>
      <PlayerInfo game={game} />
      
      <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box py={2}>
          <Typography variant="h6">{"Center Row"}</Typography>
        </Box>
      </AccordionSummary>
      <CardList game={game} setGameStateChange={setGameStateChange} cards={game.centerRow.cards} cardType={"center row"} />
    </Accordion>

    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box py={2}>
          <Typography variant="h6">{`Player ${game.curPlayer + 1} Hand`}</Typography>
        </Box>
      </AccordionSummary>
      <CardList game={game} setGameStateChange={setGameStateChange} cards={game.getCurPlayer().hand.cards} cardType={"hand"} />
    </Accordion>

    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box py={2}>
          <Typography variant="h6">{`Player ${game.curPlayer + 1} Played Cards`}</Typography>
        </Box>
      </AccordionSummary>
      <CardList game={game} setGameStateChange={setGameStateChange} cards={game.getCurPlayer().playedCards.cards} cardType={"played"} />
    </Accordion>

    <EndTurnButton game={game} setGameStateChange={setGameStateChange} />

    </>
  );
}

export default Board;
