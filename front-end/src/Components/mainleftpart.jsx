import React, { useContext } from "react";
import CreateSpace from "./CreateSpace";
import { useNavigate } from "react-router-dom";
import { SpaceContext } from "../contexts/SpaceContext";

const LeftSection = () => {
  const { spaces, dispatch } = useContext(SpaceContext);
  const navigate = useNavigate(); // React Router's navigation hook

  // Navigate to the space-specific route
  const handleSpaceClick = (spaceId) => {
    navigate(`/${spaceId}/questions`); // Redirect to the space-specific route
  };

  // Reverse the order of spaces so the new ones appear first
  const reversedSpaces = [...spaces].reverse();

  console.log(reversedSpaces);

  return (
    <div className="w-1/5" style={{ width: "100%" }}>
      {/* Create Space Section */}
      <div className="rounded-lg overflow-hidden">
        {/* CreateSpace Component */}
        <CreateSpace dispatch={dispatch} />

        {/* Space Sections */}
        {reversedSpaces.map((space) => (
          <section
            key={space._id}
            className="p-4 mt-2 mr-1 ml-1 flex items-start space-x-4 border border-gray-600 rounded-md mb-2"
          >
            <div>
              <button
                onClick={() => handleSpaceClick(space._id)}
                className="text-base font-bold hover:underline cursor-pointer block size-max hover:bg-white"
              >
                {space.name}
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
