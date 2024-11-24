import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddQuestion2 = () => {
  const [spaces, setSpaces] = useState([]);
  const [questionName, setQuestionName] = useState('');
  const [spaceId, setSpaceId] = useState('');
  const [modal, setModal] = useState(false);

  // Fetch spaces when the component loads
  useEffect(() => {
    axios.get('http://localhost:8000/api/spaces')
      .then((response) => setSpaces(response.data))
      .catch((error) => console.error('Error fetching spaces:', error));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!questionName || !spaceId) {
      alert('Please select a space and provide a question.');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/spaces/${spaceId}/questions`, {
        questionName,
      });
      alert('Question added successfully!');
      setQuestionName('');
      setSpaceId('');
      closeModal();
    } catch (error) {
      console.error('Error adding question:', error);
      alert('Failed to add question. Please try again.');
    }
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setQuestionName('');
    setSpaceId('');
  };

  return (
    <>
      {/* Trigger Section */}
      <div className="flex-col m-2 gap-5 font-lexend">
        <p
          className="text-xl font-semibold mt-4 cursor-pointer"
          onClick={openModal}
        >
          Ask Anything!
        </p>

        <textarea
          className="w-full mt-4 p-4 border border-gray-300 rounded-lg cursor-pointer"
          rows="4"
          placeholder="Type your question"
          onClick={openModal}
        ></textarea>
        <button
          onClick={openModal}
          className="bg-button text-white px-4 py-2 rounded"
        >
          Add Question
        </button>
      </div>

      {/* Modal Section */}
      {modal && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 font-lexend"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50 font-lexend">
            <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg p-6 relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✕
              </button>

              {/* Modal Body */}
              <h2 className="text-xl font-bold mb-4">Add Question</h2>

              {/* Question Title Input */}
              <textarea
                className="w-full border rounded-lg p-3 mb-4 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your question"
                value={questionName}
                onChange={(e) => setQuestionName(e.target.value)}
              />

              {/* Space Dropdown */}
              <select
                className="w-full border rounded-lg p-3 mb-4 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                value={spaceId}
                onChange={(e) => setSpaceId(e.target.value)}
                required
              >
                <option value="">-- Select Space --</option>
                {spaces.map((space) => (
                  <option key={space._id} value={space._id}>
                    {space.name} - {space.description}
                  </option>
                ))}
              </select>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-gray-300 px-4 py-2 rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-button text-white px-4 py-2 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddQuestion2;
