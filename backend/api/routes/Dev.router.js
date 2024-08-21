const router = require("express").Router();
const { checkAdmin } = require("../middlewares/auth.js");
const {
  getAllDevs,
  getOneDev,
  createDev,
  updateDev,
  deleteDev,
} = require("../controllers/Dev.controller.js");

router.get("/", getAllDevs);
router.get("/:id", getOneDev);
router.post("/", createDev);
router.put("/:id", updateDev);
router.delete("/:id", deleteDev);

module.exports = router;