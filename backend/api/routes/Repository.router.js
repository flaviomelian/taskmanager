const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllRepositories,
  getOneRepository,
  createRepository,
  updateRepository,
  deleteRepository,
} = require("../controllers/repository.controller.js");

router.get("/", checkAuth, checkAdmin, getAllRepositories);
router.get("/:id", checkAuth, getOneRepository);
router.post("/", checkAuth, createRepository);
router.put("/:id", checkAuth, updateRepository);
router.delete("/:id", checkAuth, deleteRepository);

module.exports = router;