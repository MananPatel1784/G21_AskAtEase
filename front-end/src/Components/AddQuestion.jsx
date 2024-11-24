import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants";
import myphoto from "./Assets/myphoto.jpg";

export default function AddQuestion() {
  const [modal, setModal] = useState(false);
  const [questionName, setquestionName] = useState("");
  const [questionDetails, setQuestionDetails] = useState("");
  const [selectedSpace, setSelectedSpace] = useState(""); // State to track selected space
  const navigate = useNavigate();

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    clearInputs();
  };

  const clearInputs = () => {
    setquestionName("");
    setQuestionDetails("");
    setSelectedSpace(""); // Clear the selected space
  };

  // Handle question submission
  const handleQuestionSubmit = async () => {
    if (!questionName.trim()) {
      alert("Question title is required!");
      return;
    }

    if (!selectedSpace) {
      alert("Please select a space!");
      return;
    }

    try {
      const body = {
        questionName: questionName.trim(),
        questionDetails: questionDetails.trim(),
        space: selectedSpace, // Include the selected space
      };

      const response = await axios.post(`${API_URL}/api/questions/add`, body);
      alert(response.data.message || "Question added successfully!");
      closeModal();
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Failed to add question. Please try again.");
    }
  };

  // Redirect to the QuestionsAndAnswers component with the question
  const handleAskQuestionRedirect = () => {
    if (!questionName.trim()) {
      alert("Question title cannot be empty!");
      return;
    }

    navigate("/questions-and-answers", { state: { questionName } });
  };

  return (
    <>
      <div className="flex-col m-2 gap-5 font-lexend">
        <p
          className="text-xl font-semibold mt-4 cursor-pointer"
          onClick={openModal}
        >
          Ask Anything!
        </p>

        <textarea
          className="w-full mt-4 p-4 border border-gray-300 rounded-lg cursor-pointer"
          rows="4"
          placeholder="Type your question "
          onClick={openModal}
        ></textarea>
        <button
          onClick={openModal}
          className=" bg-button text-white px-4 py-2 rounded"
        >
          Add Question
        </button>
      </div>

      {modal && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 font-lexend"
            onClick={closeModal}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 font-lexend">
            <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg p-6 relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✕
              </button>

              <div>
                <h2 className="text-xl font-bold mb-4">Add Question</h2>
                {/* Question Title Input */}
                <input
                  type="text"
                  className="w-full border rounded-lg p-3 mb-4 text-gray-700 focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                  placeholder="Question Title"
                  value={questionName}
                  onChange={(e) => setquestionName(e.target.value)}
                />

                {/* Space Dropdown */}
                <select
                  className="w-full border rounded-lg p-3 mb-4 text-gray-700 focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                  value={selectedSpace}
                  onChange={(e) => setSelectedSpace(e.target.value)}
                >
                  <option value="" disabled>
                    Select a space
                  </option>
                  <option value="Technology">Technology</option>
                  <option value="Science">Science</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="General">General</option>
                  {/* Add more options as needed */}
                </select>

                {/* Question Details Input */}
                <textarea
                  className="w-full border rounded-lg p-3 text-gray-700 focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                  rows="5"
                  placeholder="Provide more details (optional)"
                  value={questionDetails}
                  onChange={(e) => setQuestionDetails(e.target.value)}
                ></textarea>

                <div className="mt-4 flex justify-end">
                  <button
                    className="bg-gray-300 px-4 py-2 rounded mr-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-button text-white px-4 py-2 rounded"
                    onClick={handleQuestionSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
