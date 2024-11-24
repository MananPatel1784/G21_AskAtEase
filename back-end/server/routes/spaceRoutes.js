const express = require("express");
const {
    createSpace,
    getAllSpaces,
    addQuestionToSpace,
    getSpaceQuestions
} = require("../controllers/spaceControllers");

const router = express.Router();

// Create a space
router.post("/", createSpace);

// Get all spaces
router.get("/", getAllSpaces);

// Add a question to a space
router.put("/:spaceId/questions", addQuestionToSpace);

// Get all questions in a space
router.get("/:spaceId/questions", getSpaceQuestions);

module.exports = router;