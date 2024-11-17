const express = require("express");
const router = express.Router();

const { showProfileAnalytics } = require("../controllers/myProfileControllers");

router.get("/:id/myProfile", showProfileAnalytics);

module.exports = router;