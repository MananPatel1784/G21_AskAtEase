const bcrypt=require("bcrypt");
const User = require("../models/user");
const { handleSignUp, validatePassword } = require("./signup");

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
};

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

exports.reactivateAccount = async (req, res) => {
    try {
        const userId = req.params.id;

        // Update user status to "active"
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { isActive: true },
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
//change password
exports.changePassword = async (req, res) => {
    try {
        const { newPassword } = req.body; // Get the new password from the request body
        const _id = req.params.id; // Get the user ID from the decoded token

        if (!newPassword) {
            return res.status(400).json({ error: "New Password is required!!" });
        }

        if (!validatePassword(newPassword)) {
            return res.status(400).json({
                error: "Password should be at least 8 characters and contain atleast one uppercase letter, one lowercase letter, one numerical value and one special character!!"
            });
        }
        const user = await user.findById(_id);
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update password", details: error.message });
    }
};

exports.followUser = async (req, res) => {
    try {
        const { followerId, followingId } = req.params;
        
        const user = await User.findById(followerId);
        const userToFollow = await User.findById(followingId);

        if(!user) return res.status(404).json({ status: false, error: "Follower user not found" });

        if(!userToFollow) return res.status(404).json({ status: false, error: "Following user not found" });

        user.following.push(followingId);
        userToFollow.followers.push(followerId);

        res.json({ status: true, message: "User followed successfully" });
    }
    catch (err) {
        res.status(500).json({ status: false, error: "Failed to follow user"});
    }
};