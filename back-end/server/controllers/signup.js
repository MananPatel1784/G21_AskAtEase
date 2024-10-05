const User = require("../models/user");

async function handleSignUp(req, res) {

    const body = req.body;
    
    if(!body || !body.username || !body.password || !body.emailId) {
        return res.status(400).json({error: "All fields are required!!"});
    }

    await User.create({
        username: body.username,
        password: body.password,
        emailId: body.emailId
    });

    return res.status(201).json({msg: "Success", username: body.username});
}

module.exports = {
    handleSignUp
};