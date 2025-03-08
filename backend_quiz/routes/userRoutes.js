const router = require("express").Router();
const {
  creerUtilisateur,
  connecterUtilisateur,

} = require("../controllers/userControllers");

router.route("/user/inscription").post(creerUtilisateur);
router.route("/user/connexion").post(connecterUtilisateur);

module.exports = router;
