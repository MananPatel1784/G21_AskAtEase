import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../utils/constants";

const CreateSpace = ({ dispatch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spaceName, setSpaceName] = useState("");
  const [spaceDescription, setSpaceDescription] = useState("");

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleCreateSpace = () => {
    axios
      .post(`${API_URL}/api/spaces`, {
        name: spaceName,
        description: spaceDescription,
      })
      .then((response) => {
        alert(`Space Created: ${spaceName}`);
        dispatch({
          type: "add",
          ...response.data,
        });
      })
      .catch((error) => {
        alert(error?.response?.data?.error);
      });
    setSpaceName("");
    setSpaceDescription("");
    toggleModal();
  };

  return (
    <>
      {/* Button to Open Modal */}
      <button
        onClick={toggleModal}
        className="text-xl font-bold p-4 text-button rounded-lg border-2 border-gray-500 hover:bg-gray-300 transition-colors duration-300 text-center flex mx-auto 
                    items-center justify-center gap-6  object-contain"
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
                    className="w-full px-4 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-red-950"
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
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-950"
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
                    className="bg-button text-white px-4 py-2 "
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
