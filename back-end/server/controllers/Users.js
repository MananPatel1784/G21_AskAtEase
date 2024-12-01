const User = require("../models/user");

// Get user profile by ID
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password") // Exclude password
      .populate("followers", "username")
      .populate("following", "username");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  const { username, emailId, isActive } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.username = username || user.username;
    user.emailId = emailId || user.emailId;
    user.isActive = isActive ?? user.isActive;

    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Follow a user
exports.followUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const currentUser = await User.findById(req.body.userId);

    if (!user || !currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.followers.includes(req.body.userId)) {
      user.followers.push(req.body.userId);
      currentUser.following.push(req.params.id);
      await user.save();
      await currentUser.save();
      return res.status(200).json({ message: "Followed successfully" });
    }

    res.status(400).json({ message: "Already following" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Unfollow a user
exports.unfollowUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const currentUser = await User.findById(req.body.userId);

    if (!user || !currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    user.followers = user.followers.filter(
      (id) => id.toString() !== req.body.userId
    );
    currentUser.following = currentUser.following.filter(
      (id) => id.toString() !== req.params.id
    );

    await user.save();
    await currentUser.save();
    res.status(200).json({ message: "Unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get followers list
exports.getFollowers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "followers",
      "username emailId"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.followers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get following list
exports.getFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "following",
      "username emailId"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.following);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
