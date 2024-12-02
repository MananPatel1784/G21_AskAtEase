const express = require('express');
const router = express.Router();
const Answer = require('../models/Answer');

// Get all answers
router.get('/', async (req, res) => {
  try {
    const answers = await Answer.find();
    res.json(answers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get total answer count
router.get('/count', async (req, res) => {
  try {
    const count = await Answer.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create answer
router.post('/', async (req, res) => {
  const answer = new Answer({
    answer: req.body.answer,
    questionId: req.body.questionId
  });

  try {
    const newAnswer = await answer.save();
    res.status(201).json(newAnswer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;