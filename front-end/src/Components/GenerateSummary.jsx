// import React, { useState } from "react";
// import axios from "axios";

// const GenerateSummary = ({ data }) => {
//   console.log(data);
//   const [summary, setSummary] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleGenerateSummary = async () => {
//     if (!data || data.length === 0) {
//       alert("No data available to summarize.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // Format data for summarization
//       const inputData = data.map((item) => ({
//         question: item.question.questionName,
//         answers: item.question.answers,
//       }));
//       console.log(inputData)

//       // Call external API (e.g., OpenAI or Gemini) for summarization
//       const response = await axios.post("https://api.openai.com/v1/chat/completions", {
//         model: "gpt-4o-mini", // Update as per the model you're using
//         messages: [
//           {
//             role: "system",
//             content: "You are an assistant summarizing questions and answers.",
//           },
//           {
//             role: "user",
//             content: `Summarize the following questions and their answers: ${JSON.stringify(inputData)}`,
//           },
//         ],
//       }, {
//         headers: {
        
//             "Authorization": `Bearer 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`,
//              // Replace with your API key
//           "Content-Type": "application/json",
//         },
//       });

//       // Update the summary state
//       const summaryText = response.data.choices[0].message.content;
//       setSummary(summaryText);
//     } catch (err) {
//       console.error("Error generating summary:", err.response?.data || err.message);
//       setError("Failed to generate summary. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="mt-6">
//       <button
//         onClick={handleGenerateSummary}
//         className="bg-button text-white px-4 py-2 rounded-md hover:bg-red-800"
//         disabled={loading}
//       >
//         {loading ? "Generating Summary..." : "Generate Summary"}
//       </button>

//       {/* Display Summary */}
//       {summary && (
//         <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
//           <h3 className="text-lg font-bold mb-2">Generated Summary:</h3>
//           <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
//         </div>
//       )}

//       {/* Display Error */}
//       {error && <p className="mt-4 text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default GenerateSummary;
