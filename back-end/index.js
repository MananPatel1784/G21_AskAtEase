require('dotenv').config(); // Load environment variables

const express = require("express");
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
// const { connectToMongoDB } = require("./connection");
const session = require('express-session');
const path = require('path');
const userRoute = require('./server/routes/userRoute');
const PORT = process.env.PORT || 8000;

const db = require('./db');
const router = require('./server/routes');

// Connect to MongoDB
db.connect();

// Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

// Cors
app.use((req, res, next) => {
    req.headers("Access-Control-Allow-Origin", "*");
    req.headers("Access-Control-Allow-Headers", "*");
    next();
});

// Routes
app.use("/api", router);

// Static file serving
app.use('/uploads', express.static(path.join(__dirname, "../uploads")));
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Catch-all route to serve frontend's index.html
app.get("*", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
    } catch (e) {
        res.send("Oops! unexpected Error");
    }
});

app.use(cors()); // Use cors middleware for CORS handling

// MongoDB Connection
// connectToMongoDB(process.env.MONGODB_URI || "mongodb://localhost:27017/AskAtEase").then(() => {
//     console.log("MongoDB connected successfully!!");
// });

// Session configuration
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
}));

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.use("/", userRoute);
app.use("/signup", userRoute);
app.use("/login", userRoute);

// Start server
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));