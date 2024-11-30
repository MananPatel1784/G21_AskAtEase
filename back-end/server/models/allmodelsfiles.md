//answer.js
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

//questions.js
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
    // required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

const Question = mongoose.model("Questions", QuestionSchema);

module.exports = Question;

//replies.js
const mongoose = require("mongoose");

const RepliesSchema = new mongoose.Schema({
    reply: String,
    answerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answers",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Replies = mongoose.model("replies", RepliesSchema);

module.exports = Replies;
//spaces.js
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
        ref: "Questions"
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Space = mongoose.model("spaces", spaceSchema);

module.exports = Space;

//sponsors.js
const mongoose = require("mongoose");

const sponsorSchema = new mongoose.Schema({
    name: String,
    logoUrl: String,
    website: String,
});

const Sponsor = mongoose.model("Sponsor", sponsorSchema);

module.exports = Sponsor;

//user.js
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
    questionsAsked: [{
        type: String,
        ref: "Questions"
    }]
}, {timestamps: true});

const User = mongoose.model("users", userSchema);

module.exports = User;