import React from "react";
// import { useParams } from "react-router-dom";
import Post from "./mainpagepost";
import SpacesToFollow from "./mainpagaright";
import myphoto from "./Assets/myphoto.jpg";
import TCS from "./Assets/download.png";
import eyeopen from "./Assets/eye-open.png";
import friedick from "../Components/Assets/friedick.jpeg";
import CR7 from "../Components/Assets/cr7.jpg";
import AnswerLeftSection from "../Components/AnswerLeftSection";
import AnswerRightSection from "./AnswerRightSection";
import AddQuestion from "./AddQuestion";
import Gemini from "./Gemini";
import Header from "./MainHeader";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { QuestionsContext } from "../contexts/QuestionsContext";

const AnswerMainComponent = () => {
  const { questions } = useContext(QuestionsContext);
  const { id } = useParams();

  const filteredQuestions = questions.filter(
    (question) => question.spaceId == id
  );

  return (
    <div className="bg-slate-200 min-h-screen">
      {/* Include the Header */}
      <Header />

      {/* Main content below the Header */}
      <div className="flex justify-evenly w-full gap-2 p-2">
        {/* Left Section (20%) */}
        <div className="w-1/5 bg-white p-2 rounded-2xl">
          {/* <LeftSection /> */}
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
              {filteredQuestions.length > 0 ? (
                <div className="space-y-6">
                  {filteredQuestions.map((question) => (
                    <Post
                      key={question._id}
                      profileImg="/path/to/profile.jpg"
                      name="User Name"
                      date="Date"
                      question={question.questionName}
                      questionId={question._id}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-lg text-gray-500">
                  No questions found for this space.
                </p>
              )}
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

export default AnswerMainComponent;
