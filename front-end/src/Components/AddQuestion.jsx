import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { SpaceContext } from "../contexts/SpaceContext";
import { QuestionsContext } from "../contexts/QuestionsContext";

const AddQuestion2 = () => {
  const { spaces } = useContext(SpaceContext);
  const [questionName, setQuestionName] = useState("");
  const [spaceId, setSpaceId] = useState("");
  const [modal, setModal] = useState(false);
  const { dispatch } = useContext(QuestionsContext);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!questionName || !spaceId) {
      alert("Please select a space and provide a question.");
      return;
    }
    await handleAddQuestion();
  };

  async function handleAddQuestion() {
    try {
      const response = await axios.put(
        `${API_URL}/api/spaces/${spaceId}/questions`,
        {
          questionName,
        }
      );

      alert("Question added successfully!");

      // Fetch the updated list of questions
      try {
        const updatedResponse = await axios.get(`${API_URL}/api/questions`);
        dispatch({
          type: "all",
          questions: updatedResponse.data,
        });
      } catch (fetchError) {
        console.error("Error fetching updated questions:", fetchError.message);
        alert("Failed to fetch updated questions.");
      }

      setQuestionName("");
      setSpaceId("");
    } catch (error) {
      console.error(
        "Error adding question:",
        error?.response?.data?.error || error.message
      );
      alert(error?.response?.data?.error || "Failed to add the question.");
    }
  }

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setQuestionName("");
    setSpaceId("");
  };

  return (
    <>
      {/* Trigger Section */}
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
          placeholder="Type your question"
          onClick={openModal}
        ></textarea>
        <button
          onClick={openModal}
          className="bg-button text-white px-4 py-2 rounded"
        >
          Add Question
        </button>
      </div>

      {/* Modal Section */}
      {modal && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 font-lexend"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50 font-lexend">
            <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg p-6 relative">
              {/* Modal Body */}
              <h2 className="text-xl font-bold mb-4">Add Question</h2>

              {/* Question Title Input */}
              <textarea
                className="w-full border rounded-lg p-3 mb-4 text-gray-700  focus:outline-none focus:ring-2 focus:ring-red-950"
                placeholder="Enter your question"
                value={questionName}
                onChange={(e) => setQuestionName(e.target.value)}
              />

              {/* Space Dropdown */}
              <select
                className="w-full border rounded-lg p-3 mb-4 text-gray-700  focus:outline-none focus:ring-2 focus:ring-red-950"
                value={spaceId}
                onChange={(e) => setSpaceId(e.target.value)}
                required
              >
                <option value="">-- Select Space --</option>
                {spaces.map((space) => (
                  <option key={space._id} value={space._id}>
                    {space.name} - {space.description}
                  </option>
                ))}
              </select>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-gray-300 px-4 py-2 rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-button text-white px-4 py-2 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddQuestion2;
