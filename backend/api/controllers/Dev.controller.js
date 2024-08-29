const { log } = require("console");
const Dev = require("../models/Dev.model.js");

const getAllDevs = async (request, response) => {
  try {
    const Devs = await Dev.findAll();
    return response.status(200).json(Devs);
  } catch (error) {
    console.log(error);
  }
};

const getOneDev = async (req, res) => {
  try {
    const dev = await Dev.findByPk(req.params.email);
    if (dev) {
      return res.status(200).json(dev);
    } else {
      return res.status(404).send("Dev not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createDev = async (req, res) => {
  try {
    console.log(req.body)
    const dev = await Dev.create({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    });
    return res
      .status(200)
      .json({ message: "Dev created", Dev: dev });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateDev = async (req, res) => {
  try {
    const dev = await Dev.findByPk(req.params.id);
    const updateDev = await Dev.update(req.body);
    Dev.save();
    if (updateDev) {
      return res
        .status(200)
        .json({ message: "Dev updated", dev: updateDev });
    } else {ç
        console.log("aslkijbhdalkjbd")
        console.log(dev, req.params.id);
      return res.status(404).send("Dev not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteDev = async (req, res) => {
  try {
    const dev = await Dev.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (dev) {
      return res.status(200).json("Dev deleted");
    } else {
      return res.status(404).send("Dev not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports =  {
  getAllDevs,
  getOneDev,
  createDev,
  updateDev,
  deleteDev,
};