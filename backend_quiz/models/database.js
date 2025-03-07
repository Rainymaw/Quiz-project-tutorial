/*
Dans le NoSQL : 
Base de données = Base qui contient toutes les données
Collection = structure qui regroupe tous les documents d'un type spécifié
Document = objet JSON qui contient les informations qu'on a ajouté


*/
//étape 1 : installez le package mongoose
// npm install mongoose
const mongoose = require("mongoose");

const connection = async () => {
  const database = await mongoose.connect(process.env.MONGO_URI);
  console.log("Connecté à mongoDB : ", database.connection.host);
  mongoose.connection.on("connected", () => {
    console.log("Mongoose est connecté à la base de données : ");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Attention, erreur lors de la connexion à mongoose : ", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose Déconnecté");
  });
};
module.exports = { connection };
