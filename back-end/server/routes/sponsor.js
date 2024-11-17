const express = require("express");
const router = express.Router();

const Sponsor = require("../models/sponsors"); // Replace with your Sponsor model
const authorizeAdmin = require("../MiddleWare/authorizeAdmin");

// Add a sponsor
router.post("/", authorizeAdmin, async (req, res) => {
    try {
        const newSponsor = new Sponsor(req.body);
        await newSponsor.save();
        res.status(201).json(newSponsor);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to add sponsor" });
    }
});

// List all sponsors
router.get("/", authorizeAdmin, async (req, res) => {
    try {
        const sponsors = await Sponsor.find();
        res.json(sponsors);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch sponsors" });
    }
});

// Update sponsor information
router.put("/:id", authorizeAdmin, async (req, res) => {
    try {
        const updatedSponsor = await Sponsor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSponsor) return res.status(404).json({ error: "Sponsor not found" });
        res.json(updatedSponsor);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to update sponsor" });
    }
});

// Delete a sponsor
router.delete("/:id", authorizeAdmin, async (req, res) => {
    try {
        const deletedSponsor = await Sponsor.findByIdAndDelete(req.params.id);
        if (!deletedSponsor) return res.status(404).json({ error: "Sponsor not found" });
        res.json({ message: "Sponsor deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to delete sponsor" });
    }
});

module.exports = router;