import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants";

const AnswerQuestion = () => {
  const { questionId } = useParams(); // Get question ID from the URL
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
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Answer Question</h1>
      <p className="mb-6">Question ID: {questionId}</p>
      console.log({questionId})
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
          className="bg-button text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Answer"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 ${
            message.includes("success") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default AnswerQuestion;
