import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const SearchQuestion = () => {
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // Track if all questions should be shown
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus(); // Set focus when the component is rendered
    }
  }, []);

  const handleSubmit = () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }
    setSubmittedQuestion(question); // Set the submitted question to trigger data fetching
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!submittedQuestion) return;
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post(`${API_URL}/api/search`, {
          questionName: question,
        });

        setData(response.data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching data:", err.response?.data || err.message);
        setError("Failed to fetch questions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [submittedQuestion]);

  // Limit the number of questions and answers shown initially (e.g., 3)
  const displayedData = showAll ? data : data.slice(0, 3);

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-3">Ask a Question</h1>
      <textarea
        placeholder="Enter your question here..."
        ref={textAreaRef}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full h-28 mb-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-950 text-lg"
      />
      <button
        onClick={handleSubmit}
        className="bg-button text-white p-2 rounded-md text-3"
      >
        Ask
      </button>

      {/* Render Questions and Answers */}
      {loading && <p className="mt-4 text-gray-500 text-sm">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
      {submittedQuestion && !loading && !error && (
        <div className="mt-6 space-y-4">
          <h1 className="text-lg font-semibold mb-2">Questions and Answers</h1>
          <div className="mb-4 border border-button p-3 rounded-md bg-red-50 text-sm">
            <h2 className="text-md font-bold mb-2">Your Question:</h2>
            <p className="text-gray-700">{submittedQuestion}</p>
          </div>

          {/* Scrollable container for questions */}
          <div className="space-y-4 max-h-80 overflow-auto pr-4">
            {displayedData.length > 0 ? (
              displayedData.map((item) => (
                <div
                  key={item.question._id}
                  className="border border-gray-300 p-3 rounded-md text-sm"
                >
                  <h2 className="text-md font-semibold">{item.question.questionName}</h2>
                  <h3 className="text-sm font-bold mt-2">Answers:</h3>
                  {item.question.answers.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {item.question.answers.map((answer, idx) => (
                        <li key={idx} className="mb-2 text-gray-700 text-sm">
                          {answer}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      No answers available for this question.
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No similar questions found.</p>
            )}
          </div>

          {/* Show More Button */}
          {data.length > 3 && !showAll && (
            <button
              className="mt-4 text-white bg-button text-3 p-2"
              onClick={() => setShowAll(true)}
            >
              See More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchQuestion;

