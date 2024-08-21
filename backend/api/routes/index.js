// Importamos el módulo de enrutamiento de Express y creamos un enrutador.
const router = require("express").Router();

// Usamos el enrutador general para manejar todas las peticiones dirigidas a las direciones definidas para el resto de enrutadores.
router.use("/Client", require("./Client.router"));
router.use("/Dev", require("./Dev.router"));
router.use("/DevTeam", require("./DevTeam.router"));
router.use("/Project", require("./Project.router"));
router.use("/Task", require("./Task.router"));
router.use("/auth", require("./auth.router"));

// Exportamos el enrutador para que pueda ser utilizado por otros archivos en nuestra aplicación.
module.exports = router;