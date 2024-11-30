//This is the right part component of the main page

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import Gemini from "../Components/Gemini";
import { SpaceContext } from "../contexts/SpaceContext";

function SpacesToFollow() {
  const { spaces } = useContext(SpaceContext);
  const navigate = useNavigate(); // React Router's navigation hook

  // Navigate to the space-specific route
  const handleSpaceClick = (spaceId) => {
    navigate(`/spaces/${spaceId}`); // Redirect to the space-specific route
  };

  return (
    <div className="bg-white" style={{ width: "100%" }}>
      <div
        className="bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] border rounded-2xl mb-8"
        style={{ width: "100%" }}
      >
        <Gemini />
      </div>
      <div className="right_values bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] rounded-lg shadow">
        <h2 className="text-2xl font-bold p-4 text-button border-b-2 border-gray-400 text-center">
          Spaces To Follow
        </h2>

        {/* List of Spaces */}
        {spaces.map((space, index) => (
          <section
            key={space._id}
            className={`p-4 flex items-start space-x-4 ${
              index < spaces.length - 1 ? "border-b-2 border-white" : ""
            }`}
          >
            <div>
              <span
                onClick={() => handleSpaceClick(space._id)}
                className="font-bold hover:underline cursor-pointer"
              >
                {space.name}
              </span>
              <p className="text-black opacity-60 font-bold">
                {space.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default SpacesToFollow;
