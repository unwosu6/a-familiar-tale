import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function NotFound() {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3">404 - Not Found!</Typography>
          <Link to={"/"}>
            <Typography variant="h7">Go Home</Typography>
          </Link>
        </Grid>
      </Box>
    </Container>
  )
}

export default NotFound;