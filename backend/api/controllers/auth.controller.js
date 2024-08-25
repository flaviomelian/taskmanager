// Importamos los modelos de usuario y contacto
const Dev = require("../models/Dev.model");
const env = require("dotenv").config();

// Importamos las librerías para manejar tokens y cifrado de contraseñas
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Client = require("../models/Client.model");

// Definimos la función signUp, que será una función asincrónica para manejar la creación de usuarios
const signup = async (req, res) => {
  console.log(req.body);
  
  try {
    const existingDev = await Dev.findOne({
      where: {
        email: req.body.email,
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
    const newDev = await Dev.create({
      name: req.body.name,
      surnames: req.body.surnames,
      password: req.body.password,
      email: req.body.email,
      role: req.body.rol,
      nick: req.body.nick,
      phone: req.body.phone,
    });

    console.log(newDev);
    

    // Creamos el payload del token, incluyendo el email del usuario
    const payload = { email: req.body.email };
    // Firmamos el token con una clave secreta y establecemos un tiempo de expiración
    const token = jwt.sign(payload, env.parsed.SECRET);

    // Si todo es correcto, devolvemos el token al usuario con un estado 200 (OK)
    return res.status(200).json({ token }); // === { token: token }
  } catch (error) {
    // Si hay un error, lo registramos y devolvemos un error 500 (Error interno del servidor)
    console.log("Error signing up Dev", error);
    return res.status(500).json(error);
  }
};

// Definición de la función 'login' que es asincrónica para manejar peticiones de inicio de sesión
const login = async (req, res) => {
  try {
    // Intenta encontrar un usuario en la base de datos que coincida con el email proporcionado
    console.log(req.body);
    const dev = await Dev.findOne({
      where: {
        email: req.body.email, // El email viene del cuerpo de la petición
      },
    });

    // Si no se encuentra un usuario con el email proporcionado, devuelve un error 404
    if (!dev){
      console.log("No se encontro el dev");
      return res.status(401).send("email or password wrong"); // Mensaje de error indicando que el email o contraseña son incorrectos
    }

    // Utiliza bcrypt para comparar la contraseña proporcionada con la almacenada en la base de datos
    const checkPass = bcrypt.compareSync(req.body.passwd, dev.dataValues.password);
    console.log(checkPass);
    
    // Si la contraseña es correcta
    if (checkPass) {
      // Crea un payload con el email del usuario
      const payload = { email: req.body.email };
      // Firma un token JWT usando una clave secreta y establece un tiempo de expiración
      const token = jwt.sign(payload, env.parsed.SECRET);
      // Devuelve el token generado con un estado 200, indicando éxito en el inicio de sesión
      return res.status(200).json({ token }); // El objeto json contiene el token generado
    } else {
      console.log("esto es por otra cosa...");
      // Si la contraseña no es correcta, devuelve un error 404
      return res.status(401).send("email or password wrong"); // Mensaje de error similar al anterior
    }
  } catch (error) {
    // En caso de un error durante el proceso, registra el error y devuelve un estado 500
    console.log("Error logging in", error); // Mensaje de error en consola
    return res.status(500).json(error); // Devuelve el error capturado como respuesta JSON
  }
};

const getRole = async (req, res) => {
  let user
  console.log ("email", req.body);
  
  try {
    user = await Dev.findOne({
      where: {
        email: req.body.email, // Utiliza el email contenido en el payload del token para buscar al usuario
      },
    });
  
    if (user.role === 'undefined'){
      user = await Client.findOne({
        where: {
          email: req.body.email, // Utiliza el email contenido en el payload del token para buscar al usuario
        },
      });
    };
    console.log(user);
    
    return user.role;
  } catch (error) {
    console.log("Error logging in", error); // Mensaje de error en consola
    return res.status(500).json(error); // Devuelve el error capturado como respuesta JSON
  }
}

// Exportamos la función signUp para que pueda ser utilizada en otros archivos
module.exports = {
  signup,
  login,
  getRole,
};