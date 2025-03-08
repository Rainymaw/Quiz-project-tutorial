const jwt = require("jsonwebtoken");

const genererToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_JWT, {
    expiresIn: "10m",
  });
  return token;
};

const verifierToken = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET_JWT);
  } catch (error) {
    return null;
  }
};

const authorization = async (req, res, next) => {
  //On commence d'abord par récupérer le token qui est envoyé par la requette Fetch

  const token = req.headers.authorization.replace("Bearer : ", "").trim();
  if (!token) {
    return res.status(401).json({ message: "Erreur token non-existant" });
  }
  const user = verifierToken(token);
  if (!user) {
    return res.status(403).json({ message: "Token invalide" });
  }
  req.user = user;
  next();
};

module.exports = {
  genererToken,
  verifierToken,
  authorization,
};
