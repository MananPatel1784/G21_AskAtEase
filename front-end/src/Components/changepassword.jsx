import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AskAtEase from './Assets/AskAtEase.png';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New passwords do not match");
      return;
    }

    if (!isUpdating) {
      setIsUpdating(true);
      setErrorMessage('');
      setSuccessMessage('');
      try {
        // Assuming you have an API endpoint for changing the password
        const response = await fetch('/api/change-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add authorization token or session if needed
          },
          body: JSON.stringify({
            currentPassword,
            newPassword
          })
        });

        const data = await response.json();

        if (response.ok) {
          setSuccessMessage("Password updated successfully!");
          setTimeout(() => {
            navigate("/profile"); // Navigate to another page, e.g., profile or home
          }, 2000);
        } else {
          setErrorMessage(data.message || 'Error updating password');
        }
      } catch (error) {
        setErrorMessage('An error occurred while updating the password');
      } finally {
        setIsUpdating(false);
      }
    }
  };

  return (
    <main className="font-lexend flex justify-center items-center bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] min-h-screen w-full p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-8">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={AskAtEase} // Replace with your image URL
            alt="Change Password Illustration"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Change Password Form */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-[162f56] text-center mb-4">
            Change Your Password
          </h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#818597] mb-1">
                Current Password:
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-[#e2e2e2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#61cea6] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#818597] mb-1">
                New Password:
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-[#e2e2e2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#61cea6] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#818597] mb-1">
                Confirm New Password:
              </label>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-[#e2e2e2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#61cea6] focus:border-transparent"
              />
            </div>
            {errorMessage && (
              <p className="text-[#FF0000] text-sm text-center">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-[#61cea6] text-sm text-center">{successMessage}</p>
            )}
            <button
              type="submit"
              disabled={isUpdating}
              className="w-full py-2 bg-[#AD3B29] text-white rounded-md hover:bg-[#FF9797] transition duration-200 disabled:bg-[#e2e2e2]"
            >
              {isUpdating ? "Updating..." : "Update Password"}
            </button>
          </form>
          <div className="text-sm text-center mt-4">
            Changed your mind?{' '}
            <button
              onClick={() => navigate('/profile')}
              className="text-[#AD3B29] font-bold hover:underline"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChangePassword;
