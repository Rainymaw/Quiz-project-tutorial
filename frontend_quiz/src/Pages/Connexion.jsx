import { Grid2, Box, TextField, Button } from "@mui/material";
import { useRef } from "react";
function Connexion() {
  let formRef = useRef();
  let handleClick = async () => {
    const formdata = new FormData(formRef.current);
    const data = {
      email: formdata.get("email"),
      password: formdata.get("password"),
    };
    const response = await fetch("http://localhost:5678/api/user/connexion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const resData = await response.json();
    localStorage.setItem("token", resData["token"]);
    console.log(resData);
  };
  return (
    <Grid2 component="form" ref={formRef}>
      <h1>Formulaire d'inscription</h1>
      <TextField name="email" label="email" type="email" />
      <TextField name="password" label="password" type="password" />
      <Button onClick={() => handleClick()}>Connecte-toi</Button>
    </Grid2>
  );
}

export default Connexion;
