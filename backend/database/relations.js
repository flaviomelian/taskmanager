const DevTeam = require("../api/models/DevTeam.model");
const Project = require("../api/models/Project.model");
const Client = require("../api/models/Client.model");
const Dev = require("../api/models/Dev.model");
const Task = require("../api/models/Task.model");
const initializeRelations = () => {
  //RELACIONES
  try {
    DevTeam.hasMany(Dev);
    Dev.belongsToMany(DevTeam, {through: "Projects_DevTeams"});
    DevTeam.hasMany(Project);
    Project.belongsTo(DevTeam);
    Project.belongsTo(Client);
    Client.hasMany(Project);
    Project.hasMany(Task);
    Dev.hasMany(Task);
    Task.belongsToMany(Dev, {through: "Dev_Task"});
    Task.belongsToMany(Project, {through: "Project_Task"});
    console.log("Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;