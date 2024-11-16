const mongoose = require("mongoose");

const sponsorSchema = new mongoose.Schema({
    name: String,
    logoUrl: String,
    website: String,
});

module.exports = mongoose.model("Sponsor", sponsorSchema);