const express = require("express");
const userModel = require("../database/schema");
const app = express();

app.get("/userDatabase", async (req, res) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;