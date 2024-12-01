require("dotenv").config();

function isUserAunthenticated(req, res, next) {
    if(req.session.user) {
        return next();
    }
    else {
        return res.status(401).json({ message: "You must be logged in to view this page!!" });
    }
}

module.exports = isUserAunthenticated;