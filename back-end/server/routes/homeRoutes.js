const express = require("express");
const router = express.Router();

const {
    showProfileAnalytics,
    deactivateAccount,
    deleteAccount,
    reactivateAccount,
    changePassword,
    followUser,
    getTheFeed
} = require("../controllers/myProfileControllers");

// Get the Feed
router.get("/:id", getTheFeed);

// Show profile analytics
router.get("/:id/myProfile", showProfileAnalytics);

// Deactivate user account
router.put("/:id/myProfile/deactivate", deactivateAccount);

// Delete user account
router.delete("/:id/myprofile/delete", deleteAccount);

// Reactivate account
router.put("/:id/myprofile/reactivate", reactivateAccount);

// Change password
router.put("/:id/myprofile/changepassword", changePassword);

// Follow user
router.put("/:followerId/:followingId/follow", followUser);

module.exports = router;