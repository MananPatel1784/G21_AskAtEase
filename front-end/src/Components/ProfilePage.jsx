import React, { useState } from "react";
import Header from "./MainHeader";
import { getAuth } from "firebase/auth";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false); // State to control modal visibility
  const [profile, setProfile] = useState({
    bio: "Software Engineer | Tech Enthusiast",
    joined: "January 2022",
  });
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user)

  const [tempProfile, setTempProfile] = useState({ ...profile }); // Temporary state for modal inputs

  // Handle profile update
  const handleSave = (e) => {
    e.preventDefault();
    setProfile(tempProfile); // Save the temporary profile to actual profile
    setIsEditing(false); // Close the modal
  };

  const handleCancel = () => {
    setTempProfile(profile); // Reset tempProfile to original profile
    setIsEditing(false); // Close the modal
  };

  return (
    <div className="bg-gray-50 min-h-screen font-['Lexend']">
      <Header />
      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full shadow"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {user.displayName}
                </h2>
                <p className="text-gray-600">{profile.bio}</p>
                <p className="text-gray-500 text-sm">Joined {profile.joined}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 sm:mt-0 bg-button text-white py-2 px-6 rounded-lg shadow"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">100</h3>
            <p className="text-gray-500">Answers</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">50</h3>
            <p className="text-gray-500">Questions</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">1.2k</h3>
            <p className="text-gray-500">Followers</p>
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h3>
          <ul className="space-y-4">
            <li className="border-b border-gray-200 pb-4">
              <p className="text-gray-800">
                <span className="font-semibold">Answered:</span> How to learn
                React effectively?
              </p>
              <p className="text-gray-500 text-sm">2 days ago</p>
            </li>
            <li className="border-b border-gray-200 pb-4">
              <p className="text-gray-800">
                <span className="font-semibold">Asked:</span> What are the best
                resources for learning Tailwind CSS?
              </p>
              <p className="text-gray-500 text-sm">5 days ago</p>
            </li>
            <li>
              <p className="text-gray-800">
                <span className="font-semibold">Answered:</span> What is the
                difference between React and Angular?
              </p>
              <p className="text-gray-500 text-sm">1 week ago</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Modal for editing profile */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Edit Profile
            </h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label
                  htmlFor="bio"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={tempProfile.bio}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, bio: e.target.value })
                  }
                  className="w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-950"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className=" bg-gray-300 py-2 px-4 rounded-lg "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-button text-white py-2 px-4 rounded-lg shadow "
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios
// import Header from "./MainHeader";

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(false); // State to control modal visibility
//   const [profile, setProfile] = useState({
//     name: "",
//     bio: "",
//     joined: "",
//   });
//   const [tempProfile, setTempProfile] = useState({ ...profile }); // Temporary state for modal inputs
//   const [isLoading, setIsLoading] = useState(true); // Loading state for fetching data
//   const [error, setError] = useState(null); // Error handling state

//   // Fetch the user profile from the backend
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("/api/users/profile"); // Replace with your actual API URL
//         const { name, bio, createdAt } = response.data;
//         setProfile({
//           name,
//           bio,
//           joined: new Date(createdAt).toLocaleDateString(), // Format the join date
//         });
//         setTempProfile({
//           name,
//           bio,
//         });
//         setIsLoading(false); // Set loading to false when data is fetched
//       } catch (err) {
//         setError("Failed to load profile");
//         setIsLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   // Handle profile update
//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put("/api/users/profile", tempProfile); // Update user profile via API
//       setProfile(response.data); // Update the profile state with the response data
//       setIsEditing(false); // Close the modal
//     } catch (err) {
//       setError("Failed to save changes");
//     }
//   };

//   const handleCancel = () => {
//     setTempProfile(profile); // Reset tempProfile to original profile
//     setIsEditing(false); // Close the modal
//   };

//   // Render loading or error states
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen font-['Lexend']">
//       <Header />
//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto p-6">
//         {/* Profile Section */}
//         <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full shadow"
//               />
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-800">
//                   {profile.name}
//                 </h2>
//                 <p className="text-gray-600">{profile.bio}</p>
//                 <p className="text-gray-500 text-sm">Joined {profile.joined}</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsEditing(true)}
//               className="mt-4 sm:mt-0 bg-button text-white py-2 px-6 rounded-lg shadow hover:bg-button-dark transition"
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>

