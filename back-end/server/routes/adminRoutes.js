const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const authenticateAdmin = require("../controllers/authenticateAdmin");
const authorizeAdmin = require("../MiddleWare/authorizeAdmin");
const user = require("./user");

// Generate a token for an admin user
function generateAdminToken(adminUser) {
    const payload = {
        id: adminUser.id,
        role: "admin"
    };

    // Sign the token with a secret key
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h"});
    return token;
}

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const isAdminAuthenticated = await authenticateAdmin(username, password);

    if(isAdminAuthenticated) {
        const token = generateAdminToken({ id: isAdminAuthenticated.id });
        res.json({ token });
    }
    else {
        res.status(401).json({ message: "Invalid admin credentials!!"});
    }
});

router.post("/signup", user);

router.get("/users", authorizeAdmin, (req, res) => {
    // Logic to retrieve all users
    res.send("This is the admin-only users list.");
});
router.delete("/questions/:id", authorizeAdmin, (req, res) => {
    const questionId = req.response.id;
    // Logic to delete the question
    res.send(`Question with ID ${questionId} has been deleted by admin.`);
});

module.exports = router;