require("dotenv").config();

const jwt = require("jsonwebtoken");

exports.authorizeAdmin = (req, res, next) => {
    const token = req.header.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json({ message: "Access denied, No token provided!!"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !== "admin") {
            return res.status(403).json({ message: "Access denied, You are not an admin!!"});
        }
        req.user = decoded;

        next();
    }
    catch (err) {
        res.status(400).json({ message: "Invalid token!!" });
    }
};