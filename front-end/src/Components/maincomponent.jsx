import React, { useContext } from "react";
import Post from "./mainpagepost";
import SpacesToFollow from "./mainpagaright";
import myphoto from "./Assets/myphoto.jpg";
import TCS from "./Assets/download.png";
import eyeopen from "./Assets/eye-open.png";
import friedick from "../Components/Assets/friedick.jpeg";
import CR7 from "../Components/Assets/cr7.jpg";
import LeftSection from "../Components/mainleftpart";
import AddQuestion from "../Components/AddQuestion"; // Import the AddPost component
import MainHeader from "../Components/MainHeader";
import { Link } from "react-router-dom";
import { QuestionsContext } from "../contexts/QuestionsContext";

const MainComponent = () => {
  const { questions } = useContext(QuestionsContext);
  console.log(questions);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Include the Header */}
      <MainHeader />

      {/* Main content below the Header */}
      <div className="flex justify-evenly w-full gap-2 p-2">
        {/* Left Section (20%) */}
        <div className="w-1/5 bg-white p-2 rounded-2xl">
          <LeftSection />
        </div>

        {/* Center Section (50%) */}
        <div className="w-2/3 bg-slate-200 p-2 rounded-2xl">
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

            {/* Buttons Row */}
            <div className="flex-col justify-around items-center mt-4 space-x-4">
              <AddQuestion />
              {/* Renders the Create Post and Ask Question buttons */}
            </div>
          </div>

          {/* Display Posts */}
          <div className="space-y-6">
            {questions.map((question) => {
              return (
                <Post
                  key={question._id}
                  profileImg={myphoto}
                  name="JIMIT"
                  date="14th Nov, 2024"
                  question={question.questionName}
                  // description="Looking for insights on salary ranges at TCS..."
                  // postImg={TCS}
                />
              );
            })}
          </div>
        </div>

        {/* Right Section (30%) */}
        <div className="w-3/10 bg-white p-2 rounded-2xl">
          <SpacesToFollow />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
