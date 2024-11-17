const express = require("express");
const router = express.Router();

const {
    showProfileAnalytics,
    deactivateAccount,
    deleteAccount,
    reactivateAccount,
    changePassword,
} = require("../controllers/myProfileControllers");

router.get("/:id/myProfile", showProfileAnalytics);

// Deactivate user account
router.put("/:id/myProfile/deactivate", deactivateAccount);

// Delete user account
router.delete("/:id/myprofile/delete",deleteAccount);

// Reactivate account
router.put("/:id/myprofile/reactivate",reactivateAccount);

//change password
router.put("/:id/myprofile/changepassword",changePassword);

module.exports = router;