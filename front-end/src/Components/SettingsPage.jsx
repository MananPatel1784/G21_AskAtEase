import React from "react";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div className="w-full mt-4 bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] rounded-lg p-4">
      <h2 className="text-2xl font-bold text-center mb-2">Settings</h2>
      <div className="space-y-2">
        {[
          { name: "My Profile", link: "/CheckProfile" },
          { name: "Change Password", link: "/change-password" },
          { name: "Help", link: "/help" },
          { name: "Log Out", link: "/logout" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.link} // Use 'to' for react-router Link
            className="block w-full bg-button text-white text-center py-2 rounded-lg text-lg hover:bg-red-600 transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
