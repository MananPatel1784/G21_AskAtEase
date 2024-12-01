require("dotenv").config();
const jwt = require("jsonwebtoken");

const aunthenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const jwtToken = authHeader && authHeader.split(' ')[1];

    if(!jwtToken) {
        return res.status(401).json({ message: "Access denied!!" });
    }

    jwt.verify(jwtToken, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.status(403).json({ message: "Invalid Token!!" });
        req.user = user;
        next();
    });
};

module.exports = aunthenticateToken;