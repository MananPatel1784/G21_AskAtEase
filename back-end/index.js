require('dotenv').config(); //Manan

const express = require("express");
const {connectToMongoDB} = require("./connection");
const userRoute = require("./server/routes/user");
const session = require('express-session'); //Manan

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/AskAtEase").then(() => {
    console.log("MongoDB connected successfully!!");
});

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET 
})); //Manan

app.set('view engine', 'ejs'); //Manan 
const userRoutes = require('./server/routes/userRoute');//Manan
app.use('/',userRoutes); //Manan

app.use(express.json());

app.use("/signup", userRoute);
app.use("/login", userRoute);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
