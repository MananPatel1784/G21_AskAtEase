const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get total question count
router.get('/count', async (req, res) => {
  try {
    const count = await Question.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Route to get the number of questions asked by a user
// router.get("/:userId/questions/count", async (req, res) => {
//   const { userId } = req.params;

//   // Validate the userId format
//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ message: "Invalid user ID format" });
//   }

//   try {
//     // Check if user exists
//     const userExists = await User.findById(userId);
//     if (!userExists) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Count questions asked by the user
//     const questionCount = await Question.countDocuments({ userId });
//     res.json({ userId, questionCount });
//   } catch (err) {
//     console.error("Error fetching question count:", err.message);
//     res.status(500).json({ message: "Error fetching question count" });
//   }
// });


// Create question
router.post('/', async (req, res) => {
  const question = new Question({
    questionName: req.body.questionName,
    questionUrl: req.body.questionUrl,
    spaceId: req.body.spaceId,
    userId: req.body.userId
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;