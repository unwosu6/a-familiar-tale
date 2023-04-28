import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Home(props) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/start", {replace:true});
  }

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
          Welcome to A Familiar Tale
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Button
          color="primary"
          size="medium"
          variant="outlined"  
          onClick={handleOnClick}
        >
          Play
        </Button>
      </Grid> 
    </Grid> 
  );
}

export default Home;
