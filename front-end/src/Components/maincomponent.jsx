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
import Gemini from "./Gemini";
import { Link } from "react-router-dom";
import { QuestionsContext } from "../contexts/QuestionsContext";

const MainComponent = () => {
  const { questions } = useContext(QuestionsContext);

  console.log(questions);
  return (
    <div className="bg-slate-200 min-h-screen">
      {/* Include the Header */}
      <MainHeader />

      {/* Main content below the Header */}
      <div className="flex justify-evenly w-full gap-2 p-2">
        {/* Left Section (20%) */}
        <div className="w-1/5 bg-white p-2 rounded-2xl">
          <LeftSection />
        </div>

        <div className="flex-col w-2/3">
          <div className="bg-white p-2 rounded-xl mb-4">
            <AddQuestion />
          </div>
          {/* Center Section (50%) */}
          <div className=" bg-white p-2 rounded-2xl">
            {/* User Input Section */}

            {/* Display Posts */}
            <div className="space-y-6">
              {questions.map((question) => (
                <Post
                  key={question._id}
                  profileImg="/path/to/profile.jpg"
                  name="JIMIT"
                  date="14th Nov, 2024"
                  question={question.questionName}
                  questionId={question._id} // Pass questionId to Post
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (30%) */}
        <div className="bg-white rounded-2xl h-fit" style={{ width: "30%" }}>
          <div className="rounded-2xl">
            <Gemini />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
