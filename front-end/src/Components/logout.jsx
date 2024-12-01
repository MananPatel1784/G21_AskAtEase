import React from "react";

const Logout = () => {
  return (
    <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="bg-white rounded-lg w-[500px] h-[500px] p-10 text-center shadow-lg space-y-16">
        <div className="flex justify-center items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className="w-[80px] h-[80px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v15a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25V15M18 8.25l3 3-3 3M21 11.25H9"
            />
          </svg>
        </div>
        <p className="text-lg text-gray-800 mb-5 leading-relaxed">
          Oh no! You're leaving...<br />Are you sure?
        </p>
        <div className="flex justify-between gap-5">

          
              <button className="bg-button text-white rounded-full py-4 px-4 text-md font-bold cursor-pointer">
                No, keep me in
              </button>
        
          

         
              <button className="bg-button text-white border rounded-full p-6 text-sm font-bold cursor-pointer">
                Yes, log me out
              </button>
        
          
        </div>
      </div>
    </div>
  );
};

export default Logout;
