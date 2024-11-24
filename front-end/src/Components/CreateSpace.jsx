import React, { useState } from "react";

const CreateSpace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spaceName, setSpaceName] = useState("");
  const [spaceDescription, setSpaceDescription] = useState("");

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleCreateSpace = () => {
    console.log("Space Created:", { spaceName, spaceDescription });
    setSpaceName("");
    setSpaceDescription("");
    toggleModal();
  };

  return (
    <>
      {/* Button to Open Modal */}
      <button
        onClick={toggleModal}
        className="text-2xl font-bold p-4 text-button border-b-2 border-black text-center flex mx-auto 
                    items-center justify-center gap-6 hover:scale-110 transition-all duration-200 object-contain"
      >
        Create Space
        <span>
          <svg
            className="h-8 w-8 text-button"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 font-lexend"
            onClick={toggleModal}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 font-lexend">
            <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg p-6 relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                ✕
              </button>

              {/* Modal Header */}
              <h2 className="text-xl font-bold mb-4 text-center text-button">
                Create a New Space
              </h2>

              {/* Form */}
              <form>
                {/* Space Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Space Name
                  </label>
                  <input
                    type="text"
                    value={spaceName}
                    onChange={(e) => setSpaceName(e.target.value)}
                    placeholder="Enter space name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Space Description */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    value={spaceDescription}
                    onChange={(e) => setSpaceDescription(e.target.value)}
                    placeholder="Enter space description"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleCreateSpace}
                    className="bg-button text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreateSpace;
