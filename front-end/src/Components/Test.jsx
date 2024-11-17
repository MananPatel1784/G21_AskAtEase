import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }
    setSubmittedQuestion(question); // Set the submitted question to trigger data fetching
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!submittedQuestion) return;

      setLoading(true);
      setError(null);

      try {
        console.log(submittedQuestion)
        // Fetch data from the backend with the submitted question
        const response = await axios.post('http://localhost:8000/api/search', {
           questionName: submittedQuestion ,  // Send in the body, though it's not typical for GET
        });

        setData(response.data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching data:", err.response?.data || err.message);
        setError("Failed to fetch questions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [submittedQuestion]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ask a Question</h1>
      <textarea
        placeholder="Enter your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          height: "100px",
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Ask
      </button>

      {/* Render Questions and Answers */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {submittedQuestion && !loading && !error && (
        <div>
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
            <p>{submittedQuestion}</p>
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
      )}
    </div>
  );
};

export default Test;
