const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllProjects,
  getOneProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/Project.controller.js");

router.get("/", checkAuth, checkAdmin, getAllProjects);
router.get("/:id", checkAuth, getOneProject);
router.post("/", checkAuth, createProject);
router.put("/:id", checkAuth, updateProject);
router.delete("/:id", checkAuth, deleteProject);

module.exports = router;