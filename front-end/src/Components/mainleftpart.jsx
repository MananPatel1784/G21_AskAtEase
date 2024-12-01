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
  console.log(spaces);
  return (
    <div className="w-1/5" style={{ width: "100%" }}>
      {/* Create Space Section */}
      <div className="rounded-lg overflow-hidden">
        {/* CreateSpace Component */}
        <CreateSpace dispatch={dispatch} />

        {/* Space Sections */}
        {spaces.map((space) => (
          <section
            key={space._id}
            className=" p-4 mt-2 mr-1 ml-1 flex items-start space-x-4 border border-gray-600 rounded-md mb-2"
          >
            <div>
              <button
                onClick={() => handleSpaceClick(space._id)}
                // href={space.link}
                className="hover:bg-slate-500 text-base font-bold hover:underline cursor-pointer block size-max"
              >
                {space.name}
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* Spaces To Follow Button Section */}
      {/* <div className="mt-6 rounded-lg shadow-lg p-4">
        <button
          className="text-2xl font-bold p-4 text-white bg-button text-center flex mx-auto rounded 
                           items-center justify-center gap-4 hover:scale-110 transition-all duration-200 object-contain"
        >
          Follow Space
        </button>
      </div> */}
    </div>
  );
};

export default LeftSection;
