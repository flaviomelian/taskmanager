// Importamos los modelos de usuario y contacto
const Dev = require("../models/Dev.model");
const env = require("dotenv").config();

// Importamos las librerías para manejar tokens y cifrado de contraseñas
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Definimos la función signUp, que será una función asincrónica para manejar la creación de usuarios
const signup = async (req, res) => {
  try {
    const existingDev = await Dev.findOne({
      where: {
        CIF: req.body.CIF,
      },
    });

    if (existingDev) {
      return res.status(409).json({ message: "Dev already exists" });
    }
    // Generamos una 'salt' para el cifrado de la contraseña. Esto ayuda a asegurar la contraseña aún más segura
    const salt = bcrypt.genSaltSync(parseInt("10"));
    // Ciframos la contraseña que viene en el cuerpo de la solicitud (req.body.password) usando la 'sal' generada
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    // Creamos un nuevo usuario con los datos proporcionados en la solicitud
    const Dev = await Dev.create({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role
    });

    // Creamos el payload del token, incluyendo el email del usuario
    const payload = { email: req.body.email };
    // Firmamos el token con una clave secreta y establecemos un tiempo de expiración
    const token = jwt.sign(payload, env.parsed.SECRET);

    // Si todo es correcto, devolvemos el token al usuario con un estado 200 (OK)
    return res.status(200).json({ token }); // === { token: token }
  } catch (error) {
    // Si hay un error, lo registramos y devolvemos un error 500 (Error interno del servidor)
    console.log("Error signing up Dev");
    return res.status(500).json(error);
  }
};

// Definición de la función 'login' que es asincrónica para manejar peticiones de inicio de sesión
const login = async (req, res) => {
  try {
    // Intenta encontrar un usuario en la base de datos que coincida con el CIF proporcionado
    const Dev = await Dev.findOne({
      where: {
        CIF: req.body.CIF, // El CIF viene del cuerpo de la petición
      },
    });

    // Si no se encuentra un usuario con el CIF proporcionado, devuelve un error 404
    if (!Dev) {
      return res.status(404).send("email or password wrong"); // Mensaje de error indicando que el email o contraseña son incorrectos
    }

    // Utiliza bcrypt para comparar la contraseña proporcionada con la almacenada en la base de datos
    const checkPass = bcrypt.compareSync(req.body.password, Dev.password);

    // Si la contraseña es correcta
    if (checkPass) {
      // Crea un payload con el email del usuario
      const payload = { CIF: req.body.CIF };
      // Firma un token JWT usando una clave secreta y establece un tiempo de expiración
      const token = jwt.sign(payload, env.parsed.SECRET);
      // Devuelve el token generado con un estado 200, indicando éxito en el inicio de sesión
      return res.status(200).json({ token }); // El objeto json contiene el token generado
    } else {
      // Si la contraseña no es correcta, devuelve un error 404
      return res.status(404).send("email or password wrong"); // Mensaje de error similar al anterior
    }
  } catch (error) {
    // En caso de un error durante el proceso, registra el error y devuelve un estado 500
    console.log("Error logging in"); // Mensaje de error en consola
    return res.status(500).json(error); // Devuelve el error capturado como respuesta JSON
  }
};

// Exportamos la función signUp para que pueda ser utilizada en otros archivos
module.exports = {
  signup,
  login,
};