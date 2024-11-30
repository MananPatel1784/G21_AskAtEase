const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
} = require("../controllers/Users");

// Routes
router.get("/:id/profile", getUserProfile); // Get user profile by ID
router.put("/:id/profile", updateUserProfile); // Update user profile
router.post("/:id/follow", followUser); // Follow a user
router.post("/:id/unfollow", unfollowUser); // Unfollow a user
router.get("/:id/followers", getFollowers); // Get followers list
router.get("/:id/following", getFollowing); // Get following list

module.exports = router;
