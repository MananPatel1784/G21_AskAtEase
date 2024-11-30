import React from "react";

const AnswerRightSection = () => {
  return (
    <div className="bg-gray-200 rounded-lg">
      {/* Right section content with padding */}
      <div className="right_values border-4 border-gray-500 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold p-4 text-button border-b-4 border-gray-400 text-center">
          Topics you know about
        </h2>

        <section className="p-4 flex items-center justify-center space-x-4 border-b-2 border-white flex-col gap-y-6">
          <div className="flex justify-center items-center flex-col  space-y-2">
            <p className="font-bold hover:underline">No Topics Yet</p>
            <p className="text-black opacity-60 font-bold w-80 ml-8">
              You'll get better questions if you add more specific topics
            </p>
          </div>

          <button
            id="login-button"
            className="py-3 px-6 w-32 h-10 font-lexend text-white rounded-md text-sm font-bold hover:bg-red-900 transition-all duration-300 mx-auto border-white border bg-button"
          >
            Add Topics
          </button>
        </section>
      </div>
    </div>
  );
};

export default AnswerRightSection;
