const express = require('express');
const router = express.Router();

const questionRouter = require('./question');
const answerRouter = require('./answer');
const { findSimilarQuestions } = require('../controllers/questionController');

router.get("/", (req, res) => {
    res.send("This API is reserved for AskAtEase!!");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.use('/search',findSimilarQuestions); 

module.exports = router;