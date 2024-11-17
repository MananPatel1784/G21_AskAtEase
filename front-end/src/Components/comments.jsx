import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState([]); // State to hold comments
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [newComment, setNewComment] = useState(""); // State to hold new comment content

  // Fetch comments on component mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/comments"); // Update with your API endpoint
        setComments(response.data.comments || []); // Assume API sends comments in `response.data.comments`
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([ 
          {
            name: "John Doe",
            profileImg: "https://via.placeholder.com/150",
            content: "This is an example comment to show how comments will look!",
            date: "Posted on: 2024-11-17",
          },
        ]);
      }
    };

    fetchComments();
  }, []);

  // Handle adding a new comment
  const handleAddComment = () => {
    const newCommentObj = {
      name: "New User",
      profileImg: "https://via.placeholder.com/150", // Placeholder profile image
      content: newComment,
      date: new Date().toLocaleDateString(),
    };
    
    // Update state with the new comment
    setComments((prevComments) => [...prevComments, newCommentObj]);
    setShowModal(false); // Close modal after adding comment
    setNewComment(""); // Clear the input
  };

  return (
    <div className="container mx-auto p-6 space-y-6 bg-gradient-to-b from-[#F0D9C4] to-[#FF9797]">
      {/* Add Comment Button */}
      <div className="flex justify-end">
        <button
          className="bg-[#AD3B29] text-white px-6 py-2 rounded hover:bg-[#9b3226] transition-colors"
          onClick={() => setShowModal(true)} // Show modal when clicked
        >
          Add Comment
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg border-2 border-[#E2E2E2]">
              <div className="flex items-center space-x-4">
                <img
                  src={comment.profileImg || "https://via.placeholder.com/50"} // Fallback image
                  alt={`${comment.name}'s profile`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#162f56]">{comment.name || "Anonymous"}</h3>
                  <p className="text-[#818597] text-sm">{comment.date || "Posted on: Unknown"}</p>
                </div>
              </div>
              <p className="mt-2 text-[#344a6c]">{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-[#818597]">No comments yet. Be the first to add one!</p>
        )}
      </div>

      {/* Modal for Adding Comment */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-2xl font-semibold text-[#162f56] mb-4">Add a Comment</h2>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows="4"
              className="w-full p-2 border-2 border-[#E2E2E2] rounded mb-4"
              placeholder="Write your comment here..."
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-[#AD3B29] text-white px-6 py-2 rounded hover:bg-[#9b3226] transition-colors"
                onClick={handleAddComment}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-400 transition-colors"
                onClick={() => setShowModal(false)} // Close modal
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
