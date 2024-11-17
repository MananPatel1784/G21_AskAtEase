const express = require("express");
const router = express.Router();

const { replyToAnswer } = require("../controllers/replyController");

router.post("/", replyToAnswer);

module.exports = router;