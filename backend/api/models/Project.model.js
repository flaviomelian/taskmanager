const {DataTypes} = require("sequelize");
const {connection} = require("../../database/index");

const Project = connection.define(
  "Project",
  {
    name: {
      type: DataTypes.STRING,
      unque: true,
    },
    ini: {
        type: DataTypes.DATE,
    },
    prevEnd: {
        type: DataTypes.DATE,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Project;