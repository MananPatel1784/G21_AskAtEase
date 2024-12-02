const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const questionsRouter = require('./routes/questions');
const answersRouter = require('./routes/answers');
const usersRouter = require('./routes/users');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const url = "mongodb+srv://pateldishant5:HNyDeEFjmtLAt9QH@cluster0.zdqnm.mongodb.net/G21_AskAtEase?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/questions', questionsRouter);
app.use('/api/answers', answersRouter);
app.use('/api/users', usersRouter);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Ask At Ease API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});