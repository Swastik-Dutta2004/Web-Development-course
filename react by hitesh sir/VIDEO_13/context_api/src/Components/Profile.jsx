import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">⚠️ Not Logged In</h2>
          <p className="text-gray-600">Please login to access your profile.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <img
            src={`https://ui-avatars.com/api/?name=${user.username}&background=ff7f50&color=fff&size=128`}
            alt="User Avatar"
            className="w-28 h-28 rounded-full mx-auto mb-4 shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, {user.username} 🎉
          </h2>
          <p className="text-gray-600">You are successfully logged in.</p>
        </div>
      </div>
    );
  }
}

export default Profile;
