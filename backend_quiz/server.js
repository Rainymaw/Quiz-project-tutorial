const express = require("express");
const quizRoutes = require("./routes/quizRoutes");
const userRoutes = require("./routes/userRoutes");
const { connection } = require("./models/database");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); //Récupére les variables du fichier .env

const app = express();
const PORT = process.env.PORT || 5000;

connection().then(() => {
  console.log("Connected to mongodb database");
});
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");

app.use("/api", quizRoutes);
app.use("/api", userRoutes);
app.listen(PORT, () => {
  console.log("listening to port : ", PORT);
});
