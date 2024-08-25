const router = require("express").Router();
const { signup, login, getRole } = require("../controllers/auth.controller");

router.post("/signup", signup);
router.post("/login", login);
router.get("/role", getRole);

module.exports = router;