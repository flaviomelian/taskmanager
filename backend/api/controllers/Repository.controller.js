const Repository = require("../models/Repository.model.js");

const getAllRepositories = async (request, response) => {
  try {
    const repositorys = await Repository.findAll();
    return response.status(200).json(repositorys);
  } catch (error) {
    console.log(error);
  }
};

const getOneRepository = async (req, res) => {
  try {
    const repository = await Repository.findByPk(req.params.id);
    if (repository) {
      return res.status(200).json(repository);
    } else {
      return res.status(404).send("Repository not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createRepository = async (req, res) => {
  try {
    const repository = await Repository.create({
      user_id: req.body.user_id,
      Repository: req.body.Repository
    });
    return res
      .status(200)
      .json({ message: "Repository created", repository: repository });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateRepository = async (req, res) => {
  try {
    const repository = await Repository.findByPk(req.params.id);
    const updateRepository = await Repository.update(req.body);
    repository.save();
    if (updateRepository) {
      return res
        .status(200)
        .json({ message: "Repository updated", repository: updateRepository });
    } else {
      return res.status(404).send("Repository not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteRepository = async (req, res) => {
  try {
    const repository = await Repository.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (repository) {
      return res.status(200).json("Repository deleted");
    } else {
      return res.status(404).send("Repository not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports =  {
  getAllRepositories,
  getOneRepository,
  createRepository,
  updateRepository,
  deleteRepository,
};