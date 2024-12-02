const express = require('express');
const router = express.Router();

const questionDB = require('../models/question');
const User = require('../models/user');

///kkasfhkaskh
router.post("/:userId/add", async (req, res) => {
    
    try {
        const newQuestion = await questionDB.create({
            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl
        });
        
        const _id = req.params.userId;
        const user = await User.findById(_id);

        newQuestion.userId = _id;
        user.questionsAsked.push(req.body.questionName);
        console.log(user);
        await user.save();

        res.status(201).json({
            status: true,
            message: "Question added successfully"
        });           
    }
    catch (e) {
        res.status(500).json({
            status: false,
            message: "Error while adding question"
        })
    }
});

router.get("/", async (req, res) => {
    try {
        await questionDB.aggregate([
            {
                $lookup: {
                    from: "answers", // collection to join
                    localField: "_id", // field from input document
                    foreignField: "questionId",
                    as: "allAnswers",
                },
            },
        ]).exec().then((doc) => {
            res.status(200).send(doc);
        }).catch((error) => {
            res.status(500).json({
                status: false,
                message: "Unable to get the question details"
            });
        })
    }
    catch (e) {
        res.status(500).send({
            status: false,
            message: "Unexpected error"
        });
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const _id = req.params.userId;
        const user = await User.findById(_id);

        if(!user) return res.status(404).json({ status: false, message: "User not found" });

        res.json({ status: true, questionsAsked: user.questionsAsked });
    }
    catch (err) {
        res.status(500).json({ status: false, error: "Unexpected error" });
    }
});

router.put("/:userId/:questionId", async (req, res) => {
    const _id = req.params.questionId;
    
    try {
        const question = await questionDB.findById(_id);
        
        if (!question) return res.status(404).json({ error: "Question not found" });

        const { newQuestionName, newQuestionUrl } = req.body;

        if(newQuestionName) {
            const userId = req.params.userId;
            const user = await User.findById({ _id: userId });
            if(!user) return res.status(404).json({ error: "User not found" });
            
            const index = user.questionsAsked.indexOf(question.questionName);

            question.questionName = newQuestionName;
            if(index !== -1) user.questionsAsked[index] = newQuestionName;

        }
        if(newQuestionUrl) question.questionUrl = newQuestionUrl;

        res.json({ status: true, message: "Question updated successfully" });
    }
    catch (err) {
        res.status(500).json({ status: false, error: "Error updating question!!" });
    }
})

router.delete("/:userId/:questionId", async (req, res) => {
    try {
        const _id = req.params.questionId;

        await questionDB.deleteOne({ _id: _id }).then((doc) => {
            const userId = req.params.userId;
            const user = User.findById({ _id: userId });
            if(!user) return res.status(404).json({ error: "User not found" });

            const index = user.questionsAsked.indexOf(doc.questionName);
            if(index !== -1) user.questionsAsked.splice(index, 1);
            
            res.status(200).json({ status: true, message: "Question deleted successfully!!" });
        }).catch((err) => {
            res.status(400).json({ status: false, message: "No quesion found.." });
        });
    }
    catch (err) {
        res.status(500).json({ status: false, error: "Unexpected error" });
    }
});

module.exports = router;