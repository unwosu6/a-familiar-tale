import GameCard from "./GameCard.jsx";

import { Card, CardActionArea, Grid, Typography, Box, AccordionDetails } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function CardList(props) {
  const { game, setGameStateChange, cards, cardType } = props;
  const navigate = useNavigate();

  return (
    <AccordionDetails>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {cards.map((card) => (
          <GameCard
            key={card.uuid}
            game={game}
            setGameStateChange={setGameStateChange}
            card={card}
            cardType={cardType}
          />
        ))}
      </Grid>
    </AccordionDetails>
  );
}

export default CardList;
