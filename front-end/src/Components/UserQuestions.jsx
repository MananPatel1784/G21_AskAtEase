import React, { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "./firebase";  // Import Firebase Auth
import { onAuthStateChanged } from "firebase/auth";

const UserQuestionsAndReactions = () => {
  const [userId, setUserId] = useState(null);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [reactedQuestions, setReactedQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);  // Get the user id (uid)
      } else {
        setUserId(null);  // If no user is logged in
      }
    });

    return unsubscribe; // Clean up the listener
  }, []);

  useEffect(() => {
    if (userId) {
      // Fetch data for questions asked and reactions only if user is logged in
      fetchData();
    }
  }, [userId]);

  const fetchData = async () => {
    try {
      // Make a POST request to fetch the questions asked by the user
      const askedResponse = await axios.post(`http://localhost:8000/api/askedQuestions`, {
        userId
      });
      setAskedQuestions(askedResponse.data);

      // Make a POST request to fetch the questions reacted by the user
      const reactedResponse = await axios.post(`http://localhost:8000/api/reactedQuestions`, {
        userId
      });
      setReactedQuestions(reactedResponse.data);

      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Questions and Reactions</h1>
      
      <h2>Questions You Asked:</h2>
      {askedQuestions.length > 0 ? (
        askedQuestions.map((question) => (
          <div key={question._id} style={{ marginBottom: "10px" }}>
            <p>{question.questionName}</p>
            <p><strong>Created at:</strong> {new Date(question.createdAt).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No questions asked yet.</p>
      )}

      <h2>Questions You've Reacted To:</h2>
      {reactedQuestions.length > 0 ? (
        reactedQuestions.map((question) => (
          <div key={question._id} style={{ marginBottom: "10px" }}>
            <p>{question.questionName}</p>
            <p><strong>Reaction:</strong> {question.reaction}</p>
          </div>
        ))
      ) : (
        <p>No reactions yet.</p>
      )}
    </div>
  );
};

export default UserQuestionsAndReactions;
