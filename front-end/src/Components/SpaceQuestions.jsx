import React, { useState, useEffect } from "react";
import axios from "axios";

const SpaceQuestions = () => {
  const [spaces, setSpaces] = useState([]); // List of spaces
  const [selectedSpaceId, setSelectedSpaceId] = useState(""); // Selected space ID
  const [questions, setQuestions] = useState([]); // Questions for the selected space
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch all spaces when the component loads
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/spaces");
        setSpaces(response.data); // Assume API returns an array of spaces
      } catch (err) {
        console.error("Error fetching spaces:", err);
        setError("Failed to load spaces. Please try again later.");
      }
    };

    fetchSpaces();
  }, []);

  // Fetch questions for the selected space
  const fetchQuestions = async (spaceId) => {
    if (!spaceId) return; // Exit if no space is selected

    setLoading(true);
    setError(null); // Reset error state

    try {
      const response = await axios.get(
        `http://localhost:8000/api/spaces/${spaceId}/questions`
      );
      setQuestions(response.data || []); // Assume API returns an array of questions
    } catch (err) {
      console.error("Error fetching questions:", err);
      setError(
        "Failed to load questions for the selected space. Please try again."
      );
      setQuestions([]); // Reset questions if API fails
    } finally {
      setLoading(false);
    }
  };

  // Handle space selection
  const handleSpaceChange = (e) => {
    const spaceId = e.target.value;
    setSelectedSpaceId(spaceId);
    if (spaceId) {
      fetchQuestions(spaceId); // Fetch questions when a space is selected
    } else {
      setQuestions([]); // Clear questions if no space is selected
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Space Questions
      </h1>

      {/* Space Selector */}
      <div className="mb-6 max-w-md mx-auto">
        <label className="block font-semibold mb-2 text-gray-700">
          Select Space:
        </label>
        <select
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-red-950"
          value={selectedSpaceId}
          onChange={handleSpaceChange}
        >
          <option value="">-- Select a Space --</option>
          {spaces.map((space) => (
            <option key={space._id} value={space._id}>
              {space.name} - {space.description}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {loading && (
        <p className="text-center text-blue-600">Loading questions...</p>
      )}

      {/* Error State */}
      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      {/* Questions Display */}
      <div className="max-w-3xl mx-auto">
        {Array.isArray(questions) && questions.length > 0 ? (
          <ul className="space-y-6">
            {questions.map((question) => (
              <li
                key={question._id}
                className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {question.questionName}
                </h3>
                <h4 className="mt-4 font-semibold text-gray-700">Answers:</h4>
                {question.answers && question.answers.length > 0 ? (
                  <ul className="list-disc ml-6 mt-2">
                    {question.answers.map((answer, idx) => (
                      <li key={idx} className="text-gray-700">
                        {answer.answer}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 mt-2">No answers available.</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          !loading &&
          !error && (
            <p className="text-center text-gray-500">
              No questions found for the selected space.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default SpaceQuestions;
