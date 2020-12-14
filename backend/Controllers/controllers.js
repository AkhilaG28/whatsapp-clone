const express = require("express");
const dotenv = require("dotenv");
const Messages = require("../Models/Whatsapp");
dotenv.config();

const getMsg = (req, res) => {
  res.status(200).send("Jello World!");
};

const syncMsgs = (req, res) => {
  Messages.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
};

const postMsg = (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(`new message created: \n ${data}`);
  });
};

module.exports = {
  getMsg,
  syncMsgs,
  postMsg,
};
