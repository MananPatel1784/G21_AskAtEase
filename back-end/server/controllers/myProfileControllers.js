const User = require("../models/user");

exports.showProfileAnalytics = async (req, res) => {
    const _id = req.params.id;

    try {
        const myProfile = await User.findById(_id);

        if (!myProfile) return res.status(404).json({ error: "Profile Not Found!!" });

        const followersCount = myProfile.followers.length;
        const followingCount = myProfile.following.length;

        res.json({ followers: followersCount, following: followingCount });
    }
    catch (err) {
        res.status(500).json({ error: "Error Fetching Analytics!!" });
    }
};

exports.deactivateAccount = async (req, res) => {
    try {
        const userId = req.params.id;

        // Update user status to "deactivated"
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { isActive: false },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User account deactivated", user: updatedUser });
    } catch (err) {
        res.status(500).json({ error: "Failed to deactivate user account" });
    }
}
exports.deleteAccount = async (req, res) => {
    try {
        const userId = req.params.id;

        // Delete associated data (questions, answers)
        await Question.deleteMany({ userId });
        await Answer.deleteMany({ userId });

        // Delete the user
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User account deleted permanently" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete user account" });
    }
};
exports.reactivateAccount =  async (req, res) => {
  try {
    const userId = req.params.id;

    // Update user status to "active"
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { status: "active" },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User account reactivated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: "Failed to reactivate user account" });
  }
};
