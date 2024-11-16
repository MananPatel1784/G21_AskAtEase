const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionName: {
        type: String,
        required: true
    },
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "answers"
    }],
    spaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "spaces",
        required: true
    }
});

module.exports = mongoose.model("Questions", QuestionSchema);