const Replies = require("../models/replies");
const Answer = require("../models/answer");

exports.replyToAnswer = async (req, res) => {
    const { reply, answerId } = req.body;

    try {
        if(!reply || !answerId) return res.status(400).json({ message: "Reply and answer ID both are required!!" });
    
        await Replies.create({
            reply: reply,
            answerId: answerId
        });

        const _id = answerId;
        const answer = await Answer.findById(_id);
        answer.replies.push(reply);
        answer.save();

        res.status(201).json({ message: "Reply sent successfully!!" });
    }
    catch (err) {
        res.status(500).json({ error: "Error replying the answer!!" });
    }
};