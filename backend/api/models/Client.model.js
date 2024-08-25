const {DataTypes} = require("sequelize");
const {connection} = require("../../database/index");

const Client = connection.define(
  "Client",
  {
    DocID: {
      type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    surnames: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    nick: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Client;