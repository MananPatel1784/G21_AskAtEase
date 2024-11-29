import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const AddQuestion2 = () => {
  const [spaces, setSpaces] = useState([]);
  const [questionName, setQuestionName] = useState("");
  const [spaceId, setSpaceId] = useState("");

  // Fetch spaces when the component loads
  useEffect(() => {
    axios
      .get(`${API_URL}/api/spaces`)
      .then((response) => setSpaces(response.data))
      .catch((error) => console.error("Error fetching spaces:", error));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!questionName || !spaceId) {
      alert("Please select a space and provide a question.");
      return;
    }

    try {
      await axios.put(`${API_URL}/api/spaces/${spaceId}/questions`, {
        questionName,
      });
      alert("Question added successfully!");
      setQuestionName("");
      setSpaceId("");
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Failed to add question. Please try again.");
    }
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
