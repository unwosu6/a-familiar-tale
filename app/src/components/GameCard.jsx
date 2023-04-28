import { Card, CardActionArea, Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router";

const styles = {
  card: {
    margin: "1rem",
    width: "16rem",
  },
  cardContent: {
    minHeight: "8rem",
  },
};

function GameCard(props) {
  const { card, cardType, game, setGameStateChange } = props;
  const navigate = useNavigate();

  let handleOnClick = () => {
    console.log("card has no type");
  };

  const handleOnClickCenterRowCard = (event) => {
    console.log(card.name);
    setGameStateChange((prevState, props) => ({
      counter: prevState.counter + 1,
    }));
  };

  const handleOnClickHandCard = (event) => {
    // console.log("GAME", card.id);
    game.getCurPlayer().playCardFromHandById(card.id);
    setGameStateChange((prevState, props) => ({
      counter: prevState.counter + 1,
    }));
  };

  const handleOnClickPlayedCard = (event) => {
    alert("You cannot un-play a card");
  };

  if (cardType === "center row") {
    handleOnClick = handleOnClickCenterRowCard;
  } else if (cardType === "hand") {
    handleOnClick = handleOnClickHandCard;
  } else if (cardType === "played") {
    handleOnClick = handleOnClickPlayedCard;
  }

  return (
    <>
      <Card style={styles.card}>
        <CardActionArea onClick={handleOnClick}>
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
                  {card.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle" color={"#707070"}>
                  <br />
                  type: {card.getTypeString(card.type)} <br />
                  cost: {card.cost} <br />
                  fulfilment: {card.fulfilment} <br />
                  description: {card.description} <br />
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}

export default GameCard;
