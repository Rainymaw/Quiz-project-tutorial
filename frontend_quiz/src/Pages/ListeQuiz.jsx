import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Cookies from "js-cookie";

function ListeQuiz() {
  let [categories, setCategories] = useState();

  useEffect(() => {
    getCategoriesData();
  }, []);
  let getCategoriesData = async () => {
    const token = Cookies.get("token");
    const response = await fetch(
      "http://localhost:5678/api/question/category",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer : " + token,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setCategories(data.categories);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      {categories &&
        categories.map((category, index) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              width: "40%",
            }}
            key={index}
          >
            <Box sx={{ fontSize: "2rem" }}> {category} </Box>
            <Button
              component={Link}
              to={"/quiz/" + category}
              variant="contained"
              color="primary"
            >
              Acces au quiz
            </Button>
          </Box>
        ))}
    </Box>
  );
}

export default ListeQuiz;
