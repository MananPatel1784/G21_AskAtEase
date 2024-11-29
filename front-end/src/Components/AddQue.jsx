import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { SpaceContext } from "../contexts/SpaceContext";

const AddQuestion2 = () => {
  const { spaces } = useContext(SpaceContext);
  const [questionName, setQuestionName] = useState("");
  const [spaceId, setSpaceId] = useState("");
  const { dispatch } = useContext(QuestionsContext);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!questionName || !spaceId) {
      alert("Please select a space and provide a question.");
      return;
    }

    axios
      .put(`${API_URL}/api/spaces/${spaceId}/questions`, {
        questionName,
      })
      .then((response) => {
        alert("Question added successfully!");
        dispatch({
          type: "add",
          ...response.data,
        });
        setQuestionName("");
        setSpaceId("");
      })
      .catch((error) => {
        alert(error?.response?.data?.error);
      });
  };

  return (
    <div>
      <h2>Add a Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <textarea
            value={questionName}
            onChange={(e) => setQuestionName(e.target.value)}
            placeholder="Enter your question"
            required
          />
        </div>
        <div>
          <label>Space:</label>
          <select
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
        </div>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestion2;
