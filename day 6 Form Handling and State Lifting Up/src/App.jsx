import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Usercard from "./components/Usercard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300 min-h-screen p-6">
      
      {/* Login / Register */}
      <div className="flex justify-center">
        {toggle ? (
          <Login setToggle={setToggle} />
        ) : (
          <Register setUsers={setUsers} setToggle={setToggle} />
        )}
      </div>

      {/* Users */}
      <div className="flex flex-wrap gap-4 mt-8 justify-center">
        {users.map((user, index) => (
          <Usercard key={index} user={user} />
        ))}
      </div>
      
    </div>
  );
};

export default App;