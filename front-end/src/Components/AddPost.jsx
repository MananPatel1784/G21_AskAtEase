import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default function AddPost() {
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState("post");

  // State for inputs
  const [postContent, setPostContent] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDetails, setQuestionDetails] = useState("");

  const openModal = (tab) => {
    setActiveTab(tab); // Set the active tab based on the button clicked
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    clearInputs(); // Reset the input fields when closing the modal
  };

  const clearInputs = () => {
    setPostContent("");
    setQuestionTitle("");
    setQuestionDetails("");
  };

  // Handle post submission
  const handlePostSubmit = async () => {
    if (!postContent.trim()) {
      alert("Post content cannot be empty!");
      return;
    }

    try {
      const response = await axios.post("/api/posts", { content: postContent });
      alert(response.data.message || "Post created successfully!");
      closeModal();
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    }
  };

  // Handle question submission
  const handleQuestionSubmit = async () => {
    if (!questionTitle.trim()) {
      alert("Question title is required!");
      return;
    }

    try {
      const body = {
        questionName: questionTitle.trim()
      };

      const response = await axios.post(`${API_URL}/api/questions/add`, body);
      alert(response.data.message || "Question added successfully!");
      closeModal();
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Failed to add question. Please try again.");
    }
  };

  return (
    <>
      <div className="flex m-2 gap-5 font-lexend">
        <button
          onClick={() => openModal("post")}
          className="btn-modal bg-button text-white px-4 py-2 rounded mr-2"
        >
          Create Post
        </button>
        <button
          onClick={() => openModal("question")}
          className="btn-modal bg-button text-white px-4 py-2 rounded"
        >
          Ask Question
        </button>
      </div>

      {modal && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 font-lexend"
            onClick={closeModal}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 font-lexend">
            <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg p-6 relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✕
              </button>

              {/* Tabs */}
              <div className="flex border-b mb-4">
                <button
                  className={`flex-1 text-center py-2 ${
                    activeTab === "post"
                      ? "border-b-2 border-red-600 text-button"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("post")}
                >
                  Create Post
                </button>
                <button
                  className={`flex-1 text-center py-2 ${
                    activeTab === "question"
                      ? "border-b-2 border-red-600 text-button"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("question")}
                >
                  Add Question
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "post" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Create Post</h2>
                  <textarea
                    className="w-full border rounded-lg p-3 text-gray-700 focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                    rows="5"
                    placeholder="What's on your mind?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  ></textarea>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-gray-300 px-4 py-2 rounded mr-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-button text-white px-4 py-2 rounded"
                      onClick={handlePostSubmit}
                    >
                      Post
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "question" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Add Question</h2>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-3 mb-4 text-gray-700 focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                    placeholder="Question Title"
                    value={questionTitle}
                    onChange={(e) => setQuestionTitle(e.target.value)}
                  />
                  <textarea
                    className="w-full border rounded-lg p-3 text-gray-700 focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                    rows="5"
                    placeholder="Provide more details (optional)"
                    value={questionDetails}
                    onChange={(e) => setQuestionDetails(e.target.value)}
                  ></textarea>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-gray-300 px-4 py-2 rounded mr-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-button text-white px-4 py-2 rounded"
                      onClick={handleQuestionSubmit}
                    >
                      Ask
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
