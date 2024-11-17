const mongoose = require("mongoose");

const RepliesSchema = new mongoose.Schema({
    reply: String,
    answerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "answers",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Replies = mongoose.model("replies", RepliesSchema);

module.exports = Replies;