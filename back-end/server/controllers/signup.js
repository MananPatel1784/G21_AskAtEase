// Whole done by Dishant and Sunay

const bcrypt = require("bcrypt");
const User = require("../models/user");

function validatePassword(password) {

    const hasUpperCase = /[A-Z]/; // At least one uppercase letter
    const hasLowerCase = /[a-z]/; // At least one lowercase letter
    const hasNumber = /[0-9]/; // At least one number
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    const isValid =
        hasUpperCase.test(password) &&
        hasLowerCase.test(password) &&
        hasNumber.test(password) &&
        hasSpecialChar.test(password) &&
        password.length >= 8; // Check minimum length (i.e., 8 characters)

    return isValid;
}

async function handleSignUp(req, res) {

    const {username, password, emailId, role} = req.body;
    
    if(!req.body || !username || !password || !emailId) {
        return res.status(400).json({error: "All fields are required!!"});
    }

    const existingUser1 = await User.findOne({ username });
    const existingUser2 = await User.findOne({ emailId });

    if(existingUser1) {
        return res.status(400).json({error: "Username already exists!!"});
    }

    if(existingUser2) {
        return res.status(400).json({error: "Email-Id already exists!!"});
    }

    if(!validatePassword(password)) {
        
        return res.status(400).json({
            error: "Password should be at least 8 characters and contain atleast one uppercase letter, one lowercase letter, one numerical value and one special character!!"
        });
    }

    const userRole = "user";
    if(role === "admin") userRole = "admin";
    
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    await User.create({
        username: username,
        password: secPass,
        emailId: emailId,
        role: userRole
    });

    return res.status(201).json({msg: "Successfully signed up!!"});
}

module.exports = {
    handleSignUp,
    validatePassword
};