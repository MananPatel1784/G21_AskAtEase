const Question = require('../models/question');
const natural = require('natural');
const cosineSimilarity = require('cosine-similarity');

// Tokenizer for preprocessing
const tokenizer = new natural.WordTokenizer();

// Function to calculate TF
const calculateTF = (terms, document) => {
  const termCounts = {};
  document.forEach((term) => {
    termCounts[term] = (termCounts[term] || 0) + 1;
  });

  return terms.map((term) => (termCounts[term] || 0) / document.length);
};

// Function to calculate IDF
const calculateIDF = (terms, documents) => {
  const docCount = documents.length;
  const termDocCounts = terms.map((term) =>
    documents.filter((doc) => doc.includes(term)).length
  );

  return termDocCounts.map((count) => Math.log(docCount / (count + 1)));
};

// TF-IDF Vectorization
const vectorize = (terms, document, idf) => {
  const tf = calculateTF(terms, document);
  return tf.map((val, idx) => val * idf[idx]);
};

// Find similar questions using TF-IDF and cosine similarity
const findSimilarQuestions = async (req, res) => {
  console.log(req.body);
  try {
    const { questionName } = req.body;

    if (!questionName) {
      return res.status(400).json({ message: 'Query is required' });
    }

    // Tokenize and preprocess query
    const queryTokens = tokenizer.tokenize(questionName.toLowerCase());

    // Fetch all questions from the database
    const questions = await Question.find();
    const documents = questions.map((q) =>
      tokenizer.tokenize(q.questionName.toLowerCase())
    );

    // Build a vocabulary of unique terms across all documents
    const vocabulary = [...new Set(queryTokens.concat(...documents))];

    // Calculate IDF
    const idf = calculateIDF(vocabulary, documents);

    // Vectorize the query and all documents
    const queryVector = vectorize(vocabulary, queryTokens, idf);
    const documentVectors = documents.map((doc) =>
      vectorize(vocabulary, doc, idf)
    );

    // Calculate cosine similarity
    const similarities = documentVectors.map((docVector, idx) => ({
      question: questions[idx],
      similarity: cosineSimilarity(queryVector, docVector),
    }));

    // Sort results by similarity score
    similarities.sort((a, b) => b.similarity - a.similarity);

    // Filter results with significant similarity (threshold = 0.4)
    const relevantQuestions = similarities
      .filter((result) => result.similarity > 0.4)  // Updated threshold to 0.4
      .map((result) => ({
        question: result.question,
        similarity: result.similarity,
      }));

    res.status(200).json(relevantQuestions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { findSimilarQuestions };
