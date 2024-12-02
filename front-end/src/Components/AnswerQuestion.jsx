import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const AnswerQuestion = ({ showModal, setShowModal, questionId, questionText }) => {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Make a POST request to your backend
      const response = await axios.post(API_URL + "/api/answers ", {
        answer,
        questionId,
      });

      if (response.status === 201) {
        setMessage("Answer added successfully!");
        setAnswer(""); // Clear input field
      }
    } catch (err) {
      console.error("Error while adding answer:", err);
      setMessage("Failed to add answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Overlay for the modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-semibold mb-4">Answer Question</h2>
            
            {/* Question ID and Question Text */}
            <p className="mb-4">
              <strong>Question ID:</strong> {questionId}
            </p>
            <p className="mb-4">
              <strong>Question:</strong> {questionText}
            </p>

            {/* Answer form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="answer" className="block font-semibold mb-2">
                  Your Answer:
                </label>
                <textarea
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  rows="4"
                  placeholder="Write your answer here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-button text-white py-2 px-4 rounded-lg"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Answer"}
              </button>
            </form>

            {/* Display the message */}
            {message && (
              <p
                className={`mt-4 ${
                  message.includes("success") ? "text-green-500" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}

            {/* Close Modal Button */}
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-700 bg-button p-1 rounded-full "
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnswerQuestion;
