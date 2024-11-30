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
      setError("Failed to load questions for the selected space. Please try again.");
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Space Questions</h1>

      {/* Space Selector */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Select Space:</label>
        <select
          className="p-2 border rounded w-full"
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
      {loading && <p>Loading questions...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Questions Display */}
      <div>
        {Array.isArray(questions) && questions.length > 0 ? (
          <ul className="space-y-4">
            {questions.map((question) => (
  <li key={question._id} className="p-4 border rounded shadow">
    <h3 className="text-lg font-bold">{question.questionName}</h3>
    <h4 className="mt-2 font-semibold">Answers:</h4>
    {question.answers && question.answers.length > 0 ? (
      <ul className="list-disc ml-5">
        {question.answers.map((answer, idx) => (
          <li key={idx} className="text-gray-700">
            {/* Render the 'answer' text instead of the whole object */}
            {answer.answer}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No answers available.</p>
    )}
  </li>
))}

          </ul>
        ) : (
          !loading && !error && <p>No questions found for the selected space.</p>
        )}
      </div>
    </div>
  );
};

export default SpaceQuestions;
