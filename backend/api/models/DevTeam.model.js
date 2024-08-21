const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const DevTeam = connection.define(
  "DevTeam",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true, //createdAt and updatedAt
  }
);

module.exports = DevTeam;