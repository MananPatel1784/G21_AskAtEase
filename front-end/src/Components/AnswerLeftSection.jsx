

import React from 'react';

const AnswerLeftSection = () => {
  return (
    <div className="w-1/5 mt-10 bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] border-button border-4 rounded-xl" style={{ width: "100%"}}>
      {/* Create Space Section */}
      <div className="right_values bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] rounded-lg shadow overflow-hidden">
        {/* Create Space Button */}
          <h2 className="text-2xl font-bold p-4 text-button border-b-2 border-gray-400 text-center">
                    Questions
          </h2>

        {/* Space Sections */}
        {[
          { name: 'Question for you', link: 'https://example.com/mobile-app-programmer' },
          { name: 'Answers Requests', link: 'https://example.com/quota-of-quotes' },
          { name: 'Drafts', link: 'https://example.com/art-and-artist' },
        ].map((space, index) => (
          <section key={index} className="p-4 flex items-start space-x-4 border-b-2 border-white">
            <div>
              <a href={space.link} className="font-bold hover:underline cursor-pointer">
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
