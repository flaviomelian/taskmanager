const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/Task.controller.js");

router.get("/", checkAuth, checkAdmin, getAllTasks);
router.get("/:id", checkAuth, getOneTask);
router.post("/", checkAuth, createTask);
router.put("/:id", checkAuth, updateTask);
router.delete("/:id", checkAuth, deleteTask);

module.exports = router;