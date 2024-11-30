import React from "react";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div className="w-full mt-4 bg-header rounded-lg p-4">
      <h2 className="text-2xl text-white font-bold text-center mb-2">
        Settings
      </h2>
      <div className="space-y-2">
        {[
          { name: "My Profile", link: "/profile" },
          { name: "Change Password", link: "/change-password" },
          { name: "Help", link: "/help" },
          { name: "Log Out", link: "/logout" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.link} // Use 'to' for react-router Link
            className="block w-full bg-button text-white text-center py-2 rounded-lg text-lg hover:bg-red-900 transition hover:no-underline"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
