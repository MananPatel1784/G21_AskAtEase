const express = require("express");
const router = express.Router();

const questionDB = require("../models/question");
const answerDB = require('../models/answer');

router.post('/', async (req, res) => {
    try {
        await answerDB.create({
            answer: req.body.answer, 
            questionId: req.body.questionId
        }).then(async () => {
            const _id = req.body.questionId;
            const question = await questionDB.findById(_id);

            if(!question) return res.status(404).json({ error: "Question not found!!" });

            question.answers.push(req.body.answer);
            question.save();
            
            res.status(201).send({
                status: true,
                message: "Answer added successfully"
            });
        }).catch((e) => {
            res.status(400).send({
                status: false, 
                message: "Bad request"
            })
        })
    }
    catch (e) {
        res.status(500).send({
            status: false,
            message: "Error while adding answer"
        })
    }
});

module. exports = router;