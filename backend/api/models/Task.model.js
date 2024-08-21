const {DataTypes} = require("sequelize");
const {connection} = require("../../database/index");

const Task = connection.define(
  "Task",
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

module.exports = Task;