const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions"
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Space = mongoose.model("spaces", spaceSchema);

module.exports = Space;