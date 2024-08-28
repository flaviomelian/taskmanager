const router = require("express").Router();
const { checkAdmin, checkAuth } = require("../middlewares/auth.js");
const {
  getAllDevs,
  getOneDev,
  createDev,
  updateDev,
  deleteDev,
} = require("../controllers/Dev.controller.js");

router.get("/", getAllDevs);
router.get("/:id", checkAuth, getOneDev);
router.post("/", checkAuth, createDev);
router.put("/:id", checkAuth, updateDev);
router.delete("/:id", checkAuth, deleteDev);

module.exports = router;