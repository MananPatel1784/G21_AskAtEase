// This is the right part component of the main page

import React, { useContext } from "react";
import Gemini from "../Components/Gemini";
import { SpaceContext } from "../contexts/SpaceContext";

function SpacesToFollow() {
  const { spaces } = useContext(SpaceContext);
  return (
    <div className="bg-white" style={{ width: "100%" }}>
      <div
        className="border-2 border-gray-500 border-opacity-20 rounded-2xl mb-8"
        style={{ width: "100%" }}
      >
        <Gemini />
      </div>
      <div className="right_values rounded-lg shadow">
        <h2 className="text-2xl font-bold p-4 text-button border-b-2 border-gray-400 border-2 rounded-lg mb-2 text-center">
          Spaces To Follow
        </h2>

        {spaces.map((space, index) => (
          <section
            key={space._id}
            className={`p-4 flex items-start space-x-4 border border-gray-300 rounded-md mb-2`}
          >
            {/* <img
              src={space.imgSrc}
              alt={space.title}
              className="h-14 w-14 rounded-full"
            /> */}
            <div>
              <a
                href={space.link}
                className="font-bold hover:underline cursor-pointer"
              >
                {space.name}
              </a>
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
