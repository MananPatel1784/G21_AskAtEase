require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');  // Ensure you import your user model

const login = async (req, res) => {
    try {
        const { emailId, password } = req.body;  // Extract email and password from request body
        // const errorMsg = 'Authentication failed. Email or password is invalid';

        // Find user by email
        const user = await UserModel.findOne({ emailId: emailId });
        if (!user) {
            return res.status(403).json({ message: "Email Id not found!!", success: false });
        }

        // Compare passwords
        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if (!isPasswordEqual) {
            return res.status(403).json({ message: "Invalid Password!!", success: false });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            { emailId: user.emailId, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }  // Correct key for expiration
        );

        // Return success response
        res.status(201).json({
            message: "Sign In Successfully",
            success: true,
            token: jwtToken
        });

    } catch (err) {
        // Handle internal server errors
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

module.exports = {
    login
};