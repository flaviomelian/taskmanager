const Project = require("../models/Project.model.js");

const getAllProjects = async (request, response) => {
  try {
    const Projects = await Project.findAll();
    return response.status(200).json(Projects);
  } catch (error) {
    console.log(error);
  }
};

const getOneProject = async (req, res) => {
  try {
    const Project = await Project.findByPk(req.params.id);
    if (Project) {
      return res.status(200).json(Project);
    } else {
      return res.status(404).send("Project not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProject = async (req, res) => {
  try {
    const project = await Project.create({
      user_id: req.body.user_id,
      Project: req.body.Project
    });
    return res
      .status(200)
      .json({ message: "Project created", project: project });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    const updateProject = await Project.update(req.body);
    project.save();
    if (updateProject) {
      return res
        .status(200)
        .json({ message: "Project updated", project: updateProject });
    } else {
      return res.status(404).send("Project not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteProject = async (req, res) => {
  try {
    const project = await Project.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (project) {
      return res.status(200).json("Project deleted");
    } else {
      return res.status(404).send("Project not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports =  {
  getAllProjects,
  getOneProject,
  createProject,
  updateProject,
  deleteProject,
};