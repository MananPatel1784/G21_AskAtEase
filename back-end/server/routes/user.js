const express = require("express");
const {handleSignUp} = require("../controllers/signup");

const router = express.Router();

router.post("/", handleSignUp);

module.exports = router;