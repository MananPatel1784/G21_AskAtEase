const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answer: String,
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Answer = mongoose.model("Answers", AnswerSchema);

module.exports = Answer;