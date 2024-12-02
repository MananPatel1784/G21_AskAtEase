// const express = require("express");
// const router = express.Router();

// const questionDB = require("../models/question");
// const answerDB = require('../models/answer');

// router.post('/', async (req, res) => {
//     try {
//         await answerDB.create({
//             answer: req.body.answer, 
//             questionId: req.body.questionId
//         }).then(async () => {
//             const _id = req.body.questionId;
//             const question = await questionDB.findById(_id);

//             if(!question) return res.status(404).json({ error: "Question not found!!" });

//             question.answers.push(req.body.answer);
//             question.save();
            
//             res.status(201).json({
//                 status: true,
//                 message: "Answer added successfully"
//             });
//         }).catch((e) => {
//             res.status(400).json({
//                 status: false, 
//                 message: "Bad request"
//             })
//         })
//     }
//     catch (e) {
//         res.status(500).json({
//             status: false,
//             message: "Error while adding answer"
//         })
//     }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const questionDB = require("../models/question");
const answerDB = require('../models/answer');

router.post('/', async (req, res) => {
    try {
        // Create a new answer document
        const newAnswer = await answerDB.create({
            answer: req.body.answer,
            questionId: req.body.questionId
        });

        // Find the question by ID and update it
        const question = await questionDB.findById(req.body.questionId);
        if (!question) {
            return res.status(404).json({ error: "Question not found!" });
        }

        // Add the answer's _id to the question's answers array
        question.answers.push(newAnswer.answer);
        await question.save();

        res.status(201).json({
            status: true,
            message: "Answer added successfully",
            answer: newAnswer
        });
    } catch (e) {
        console.error("Error while adding answer:", e);
        res.status(500).json({
            status: false,
            message: "Internal server error"
        });
    }
});

module.exports = router;