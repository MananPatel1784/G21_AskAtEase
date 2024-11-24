import React from "react";
import Post from "./mainpagepost";
import SpacesToFollow from "./mainpagaright";
import myphoto from "./Assets/myphoto.jpg";
import TCS from "./Assets/download.png";
import eyeopen from "./Assets/eye-open.png";
import friedick from "../Components/Assets/friedick.jpeg";
import CR7 from "../Components/Assets/cr7.jpg";
import AnswerLeftSection from "../Components/AnswerLeftSection";
import AnswerRightSection from "./AnswerRightSection";
import AddPost from "../Components/AddPost"; // Import the AddPost component

const AnswerMainComponent = () => {
  return (
    <div className="flex justify-evenly w-full gap-2 bg-white p-2">
      {/* Left Section (20%) */}
      <div className="w-1/5 bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] p-2 m-2 rounded-2xl h-max">
        <AnswerLeftSection />
      </div>

      {/* Center Section (50%) */}
      <div className="w-2/3 bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] p-2 rounded-2xl">
        {/* User Input Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={myphoto}
              alt="User Name"
              className="h-12 w-12 rounded-full"
            />
            <h3 className="font-semibold">JIMIT MEHTA</h3>
          </div>
          <p className="text-xl font-semibold mt-4">Ask Anything!</p>

          <textarea
            className="w-full mt-4 p-4 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Type your question or link here..."
          ></textarea>

          {/* Buttons Row */}
          <div className="font-lexend flex justify-around items-center mt-4 space-x-4">
            <AddPost /> {/* Renders the Create Post and Ask Question buttons */}
            <button className="bg-button text-white py-2 px-4 rounded-lg hover:bg-button">
              Answer
            </button>
          </div>
        </div>

        {/* Display Posts */}
        <div className="space-y-6">
          <Post
            profileImg={myphoto}
            name="JIMIT"
            date="14th Nov, 2024"
            question="What's your salary in TCS?"
            description="Looking for insights on salary ranges at TCS..."
            postImg={TCS}
          />
          <Post
            profileImg={eyeopen}
            name="Alex"
            date="14th Nov, 2024"
            question="What would you guys want to have in video tutorial"
          />
          <Post
            profileImg={friedick}
            name="Football_Fan"
            date="14th Nov, 2024"
            question="Who is the TOP Scorer of All Time?"
            postImg={CR7}
          />
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="w-3/10 bg-white rounded-2xl">
        <AnswerRightSection />
      </div>
    </div>
  );
};

export default AnswerMainComponent;
