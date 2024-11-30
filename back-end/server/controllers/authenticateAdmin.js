const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.authenticateAdmin = async (username, password) => {
    try {
        const admin = await User.findOne({ username });

        if(!admin) {
            return false;
        }

        const isPasswordMatch = await bcrypt.compare(password, admin.password);

        if(!isPasswordMatch) {
            return false;
        }

        return admin;
    }
    catch (err) {
        console.error("Error authenticating admin:", err);
        return false;
    }
};