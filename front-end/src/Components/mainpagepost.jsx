// import React, { useState } from "react";
// import AnswerQuestionModal from "./AnswerQuestion"; // Import AnswerQuestion modal

// const Post = ({
//   profileImg,
//   name,
//   date,
//   question,
//   description,
//   postImg,
//   questionId,
// }) => {
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   const handleAnswerClick = () => {
//     // Show the modal when the Answer button is clicked
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     // Close the modal
//     setShowModal(false);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 -border-slate-200 border-2">
//       {/* Profile Info and Date */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <img src={profileImg} alt={name} className="h-12 w-12 rounded-full" />
//           <div>
//             <h3 className="font-semibold">{name}</h3>
//             <p className="text-sm text-gray-500">Posted on: {date}</p>
//           </div>
//         </div>
//       </div>

//       {/* Question Section */}
//       <div className="mt-4 flex justify-between">
//         <div className="w-3/4">
//           <p className="text-lg font-semibold">{question}</p>
//           {description && (
//             <p className="mt-4 mb-4 text-gray-600">{description}</p>
//           )}
//         </div>
//         <div className="flex items-center justify-center w-1/4">
//           <button
//             onClick={handleAnswerClick}
//             className="bg-button text-white py-2 px-4 rounded-lg "
//           >
//             Answer
//           </button>
//         </div>
//       </div>

//       {/* Optional Image Section */}
//       {postImg && (
//         <div className="w-full h-48">
//           <img
//             src={postImg}
//             alt={question}
//             className="w-full h-full rounded-lg object-contain"
//           />
//         </div>
//       )}

//       {/* Render AnswerQuestion Modal */}
//       {showModal && (
//         <AnswerQuestionModal
//           showModal={showModal}
//           setShowModal={handleCloseModal}
//           questionId={questionId} // Pass questionId to the modal
//           questionText={question} // Pass the question text to be displayed in the modal
//         />
//       )}
//     </div>
//   );
// };

// export default Post;



import React, { useState } from "react";
import AnswerQuestionModal from "./AnswerQuestion"; // Import AnswerQuestion modal

const Post = ({
  profileImg,
  name,
  date,
  question,
  description,
  postImg,
  questionId,
  answers, // Pass the answer for the question
}) => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle answer visibility

  const handleAnswerClick = () => {
    // Show the modal when the Answer button is clicked
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setShowModal(false);
  };

  const handleReplyClick = () => {
    // Toggle answer visibility when the Reply button is clicked
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 border-slate-200 border-2">
      {/* Profile Info and Date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={profileImg} alt={name} className="h-12 w-12 rounded-full" />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">Posted on: {date}</p>
          </div>
        </div>
      </div>

      {/* Question Section */}
      <div className="mt-4 flex justify-between">
        <div className="w-3/4">
          <p className="text-lg font-semibold">{question}</p>
          {description && (
            <p className="mt-4 mb-4 text-gray-600">{description}</p>
          )}
        </div>
        <div className="flex items-center justify-center w-1/4">
          <button
            onClick={handleAnswerClick}
            className="bg-button text-white py-2 px-4 rounded-lg"
          >
            Answer
          </button>
        </div>
      </div>

      {/* Optional Image Section */}
      {postImg && (
        <div className="w-full h-48">
          <img
            src={postImg}
            alt={question}
            className="w-full h-full rounded-lg object-contain"
          />
        </div>
      )}

      {/* Reply Button */}
      <div className="mt-4">
        <button
          onClick={handleReplyClick}
          className="text-white bg-button p-2 font-semibold hover:underline"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
      </div>

      {/* Answer Section */}
      {showAnswer && answers && answers.length!==0  && (
        answers.map((answer, id) => {
          return <div className="mt-4 p-4 border rounded-lg bg-gray-100" key={id}>
            <p className="font-semibold">Answer:</p>
            <p className="text-gray-600">{answer}</p>
          </div>
        })
      )}

      {/* Render AnswerQuestion Modal */}
      {showModal && (
        <AnswerQuestionModal
          showModal={showModal}
          setShowModal={handleCloseModal}
          questionId={questionId} // Pass questionId to the modal
          questionText={question} // Pass the question text to be displayed in the modal
        />
      )}
    </div>
  );
};

export default Post;
