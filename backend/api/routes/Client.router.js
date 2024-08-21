const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllClients,
  getOneClient,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/Client.controller.js");

router.get("/", checkAuth, checkAdmin, getAllClients);
router.get("/:id", checkAuth, getOneClient);
router.post("/", checkAuth, createClient);
router.put("/:id", checkAuth, updateClient);
router.delete("/:id", checkAuth, deleteClient);

module.exports = router;