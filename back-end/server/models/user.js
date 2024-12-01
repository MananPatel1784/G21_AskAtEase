const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    bookmarkedPost: [{
        type: String,
        ref: "Questions"
    }],
    followsSpaces: [{
        type: mongoose.Schema.Types.ObjectId,
    }],
    questionsAsked: [{
        type: String,
        ref: "Questions"
    }]
}, {timestamps: true});

const User = mongoose.model("users", userSchema);

module.exports = User;