const DevTeam = require("../models/DevTeam.model.js");

const getAllDevTeams = async (request, response) => {
  try {
    const DevTeams = await DevTeam.findAll();
    return response.status(200).json(DevTeams);
  } catch (error) {
    console.log(error);
  }
};

const getOneDevTeam = async (req, res) => {
  try {
    const devTeam = await DevTeam.findByPk(req.params.id);
    if (devTeam) {
      return res.status(200).json(devTeam);
    } else {
      return res.status(404).send("DevTeam not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createDevTeam = async (req, res) => {
  try {
    const devTeam = await DevTeam.create({
      user_id: req.body.user_id,
      DevTeam: req.body.DevTeam
    });
    return res
      .status(200)
      .json({ message: "DevTeam created", DevTeam: devTeam });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateDevTeam = async (req, res) => {
  try {
    const devTeam = await DevTeam.findByPk(req.params.id);
    const updateDevTeam = await DevTeam.update(req.body);
    devTeam.save();
    if (updateDevTeam) {
      return res
        .status(200)
        .json({ message: "DevTeam updated", DevTeam: updateDevTeam });
    } else {
      return res.status(404).send("DevTeam not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteDevTeam = async (req, res) => {
  try {
    const DevTeam = await DevTeam.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (DevTeam) {
      return res.status(200).json("DevTeam deleted");
    } else {
      return res.status(404).send("DevTeam not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports =  {
  getAllDevTeams,
  getOneDevTeam,
  createDevTeam,
  updateDevTeam,
  deleteDevTeam,
};