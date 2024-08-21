const Client = require("../models/Client.model.js");

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    return response.status(200).json(clients);
  } catch (error) {
    console.log(error);
  }
};

const getOneClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (client) {
      return res.status(200).json(client);
    } else {
      return res.status(404).send("Client not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createClient = async (req, res) => {
  try {
    const client = await Client.create({
      user_id: req.body.user_id,
      Client: req.body.Client
    });
    return res
      .status(200)
      .json({ message: "Client created", Client: client });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    const updateClient = await Client.update(req.body);
    client.save();
    if (updateClient) {
      return res
        .status(200)
        .json({ message: "Client updated", client: updateClient });
    } else {
      return res.status(404).send("Client not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteClient = async (req, res) => {
  try {
    const client = await Client.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (client) {
      return res.status(200).json("Client deleted");
    } else {
      return res.status(404).send("Client not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllClients,
  getOneClient,
  createClient,
  updateClient,
  deleteClient,
};