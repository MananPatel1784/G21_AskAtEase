import React, { useState } from "react";
import SettingsPage from "./SettingsPage"; 
import AskAtEaseLogo from "./Assets/AskAtEase.png"; // Import logo image

export default function SettingsButton() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="qHeader__Rem flex items-center space-x-4 ml-4">
        <button
          className="qHeader__logo flex items-center space-x-2 cursor-pointer"
          onClick={openModal} // Trigger the modal on click
        >
          <img
            src={AskAtEaseLogo}
            alt="Logo"
            className="h-16 w-16 m-2 border-button border-2 rounded-full object-cover"
          />
        </button>
      </div>

      {modal && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
            onClick={closeModal}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg p-6 relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✖
              </button>

              {/* Settings Page */}
              <SettingsPage />
            </div>
          </div>
        </>
      )}
    </>
  );
}
