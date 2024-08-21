const Task = require("../models/Task.model.js");

const getAllTasks = async (request, response) => {
  try {
    const tasks = await Task.findAll();
    return response.status(200).json(tasks);
  } catch (error) {
    console.log(error);
  }
};

const getOneTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      return res.status(200).json(task);
    } else {
      return res.status(404).send("Task not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      user_id: req.body.user_id,
      Task: req.body.Task
    });
    return res
      .status(200)
      .json({ message: "Task created", task: task });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    const updateTask = await Task.update(req.body);
    task.save();
    if (updateTask) {
      return res
        .status(200)
        .json({ message: "Task updated", task: updateTask });
    } else {
      return res.status(404).send("Task not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteTask = async (req, res) => {
  try {
    const task = await Task.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (task) {
      return res.status(200).json("Task deleted");
    } else {
      return res.status(404).send("Task not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports =  {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
};