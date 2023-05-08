import { Accordion, AccordionSummary, Grid, Typography, Box, AccordionDetails } from "@mui/material";
import CardList from "./CardList.jsx";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router";

function CardGroup(props) {
  const { title, game, setGameStateChange, cards, cardType } = props;
  const navigate = useNavigate();

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box py={2}>
          <Typography variant="h6">{title}</Typography>
        </Box>
      </AccordionSummary>
      <CardList game={game} setGameStateChange={setGameStateChange} cards={cards} cardType={cardType} />
    </Accordion>
  );
}

export default CardGroup;
