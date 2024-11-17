require("dotenv").config();

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const authenticateAdmin = require("../controllers/authenticateAdmin");
const authorizeAdmin = require("../MiddleWare/authorizeAdmin");
const user = require("./user");
const User = require("../models/user");
const Question = require("../models/question");
const Answer = require("../models/answer");
const sponsorRoute = require("./sponsor");

// Generate a token for an admin user
function generateAdminToken(adminUser) {
    const payload = {
        id: adminUser.id,
        role: "admin"
    };

    // Sign the token with a secret key
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
}

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const isAdminAuthenticated = await authenticateAdmin(username, password);

    if (isAdminAuthenticated) {
        const token = generateAdminToken({ id: isAdminAuthenticated.id });
        res.json({ token });
    }
    else {
        res.status(401).json({ message: "Invalid admin credentials!!" });
    }
});

router.use("/signup", user);

// Get all users
router.get("/users", authorizeAdmin, async (req, res) => {
    try {
        const allUsers = await user.find();
        res.json(allUsers);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch users!!" });
    }
});

// Get a specific user by ID
router.get("/users/:id", authorizeAdmin, async (req, res) => {
    try {
        const userById = await user.findById(req.params.id);

        if (!userById) return res.status(404).json({ error: "User not found!!" });

        res.json(userById);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch user!!" });
    }
});

// Update user details
router.put("/users/:id", authorizeAdmin, async (req, res) => {
    try {
        const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedUser) return res.status(404).json({ error: "User not found!!" });

        res.json(updatedUser);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to update user!!" });
    }
});

// Delete a user by ID
router.delete("/users/:id", authorizeAdmin, async (req, res) => {
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.id);

        if (!deletedUser) return res.status(404).json({ error: "User not found!!" });

        res.json({ message: "User deleted successfully!!" });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to delete user!!" });

    }
});

// Get analytics about platform usage
router.get("/analytics", async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalQuestions = await Question.countDocuments();
        const totalAnswers = await Answer.countDocuments();

        res.json({
            totalUsersRegistered: totalUsers,
            totalQuestionsAsked: totalQuestions,
            totalAnswersGiven: totalAnswers
        });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch analytics" });
    }
});

// managing Sponsors
router.use("/sponsors", sponsorRoute);

router.delete("/questions/:id", authorizeAdmin, (req, res) => {
    const questionId = req.response.id;
    // Logic to delete the question
    res.send(`Question with ID ${questionId} has been deleted by admin.`);
});

module.exports = router;