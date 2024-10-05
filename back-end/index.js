const express = require("express");
const {connectToMongoDB} = require("./connection");
const userRoute = require("./server/routes/user");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/user").then(() => {
    console.log("MongoDB connected successfully!!");
});




app.use(express.json());

app.use("/signup", userRoute);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));