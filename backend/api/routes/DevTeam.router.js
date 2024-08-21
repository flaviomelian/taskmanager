const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllDevTeams,
  getOneDevTeam,
  createDevTeam,
  updateDevTeam,
  deleteDevTeam,
} = require("../controllers/DevTeam.controller.js");

router.get("/", checkAuth, checkAdmin, getAllDevTeams);
router.get("/:id", checkAuth, getOneDevTeam);
router.post("/", checkAuth, createDevTeam);
router.put("/:id", checkAuth, updateDevTeam);
router.delete("/:id", checkAuth, deleteDevTeam);

module.exports = router;