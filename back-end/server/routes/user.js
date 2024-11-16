const express = require("express");
const { handleSignUp } = require("../controllers/signup");
// const { login } = require("../controllers/login");

const router = express.Router();

// Correct route and validation order
// router.post('/login', login);  // First, validate the login, then call the login handler
router.post('/', handleSignUp);  // Validate the signup data first, then handle signup

module.exports = router;