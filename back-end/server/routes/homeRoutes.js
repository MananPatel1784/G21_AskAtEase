const express = require("express");
const router = express.Router();

const { showProfileAnalytics,deactivateAccount,deleteAccount } = require("../controllers/myProfileControllers");

router.get("/:id/myProfile", showProfileAnalytics);

// Deactivate user account
router.put("/:id/deactivate", deactivateAccount);
router.delete("/:id/myprofile",deleteAccount)
  
module.exports = router;