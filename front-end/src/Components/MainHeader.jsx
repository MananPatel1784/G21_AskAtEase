// src/Components/Header.js

import React from "react";
import { Link } from 'react-router-dom';
import AskAtEaseLogo from "./Assets/AskAtEase.png";

const Header = () => {
  return (
    <div className="qHeader sticky w-full bg-customGradient1 shadow-custom flex items-center justify-evenly">
      {/* Logo */}
      <Link to="/ReturnHome">
        <div className="qHeader__logo flex items-center space-x-2">
          <img src={AskAtEaseLogo} alt="Logo" className="h-20 w-30 m-2" />
        </div>
      </Link>

      {/* Icons Section */}
      <div className="qHeader__icons flex space-x-16">

        <Link to="/ReturnHome">
            <span>
              <svg
                className="h-8 w-8 text-button cursor-pointer"
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
        <span>
          <svg
            className="h-8 w-8 text-button cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </span>
        <span>
          <svg
            className="h-8 w-8 text-button cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <polyline points="9 11 12 14 20 6"></polyline>
            <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
          </svg>
        </span>
        <span>
          <svg
            className="h-8 w-8 text-button cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
            <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
          </svg>
        </span>
      </div>

      {/* Search Section */}
      <div className="qHeader__input flex items-center px-2 ml-2">
        <input
          type="text"
          placeholder="Search"
          className="input-custom p-2 border-button border-4 rounded-md"
          id="searching"
        />
      </div>

      {/* Right Section */}
      <button className="qHeader__Rem flex items-center space-x-4 ml-4">
          <img
            src={AskAtEaseLogo}
            alt="Logo"
            className="h-16 w-16 m-2 border-button border-4 rounded-full"
          />
      </button>
    </div>
  );
};

export default Header;