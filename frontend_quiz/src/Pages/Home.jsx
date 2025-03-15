//On va commencer par implémenter une landing page qui contiendra les éléments suivants :
/*
 */

import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router";

function Home(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      {/* Hero Section */}
      <Typography sx={{ textAlign: "center" }} variant="h2">
        Welcome to the Quiz app
      </Typography>
      <Typography sx={{ fontSize: "2rem", textAlign: "center" }} variant="p">
        Testez vos connaissances dans plein de quiz différents
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "15px",
        }}
      >
        <Button component={Link} variant="contained" to="/connexion">
          Se Connecter
        </Button>
        <Button component={Link} variant="contained" to="/inscription">
          S'inscrire
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
