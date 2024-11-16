const mongoose = require('mongoose');
const url = "mongodb+srv://pateldishant5:HNyDeEFjmtLAt9QH@cluster0.zdqnm.mongodb.net/G21_AskAtEase?retryWrites=true&w=majority&appName=Cluster0";

module.exports.connect = () => {
    mongoose.connect(url).then(() => {
        console.log('MongoDB connected Successfully!!');
    }).catch((error)=>console.log("Error:", error));
};