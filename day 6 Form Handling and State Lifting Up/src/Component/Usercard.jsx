import React from "react";

const Usercard = ({ user }) => {
  return (
    <div className="p-4 flex flex-col gap-4 border border-gray-400 rounded-xl bg-white">
      
      {/* User Image */}
      <div className="w-50 h-50 rounded overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={user.image}
          alt={user.name}
        />
      </div>

      {/* User Information */}
      <div>
        <h1 className="text-lg font-bold">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* Delete Button */}
      <button
        type="button"
        className="p-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default Usercard;