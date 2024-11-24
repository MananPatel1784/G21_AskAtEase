import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchQuestion = () => {
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }
    console.log(question);
    setSubmittedQuestion(question); // Set the submitted question to trigger data fetching
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!submittedQuestion) return;
      // console.log(question);
      setLoading(true);
      setError(null);

      try {
        console.log(submittedQuestion);
        // Fetch data from the backend with the submitted question
        const response = await axios.post("http://localhost:8000/api/search", {
          questionName: question, // Send in the body, though it's not typical for GET
        });

        setData(response.data); // Update state with fetched data
      } catch (err) {
        console.error(
          "Error fetching data:",
          err.response?.data || err.message
        );
        setError("Failed to fetch questions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [submittedQuestion]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ask a Question</h1>
      <textarea
        placeholder="Enter your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full h-24 mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
      />
      <button
        onClick={handleSubmit}
        className="bg-button text-white px-4 py-2 rounded-md hover:bg-red-800"
      >
        Ask
      </button>

      {/* Render Questions and Answers */}
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {submittedQuestion && !loading && !error && (
        <div className="mt-6">
          <h1 className="text-xl font-semibold mb-4">Questions and Answers</h1>
          <div className="mb-6 border border-red-600 p-4 rounded-md bg-red-50">
            <h2 className="text-lg font-bold mb-2">Your Question:</h2>
            <p className="text-gray-700">{submittedQuestion}</p>
          </div>
          {data.length > 0 ? (
            data.map((item) => (
              <div
                key={item.question._id}
                className="mb-6 border border-gray-300 p-4 rounded-md"
              >
                <h2 className="text-lg font-semibold">
                  {item.question.questionName}
                </h2>
                {/* <p className="text-gray-600">
                  <strong>Similarity:</strong> {item.similarity.toFixed(2)}
                </p> */}
                <h3 className="text-md font-bold mt-4">Answers:</h3>
                {item.question.answers.length > 0 ? (
                  <ul className="list-disc list-inside">
                    {item.question.answers.map((answer, idx) => (
                      <li key={idx} className="mb-2 text-gray-700">
                        {answer}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">
                    No answers available for this question.
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No similar questions found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchQuestion;
