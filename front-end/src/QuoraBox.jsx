import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";  // Make sure this is the correct import
import { Avatar } from "@mui/material";
import "./QuoraBox.css";

const QuoraBox = () => {
  const user = useSelector(selectUser);  // Access the user from Redux

//   If user is null or undefined, show the loading state
  if (!user) {
    return <div>Loading...</div>;  // Optionally, show a loading spinner or message
  }

  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
          src={user.photo || "default-avatar-url"}  // Show default avatar if no photo
          className="quoraBox__infoAvatar"
        />
        <h5>{user.displayName || user.email || 'Guest'}</h5>  {/* Use fallback text if no displayName */}
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
};

export default QuoraBox;
