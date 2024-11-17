import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const QuestionsAndAnswers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/search`);
        setData(response.data); // Assuming this matches the provided JSON format
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch questions. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Questions and Answers</h1>
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
            {item.question.questionUrl && (
              <a href={item.question.questionUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.question.questionUrl}
                  alt="Question related"
                  style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
                />
              </a>
            )}
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
        <p>No questions found.</p>
      )}
    </div>
  );
};

export default QuestionsAndAnswers;