// // post component for the main page 
// import React from "react";
// import { BrowserRouter , Routes , Route} from "react-router-dom";

// const Post = ({ profileImg, name, date, question, description, postImg }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
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
//           {description && <p className="mt-4 mb-4 text-gray-600">{description}</p>}
//         </div>
//         <div className="flex items-center justify-center w-1/4">
//           <button className="bg-button text-white py-2 px-4 rounded-lg hover:bg-button">
//             Answer
//           </button>
//         </div>
//       </div>

//       {/* Optional Image Section */}
//       {postImg && (
//         <div className="w-full h-48">
//           <img src={postImg} alt={question} className="w-full h-full rounded-lg object-contain" />
//         </div>
//       )}

//       {/* Interaction Buttons */}
//       <div className="flex items-center justify-between mt-4 mx-4">
//         <div className="flex space-x-4 gap-5">
//           <button className="mt-4">
//             <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
//             </svg>
//           </button>
//           <button className="mt-4">
//             <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//             </svg>
//           </button>
//           <button className="mt-4">
//             <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//             </svg>
//           </button>
//         </div>
//         <div className="flex items-center p-4 space-x-6">
//           <button className="mt-4">
//             <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="6" cy="12" r="3"></circle>
//               <circle cx="18" cy="6" r="3"></circle>
//               <circle cx="18" cy="18" r="3"></circle>
//               <line x1="8.7" y1="10.7" x2="15.3" y2="7.3"></line>
//               <line x1="8.7" y1="13.3" x2="15.3" y2="16.7"></line>
//             </svg>
//           </button>
//           <button className="text-4xl text-black hover:text-black">...</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;


import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ profileImg, name, date, question, description, postImg, questionId }) => {
  const navigate = useNavigate();

  const handleAnswerClick = () => {
    // Navigate to the AnswerQuestion component with the question ID
    navigate(`/answer/${questionId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
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
          {description && <p className="mt-4 mb-4 text-gray-600">{description}</p>}
        </div>
        <div className="flex items-center justify-center w-1/4">
          <button
            onClick={handleAnswerClick}
            className="bg-button text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Answer
          </button>
        </div>
      </div>

      {/* Optional Image Section */}
      {postImg && (
        <div className="w-full h-48">
          <img src={postImg} alt={question} className="w-full h-full rounded-lg object-contain" />
        </div>
      )}
    </div>
  );
};

export default Post;
