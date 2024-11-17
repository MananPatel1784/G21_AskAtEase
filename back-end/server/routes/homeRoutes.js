const express = require("express");
const router = express.Router();

const { showProfileAnalytics,deactivateAccount,deleteAccount,reactivateAccount } = require("../controllers/myProfileControllers");

router.get("/:id/myProfile", showProfileAnalytics);

// Deactivate user account
router.put("/:id/deactivate", deactivateAccount);
router.delete("/:id/myprofile",deleteAccount)
router.post("/:id/myprofile",reactivateAccount)
module.exports = router;