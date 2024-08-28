const {DataTypes} = require("sequelize");
const {connection} = require("../../database/index");

const Repository = connection.define(
  "Repository",
  {
    name: {
      type: DataTypes.STRING,
    },
    ini: {
        type: DataTypes.DATE,
    },
    description: {
        type: DataTypes.STRING
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Repository;