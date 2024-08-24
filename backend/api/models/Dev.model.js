const {DataTypes} = require("sequelize");
const {connection} = require("../../database/index");

const Dev = connection.define(
  "Dev",
  {
    name: {
      type: DataTypes.STRING,
    },
    surnames: {
      type: DataTypes.STRING,
    },
    devname: {
      type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.ENUM({
            values: ["front-end", "back-end", "dev-ops", "full-stack", "QA", "data-engineer", "master-scrum"]
        })
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Dev;