const User = require("../models/user");

exports.showProfileAnalytics = async (req, res) => {
    const _id = req.params.id;
    
    try {
        const myProfile = await User.findById(_id);

        if(!myProfile) return res.status(404).json({ error: "Profile Not Found!!" });

        const followersCount = myProfile.followers.length;
        const followingCount = myProfile.following.length;

        res.json({ followers: followersCount, following: followingCount });
    }
    catch (err) {
        res.status(500).json({ error: "Error Fetching Analytics!!" });
    }
};