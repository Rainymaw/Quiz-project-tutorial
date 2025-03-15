const router = require("express").Router();
const { getDashboardStats } = require("../controllers/adminControllers");
const { adminAccess, authorization } = require("../middleware/authentication");

router.route("/admin/stats").get(authorization, adminAccess, getDashboardStats);

module.exports = router;
