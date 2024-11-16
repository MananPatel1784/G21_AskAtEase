import React from "react";
import "./helpheader.css"; 
import AskAtEaseLogo from "./Assets/AskAtEase.png";

const HelpHeader = () => {
  return (
    <div className="header">
      <div className="logo" onClick={() => (window.location.href = "/")}>
        <img
          src={AskAtEaseLogo}
          alt="AskAtEaseLogo"
          className="h-16 w-16 m-2 border-button border-2 rounded-full object-cover"
        />
      </div>
      <div className="header-buttons">
        <button onClick={() => alert("Returning to Quora!")}>Return to Quora</button>
        <button onClick={() => alert("Contact Us!")}>Contact Us</button>
      </div>
    </div>
  );
};

export default HelpHeader;
