const mongoose = require("mongoose");

const sponsorSchema = new mongoose.Schema({
    name: String,
    logoUrl: String,
    website: String,
});

const Sponsor = mongoose.model("Sponsor", sponsorSchema);

module.exports = Sponsor;