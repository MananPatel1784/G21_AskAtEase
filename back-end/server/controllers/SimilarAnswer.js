// const express = require('express');
// const mongoose = require('mongoose');
// const { SentenceTransformer } = require('sentence-transformers');

// const app = express();
// const port = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Define the Question schema
// const questionSchema = new mongoose.Schema({
//   question: String,
//   answer: String,
//   embedding: Array
// });

// const Question = mongoose.model('Question', questionSchema);

// // Initialize the sentence transformer model
// const model = new SentenceTransformer('all-MiniLM-L6-v2');

// // Endpoint to handle new questions
// app.post('/ask', async (req, res) => {
//   const newQuestion = req.body.question;

//   // Convert new question to embedding
//   const newQuestionEmbedding = await model.encode([newQuestion]);

//   // Find similar questions using MongoDB text search
//   const similarQuestions = await Question.find({ $text: { $search: newQuestion } });

//   // Generate response based on similar questions and answers
//   let response = "";
//   if (similarQuestions.length > 0) {
//     // ... (Implement your response generation logic here)
//   } else {
//     response = "I couldn't find a relevant answer. Please try rephrasing your question or providing more context.";
//   }

//   res.json({ response });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });