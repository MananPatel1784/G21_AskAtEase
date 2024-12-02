import React, { useState } from "react";
import { Link } from "react-router-dom";
import AskAtEaseLogo from "./Assets/headerText.png";
import image from "./Assets/google.png";
import SettingsPage from "./SettingsPage";
import SearchQuestion from "./SearchQuestion";

const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Track popup visibility
  const [isSearchBarOpen, setSearchBar] = useState(false);

  const openSearchBar = () => {
    setSearchBar(true);
  };
  const closeSearchBar = () => {
    setSearchBar(false);
  };

  const openSettingsClick = () => {
    setIsSettingsOpen(true); // Open the popup
  };

  const closeSettingsPopup = () => {
    setIsSettingsOpen(false); // Close the popup
  };

  return (
    <div className="font-lexend qHeader sticky w-full bg-header shadow-custom flex items-center h-16 px-4">
      {/* Logo aligned to the left */}
      <Link to="/ReturnHome" className="flex items-center">
        <div className="qHeader__logo flex items-center space-x-2">
          <img src={AskAtEaseLogo} alt="Logo" className="h-12 w-auto m-2" />
        </div>
      </Link>

      {/* Icons Section aligned to the right */}
      <div className="flex items-center space-x-8 ml-auto">
        {/* Search Section */}
        <div className="qHeader__input flex items-center px-2 ml-2">
          <input
            type="text"
            placeholder="Search"
            className="input-custom p-2 border-gray-500 border-2 rounded-md bg-transparent text-white"
            id="searching"
            onClick={openSearchBar}
          />
        </div>

        <Link to="/ReturnHome">
          <span>
            <svg
              className="h-8 w-8 text-gray-200 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </span>
        </Link>


        {/* Profile Section - Use div instead of Link */}
        <div
          className="qHeader__Rem flex items-center space-x-4 ml-4 cursor-pointer"
          onClick={openSettingsClick} // Open settings modal on click
        >
          <img
            src={image}
            alt="Logo"
            className="h-12 w-12 border-gray-500 border-2 p-1 rounded-2xl"
          />
        </div>
      </div>

      {/* Open Search Bar */}
      {isSearchBarOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
              onClick={closeSearchBar}
            >
              ✕
            </button>
            {/* Render Search Page */}
            <SearchQuestion />
          </div>
        </div>
      )}

      {/* Open Settings */}
      {isSettingsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 rounded-2xl h-auto w-auto"
              onClick={closeSettingsPopup}
            >
              ✕
            </button>
            {/* Render Settings Page */}
            <SettingsPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
