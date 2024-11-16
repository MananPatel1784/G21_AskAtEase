import React from "react";

const SettingsPage = () => {
  return (
    <div className="w-full mt-4 bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] rounded-lg p-4">
      <h2 className="text-2xl font-bold text-center mb-2">Settings</h2> 
      <div className="space-y-2"> 
        {[
          { name: "My Profile", link: "/profile" },
          { name: "Change Password", link: "/change-password" },
          { name: "Help", link: "/help" },
          { name: "Log Out", link: "/logout" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block w-full bg-button text-white text-center py-2 rounded-lg text-lg hover:bg-red-600 transition" // Reduced py-3 to py-2
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;

