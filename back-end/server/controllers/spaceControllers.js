const Space = require("../models/spaces");
const Question = require("../models/question");
const Answer = require("../models/answer");

// Create a new space
exports.createSpace = async (req, res) => {
    const { name, description } = req.body;

    try {
        const newSpace = new Space({ name, description });
        const savedSpace = await newSpace.save();
        res.status(201).json(savedSpace);
    }
    catch (err) {
        res.status(500).json({ error: "Error creating space!!" });
    }
};

// Get all spaces
exports.getAllSpaces = async (req, res) => {
    try {
        const spaces = await Space.find();
        res.status(200).json(spaces);
    }
    catch (err) {
        res.status(500).json({ error: "Error fetching spaces!!" });
    }
};

// Add a question to a space
exports.addQuestionToSpace = async (req, res) => {
    const _id = req.params.spaceId;
    const { questionName, questionUrl } = req.body;

    try {
        const space = await Space.findById(_id);
        
        if(!space) return res.status(404).json({ error: "Space not found!!" });

        const spaceId = _id;

        const newQuestion = new Question({ questionName, questionUrl, spaceId });
        const savedQuestion = await newQuestion.save();

        space.questions.push(savedQuestion._id);
        await space.save();

        res.status(200).json({ message: "Question added to space successfully!!", space });
    }
    catch (err) {
        res.status(500).json({ error: "Error adding question to space." });
    }
};

// Get all questions in a space
exports.getSpaceQuestions = async (req, res) => {
    const _id = req.params.spaceId;

    try {
        const space = await Space.findById(_id);

        if(!space) return res.status(404).json({ error: "Space not found!!" });

        const spaceWithQueAns = await space.populate({
            path: 'questions',
            populate: {
                path: 'answers'
            }
        });

        res.json({ spaceWithQueAns });
    }
    catch (err) {
        res.status(500).json({ error: "Error fetching questions from space!!" });
    }
};