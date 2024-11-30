import React from "react";

const AnswerLeftSection = () => {
  return (
    <div className=" border-gray-500 border-4 rounded-xl w-full">
      {/* Create Space Section */}
      <div className="right_values rounded-lg shadow overflow-hidden">
        {/* Create Space Button */}
        <h2 className="text-2xl font-bold p-4 text-button border-4 -m-2 border-gray-500 text-center">
          Questions
        </h2>

        {/* Space Sections */}
        {[
          {
            name: "Question for you",
            link: "https://example.com/mobile-app-programmer",
          },
          {
            name: "Answers Requests",
            link: "https://example.com/quota-of-quotes",
          },
          { name: "Drafts", link: "https://example.com/art-and-artist" },
        ].map((space, index) => (
          <section
            key={index}
            className="p-4 flex items-start space-x-4 border-b-2 border-white"
          >
            <div>
              <a
                href={space.link}
                className=" hover:underline cursor-pointer hover:font-bold"
              >
                {space.name}
              </a>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AnswerLeftSection;
