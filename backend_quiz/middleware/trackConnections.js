const Connection = require("../models/connection");

const trackConnection = async (req, res, next) => {
  //Trés important, d'entourer votre code dans un try-catch pour attraper les potentielles erreurs
  //Du serveur
  //Try catch c'est une instruction qui fonctionne de la manière suivante :
  //Try : execute le code entre {}, si une erreur est détecté, alors catch est executé
  try {
    if (req.originalUrl.startsWith("/api/admin")) {
      //Si le navigateur client contacte la route administrateur, on va ignorer cette connexion
      return next();
    } else {
      //Dans le cas contraire, à chaque fois que l'API est utilisé, je rajouter + 1 au nombre de connexions
      let connection = await Connection.findOne();
      if (!connection) {
        connection = new Connection({ nbConnections: 1 });
      } else {
        connection.nbConnections += 1;
      }
      await connection.save();
      next();
    }
  } catch (error) {
    console.error("Erreur tracking : ", error);
    next();
  }
};

module.exports = trackConnection;
