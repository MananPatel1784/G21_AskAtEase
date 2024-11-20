const express = require('express');
const router = express.Router();

const questionRouter = require('./question');
const answerRouter = require('./answer');
const spaceRouter = require("./spaceRoutes");
const replyRouter = require("./reply");
const { findSimilarQuestions } = require('../controllers/questionController');

router.get("/", (req, res) => {
    res.send("This API is reserved for AskAtEase!!");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.get('/search', findSimilarQuestions); 
router.use("/reply", replyRouter);
router.use("/spaces", spaceRouter);

module.exports = router;