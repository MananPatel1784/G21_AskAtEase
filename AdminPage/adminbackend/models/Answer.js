const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answer: String,
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    replies: [{
        type: String,
        ref: "replies"
    }]
});

const Answer = mongoose.model("Answers", AnswerSchema);

module.exports = Answer;