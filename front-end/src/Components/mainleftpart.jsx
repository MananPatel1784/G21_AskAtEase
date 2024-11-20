import React from "react";
import CreateSpace from "./CreateSpace";

const LeftSection = () => {
  return (
    <div
      className="w-1/5 bg-gradient-to-b from-[#F0D9C4] to-[#FF9797]"
      style={{ width: "100%" }}
    >
      {/* Create Space Section */}
      <div className="right_values bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] rounded-lg shadow overflow-hidden">
        {/* CreateSpace Component */}
        <CreateSpace />

        {/* Space Sections */}
        {[
          {
            name: "History",
            link: "https://example.com/mobile-app-programmer",
          },
          { name: "Business", link: "https://example.com/quota-of-quotes" },
          { name: "Psychology", link: "https://example.com/art-and-artist" },
          { name: "Cooking", link: "https://example.com/friedrich-nietzsche" },
          {
            name: "Music",
            link: "https://example.com/stock-market-strategies",
          },
          { name: "Science", link: "https://example.com/architectural-world" },
          { name: "Health", link: "https://example.com/architectural-world" },
          { name: "Movies", link: "https://example.com/architectural-world" },
          {
            name: "Technology",
            link: "https://example.com/architectural-world",
          },
          {
            name: "Education",
            link: "https://example.com/architectural-world",
          },
        ].map((space, index) => (
          <section
            key={index}
            className="p-4 flex items-start space-x-4 border-b-2 border-white"
          >
            <div>
              <a
                href={space.link}
                className="font-bold hover:underline cursor-pointer"
              >
                {space.name}
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* Spaces To Follow Button Section */}
      <div className="mt-6 rounded-lg shadow-lg p-4">
        <button
          className="text-2xl font-bold p-4 text-white bg-button text-center flex mx-auto rounded 
                           items-center justify-center gap-4 hover:scale-110 transition-all duration-200 object-contain"
        >
          Spaces To Follow
        </button>
      </div>
    </div>
  );
};

export default LeftSection;
