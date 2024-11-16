// AnswerPage.jsx
import React from "react";
import Header from "../Components/MainHeader";
// import MainComponent from "../Components/maincomponent"; // Import MainComponent
// import AnswerLeftSection  from "./AnswerLeftSection";
import AnswerMainComponent from "./AnswerMainComponent";

const AnswerPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Header/>
      {/* Integrate the MainComponent */}
      {/* <MainComponent /> */}
      {/* <AnswerLeftSection/> */}
      <AnswerMainComponent/>
    </div>
  );
};

export default AnswerPage;
