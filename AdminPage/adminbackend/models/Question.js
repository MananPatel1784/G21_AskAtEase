const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionName: {
    type: String,
    required: true,
  },
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: [
    {
      type: String,
      ref: "Answers",
    },
  ],
  spaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "spaces",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

const Question = mongoose.model("Questions", QuestionSchema);

module.exports = Question;