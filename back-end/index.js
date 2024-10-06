const express = require("express");
const {connectToMongoDB} = require("./manualSignUp/connection");
const userRoute = require("./manualSignUp/server/routes/user");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb+srv://202201310:AskAtEase1234@askatease.rysvf.mongodb.net/?retryWrites=true&w=majority&appName=AskAtEase").then(() => {
    console.log("MongoDB connected successfully!!");
});

app.use(express.json());

app.use("/signup", userRoute);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));