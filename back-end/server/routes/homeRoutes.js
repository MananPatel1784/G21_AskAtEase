const express = require("express");
const router = express.Router();

const { showProfileAnalytics,deactivateAccount } = require("../controllers/myProfileControllers");

router.get("/:id/myProfile", showProfileAnalytics);

// Deactivate user account
router.put("/:id/deactivate", deactivateAccount);
  
module.exports = router;