//         {/* Stats Section */}
//         {/* (Your existing stats code) */}
        
//         {/* Activity Section */}
//         {/* (Your existing activity code) */}
//       </div>

//       {/* Modal for editing profile */}
//       {isEditing && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Profile</h2>
//             <form onSubmit={handleSave}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="name"
//                   className="block text-gray-600 font-medium mb-1"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={tempProfile.name}
//                   onChange={(e) =>
//                     setTempProfile({ ...tempProfile, name: e.target.value })
//                   }
//                   className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-950"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="bio"
//                   className="block text-gray-600 font-medium mb-1"
//                 >
//                   Bio
//                 </label>
//                 <textarea
//                   id="bio"
//                   value={tempProfile.bio}
//                   onChange={(e) =>
//                     setTempProfile({ ...tempProfile, bio: e.target.value })
//                   }
//                   className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-950"
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={handleCancel}
//                   className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-button text-white py-2 px-4 rounded-lg shadow hover:bg-button-dark transition"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios
// import Header from "./MainHeader"; // Import your Header component

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(false); // State to control modal visibility
//   const [profile, setProfile] = useState({
//     name: "",
//     bio: "",
//     joined: "",
//   });
//   const [tempProfile, setTempProfile] = useState({ ...profile }); // Temporary state for modal inputs
//   const [isLoading, setIsLoading] = useState(true); // Loading state for fetching data
//   const [error, setError] = useState(null); // Error handling state

//   // Fetch the user profile from the backend
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("/api/users/1/profile"); // Replace with actual user ID
//         const { username, emailId, createdAt, followers, following } = response.data;
//         setProfile({
//           username,
//           emailId,
//           joined: new Date(createdAt).toLocaleDateString(), // Format the join date
//           followersCount: followers.length,
//           followingCount: following.length,
//         });
//         setTempProfile({
//           username,
//           emailId,
//         });
//         setIsLoading(false); // Set loading to false when data is fetched
//       } catch (err) {
//         setError("Failed to load profile");
//         setIsLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   // Handle profile update
//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put("/api/users/1/profile", tempProfile); // Update user profile via API
//       setProfile(response.data); // Update the profile state with the response data
//       setIsEditing(false); // Close the modal
//     } catch (err) {
//       setError("Failed to save changes");
//     }
//   };

//   const handleCancel = () => {
//     setTempProfile(profile); // Reset tempProfile to original profile
//     setIsEditing(false); // Close the modal
//   };

//   // Render loading or error states
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen font-['Lexend']">
//       <Header />
//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto p-6">
//         {/* Profile Section */}
//         <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full shadow"
//               />
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-800">{profile.username}</h2>
//                 <p className="text-sm text-gray-500">Joined: {profile.joined}</p>
//               </div>
//             </div>
//             <div className="mt-4 sm:mt-0">
//               <button
//                 className="px-6 py-2 text-white bg-blue-600 rounded-lg"
//                 onClick={() => setIsEditing(true)}
//               >
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//           <div className="mt-4">
//             <p className="text-gray-600">Bio: {profile.emailId}</p>
//           </div>
//         </div>

//         {/* Edit Profile Modal */}
//         {isEditing && (
//           <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg p-8 w-96">
//               <h3 className="text-2xl font-bold mb-4">Edit Profile</h3>
//               <form onSubmit={handleSave}>
//                 <div className="mb-4">
//                   <label htmlFor="username" className="block text-gray-700">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     value={tempProfile.username}
//                     onChange={(e) => setTempProfile({ ...tempProfile, username: e.target.value })}
//                     className="w-full px-4 py-2 border rounded-lg"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="emailId" className="block text-gray-700">
//                     Email ID
//                   </label>
//                   <input
//                     type="email"
//                     id="emailId"
//                     value={tempProfile.emailId}
//                     onChange={(e) => setTempProfile({ ...tempProfile, emailId: e.target.value })}
//                     className="w-full px-4 py-2 border rounded-lg"
//                   />
//                 </div>
//                 <div className="flex justify-end space-x-4">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="px-4 py-2 bg-gray-500 text-white rounded-lg"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
