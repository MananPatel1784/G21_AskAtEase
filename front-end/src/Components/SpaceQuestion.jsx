import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SpaceQuestion = () => {
  const { id } = useParams(); // Get space ID from the route
  const navigate = useNavigate(); // For navigation fallback
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid Space ID.");
      return;
    }

    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log(`Fetching questions for space ID: ${id}`);
        const response = await axios.get(
          `http://localhost:8000/api/spaces/${id}/questions`
        );
        console.log("API Response:", response.data);

        // Check the response structure and set questions
        setQuestions(response.data.questions || []);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setError("Failed to load questions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [id]);

  const handleAddAnswerClick = (questionId) => {
    // Navigate to the page where users can add a new answer
    navigate(`/answer/${questionId}`);
  };

  // Handle invalid space ID scenario
  if (!id) {
    return (
      <div className="p-6">
        <p className="text-red-500">Invalid Space ID. Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Questions for Space</h1>
      {loading && <p>Loading questions...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {questions.length > 0 ? (
        <ul className="space-y-4">
          {questions.map((question) => (
            <li key={question._id} className="p-4 border rounded shadow">
              <h3 className="text-lg font-bold">{question.questionName}</h3>
              <h4 className="mt-2 font-semibold">Answers:</h4>
              {question.answers && question.answers.length > 0 ? (
                <ul className="list-disc ml-5">
                  {question.answers.map((answer, idx) => (
                    <li key={idx} className="text-gray-700">
                      {answer.answer}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No answers available.</p>
              )}

              {/* Add Answer Button */}
              <div className="mt-4">
                <button
                  onClick={() => handleAddAnswerClick(question._id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Add Answer
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No questions found for this space.</p>
      )}
    </div>
  );
};

export default SpaceQuestion;
