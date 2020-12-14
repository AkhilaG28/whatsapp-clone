const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

const { getMsg, syncMsgs, postMsg } = require("../Controllers/controllers");

router.get("/", getMsg);

router.get("/messages/sync", syncMsgs);

router.post("/message/new", postMsg);

module.exports = router;
