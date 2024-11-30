import React, { createContext, useState } from "react";
import axios from "axios";

export const SpaceContext = createContext();

export const SpaceProvider = ({ children }) => {
  const [spaces, setSpaces] = useState([]); // All spaces
  const [selectedSpace, setSelectedSpace] = useState(null); // Selected space
  const [questions, setQuestions] = useState([]); // Questions for selected space
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch all spaces (called once)
  const fetchSpaces = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/spaces");
      setSpaces(response.data); // Assume API returns an array of spaces
    } catch (err) {
      console.error("Error fetching spaces:", err);
      setError("Failed to load spaces. Please try again later.");
    }
  };

  // Fetch questions for the selected space
  const fetchQuestions = async (spaceId) => {
    if (!spaceId) return;
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <SpaceContext.Provider
      value={{
        spaces,
        fetchSpaces,
        selectedSpace,
        setSelectedSpace,
        questions,
        fetchQuestions,
        loading,
        error,
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
};
