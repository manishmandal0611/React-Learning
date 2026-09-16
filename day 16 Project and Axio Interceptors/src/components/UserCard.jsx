import React from "react";

const UserCard = ({ user }) => {
  if (!user) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 text-center">
        User data not available
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 p-5">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">
          {user.name?.firstname?.charAt(0)?.toUpperCase()}
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 capitalize">
            {user.name?.firstname} {user.name?.lastname}
          </h2>

          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>

        <p>
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>

        <p>
          <span className="font-semibold">City:</span> {user.address?.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
