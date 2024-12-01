import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Assuming AuthContext is available

const SettingsPage = () => {
  const { logout } = useAuth(); // Extract the logout function from the AuthContext
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout method to sign the user out
      navigate("/login"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

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
        ].map((item, index) => (
          <Link
            key={index}
            to={item.link} // Use 'to' for react-router Link
            className="block w-full bg-button text-white text-center py-2 rounded-lg text-lg hover:bg-red-900 transition hover:no-underline"
          >
            {item.name}
          </Link>
        ))}
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="block w-full bg-button text-white text-center py-2 rounded-lg text-lg hover:bg-red-900 transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
