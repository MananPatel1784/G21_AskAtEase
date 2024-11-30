import React, { useContext } from "react";
import CreateSpace from "./CreateSpace";
import { SpaceContext } from "../contexts/SpaceContext";

const LeftSection = () => {
  const { spaces, dispatch } = useContext(SpaceContext);
  console.log(spaces);
  return (
    <div className="w-1/5" style={{ width: "100%" }}>
      {/* Create Space Section */}
      <div className="right_values rounded-lg shadow overflow-hidden">
        {/* CreateSpace Component */}
        <CreateSpace dispatch={dispatch} />

        {/* Space Sections */}
        {spaces.map((space) => (
          <section
            key={space._id}
            className=" p-4 mt-2 mr-1 ml-1 flex items-start space-x-4 border border-gray-300 rounded-md mb-2"
          >
            <div>
              <a
                // href={space.link}
                className="font-bold hover:underline cursor-pointer"
              >
                {space.name}
              </a>
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
