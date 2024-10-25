const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');  // Ensure you import your user model

const login = async (req, res) => {
    try {
        const { emailID, password } = req.body;  // Extract email and password from request body
        const errorMsg = 'Authentication failed. Email or password is invalid';

        // Find user by email
        const user = await UserModel.findOne({ email: emailID });
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        // Compare passwords
        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if (!isPasswordEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }  // Correct key for expiration
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
module.exports={
    login
};
