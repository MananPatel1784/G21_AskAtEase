import React, { useState, useContext, useEffect } from "react";
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

  const [visibleQuestions, setVisibleQuestions] = useState(7); // Initially show 15 questions
  const [showScrollTop, setShowScrollTop] = useState(false); // State to control visibility of the scroll-to-top button

  // Function to handle 'Show More' button click
  const handleShowMore = () => {
    setVisibleQuestions((prevVisible) => prevVisible + 5); // Show 15 more questions
  };

  // Handle the scroll position and show/hide the "Scroll to Top" button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true); // Show the button after scrolling 300px
    } else {
      setShowScrollTop(false); // Hide the button if scrolled back to the top
    }
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  // Add scroll event listener when component mounts and cleanup when unmounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-slate-200 min-h-screen">
      {/* Include the Header */}
      <MainHeader />

      {/* Main content below the Header */}
      <div className="flex justify-evenly w-full gap-5 p-4">
        {/* Left Section (20%) */}
        <div className="w-1/4 bg-slate-200 p-2 rounded-2xl">
          <LeftSection />
        </div>

        <div className="flex-col w-2/3">
          <div className="bg-white p-2 rounded-xl mb-4">
            <AddQuestion />
          </div>
          {/* Center Section (50%) */}
          <div className="bg-white p-2 rounded-2xl">
            {/* User Input Section */}

            {/* Display Posts */}
            <div className="space-y-6">
              {questions.slice(0, visibleQuestions).map((question) => (
                <Post
                  key={question._id}
                  profileImg="myphoto"
                  name="JIMIT"
                  date="14th Nov, 2024"
                  question={question.questionName}
                  questionId={question._id} // Pass questionId to Post
                />
              ))}
            </div>

            {/* Show More Button */}
            {visibleQuestions < questions.length && (
              <div className="text-center mt-4">
                <button
                  onClick={handleShowMore}
                  className="bg-button text-white p-4 rounded-lg"
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Section (30%) */}
        <div className="bg-white rounded-2xl h-fit" style={{ width: "30%" }}>
          <div className="rounded-2xl">
            <Gemini />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-button text-white p-6 rounded-full shadow-lg cursor-pointer"
        >
          ↑
        </div>
      )}
    </div>
  );
};

export default MainComponent;


