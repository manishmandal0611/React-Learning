import React from "react";

const Login = ({ setToggle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white w-96 p-6 rounded-xl flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-2 border border-gray-400 rounded"
          type="email"
          placeholder="Email"
          required
        />

        <input
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
          required
        />

        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded cursor-pointer"
        >
          Login
        </button>
      </form>

      <p className="text-sm">
        Didn't have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;