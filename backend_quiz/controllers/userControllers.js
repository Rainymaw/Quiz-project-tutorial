const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { genererToken } = require("../middleware/authentication");
const creerUtilisateur = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  //Le mot de passe ne doit JAMAIS etre sauvegardé en clair
  const salt = await bcrypt.genSalt(Number(process.env.ROUNDS));
  console.log("mot de passe : ", password);
  console.log("Salt : ", salt);
  const hashPassword = await bcrypt.hash(password, salt);
  console.log("Mot de passe hashé :", hashPassword);
  const newUser = User.create({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashPassword,
  });
  res.json("utilisateur cree");
};

const connecterUtilisateur = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    res.json("Erreur, email introuvable");
  }
  const utilisateur = await User.findOne({ email: email });
  if (!utilisateur) {
    res.json("Erreur, l'utilisateur n'existe pas");
  }
  const match = await bcrypt.compare(password, utilisateur.password);
  if (!match) {
    res.json("Erreur mot de passe incorrect");
  }
  const token = genererToken({
    firstname: utilisateur.firstname,
    email: utilisateur.email,
    isAdmin: utilisateur.isAdmin,
    role: utilisateur.role,
  });
  res.cookie("token", token, { samSite: "none" });

  res.json({ token: token });
};



module.exports = { creerUtilisateur, connecterUtilisateur };
