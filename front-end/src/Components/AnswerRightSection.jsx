import React from "react";

const AnswerRightSection = () => {
  return (
    <div className="bg-white p-2" style={{ width: "100%" }}>
      {/* Right section content with padding */}
      <div className="right_values bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] rounded-lg shadow">
        <h2 className="text-2xl font-bold p-4 text-button border-b-2 border-gray-400 text-center">
          Topics you know about
        </h2>

        <section className="p-4 flex items-center justify-center space-x-4 border-b-2 border-white flex-col gap-y-6">
          <div className="flex justify-center items-center flex-col m-2 space-y-2">
            <p className="font-bold hover:underline">No Topics Yet</p>
            <p className="text-black opacity-60 font-bold w-80 ml-8">
              You'll get better questions if you add more specific topics
            </p>
          </div>

          <button
            id="login-button"
            className="py-3 px-6 w-32 h-10 font-mullish text-white rounded-md text-sm font-bold hover:scale-125 transition-all duration-300 mx-auto border-white border bg-button"
          >
            Add Topics
          </button>
        </section>
      </div>
    </div>
  );
};

export default AnswerRightSection;
