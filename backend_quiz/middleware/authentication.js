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

module.exports = {
  genererToken,
  verifierToken,
};
