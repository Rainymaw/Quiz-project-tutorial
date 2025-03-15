const Question = require("../models/question");
const User = require("../models/user");
const Connections = require("../models/connection");
const getDashboardStats = async (req, res) => {
  //Cette fonction va retourner les informations suivantes :
  //1-Le nombre de quiz dans ma base de données
  //2-Le nombre d'utilisateurs dans la base de données
  //3-Le nombre de connextion effectués vers le site web
  const connection = await Connections.findOne();
  let nbConnections = 0;
  if (!connection) {
    nbConnections = 0;
  } else {
    nbConnections = connection.nbConnections;
  }
  const number_questions = await Question.countDocuments();
  const number_users = await User.countDocuments();
  res.status(200).json({
    nbUsers: number_users,
    nbQuestions: number_questions,
    nbConnections: nbConnections,
  });
};

module.exports = { getDashboardStats };
