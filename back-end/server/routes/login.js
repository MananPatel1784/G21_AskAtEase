const express = require("express");
const { login } = require("../controllers/login");

const router = express.Router();

// Correct route and validation order
router.post('/', login);  // First, validate the login, then call the login handler

module.exports = router;