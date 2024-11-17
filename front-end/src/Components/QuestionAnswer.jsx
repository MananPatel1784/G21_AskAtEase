import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const QuestionAnswer = ({ questionName }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!questionName) {
          setError("No question provided.");
          setLoading(false);
          return;
        }

        // Fetch data with the provided questionName
        const response = await axios.get(`${API_URL}/api/search`, {
          params: { questionName },
        });

        setData(response.data); // Update state with fetched data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err.response?.data || err.message);
        setError("Failed to fetch questions. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [questionName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Questions and Answers</h1>
      <div
        style={{
          marginBottom: "20px",
          border: "1px solid #007BFF",
          padding: "15px",
          borderRadius: "5px",
          backgroundColor: "#E9F7FE",
        }}
      >
        <h2>Your Question:</h2>
        <p>{questionName}</p>
      </div>
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.question._id}
            style={{
              marginBottom: "20px",
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "5px",
            }}
          >
            <h2>{item.question.questionName}</h2>
            <p><strong>Similarity:</strong> {item.similarity.toFixed(2)}</p>
            <h3>Answers:</h3>
            {item.question.answers.length > 0 ? (
              <ul>
                {item.question.answers.map((answer, idx) => (
                  <li key={idx} style={{ marginBottom: "10px" }}>
                    {answer}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No answers available for this question.</p>
            )}
          </div>
        ))
      ) : (
        <p>No similar questions found.</p>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default QuestionAnswer;
=======
export default QuestionsAndAnswers;
>>>>>>> 7f41930f0d59289fd9398813bff0478b6e5d38f8
