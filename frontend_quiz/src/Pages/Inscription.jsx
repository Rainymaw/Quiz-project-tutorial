import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";

function Inscription() {
  const formRef = useRef();
  /* 
    Cette page web contiendra le formulaire d'inscription avec :
    -Nom
    -Prénom
    -Email
    -Mot de passe
    */
  let handleClick = () => {
    const formdata = new FormData(formRef.current);
    const data = {
      firstname: formdata.get("firstname"),
      lastname: formdata.get("lastname"),
      email: formdata.get("email"),
      password: formdata.get("password"),
    };
    fetch("http://localhost:5678/api/user/inscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        marginTop: "100px",
      }}
      container
      ref={formRef}
      spacing={2}
      component="form"
    >
      <h1>Formulaire d'inscription</h1>
      <TextField
        sx={{ width: "60%" }}
        type="text"
        name="firstname"
        label="First Name"
      />
      <TextField
        type="text"
        sx={{ width: "60%" }}
        name="lastname"
        label="Last Name"
      />
      <TextField
        type="email"
        sx={{ width: "60%" }}
        name="email"
        label="Email"
      />
      <TextField
        type="password"
        sx={{ width: "60%" }}
        name="password"
        label="Password"
      />
      <Button
        variant="contained"
        color="success"
        sx={{ width: "60%" }}
        onClick={() => handleClick()}
      >
        Inscription
      </Button>
    </Box>
  );
}

export default Inscription;
