import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, formData]);

    setFormData({
      name: "",
      email: "",
      password: "",
      image: "",
    });

    alert("Registration successful!");
  };

  return (
    <div className="bg-white w-96 p-6 rounded-xl flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <input
          value={formData.name}
          required
          name="name"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />

        {/* Email */}
        <input
          value={formData.email}
          required
          name="email"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="email"
          placeholder="Email"
        />

        {/* Password */}
        <input
          value={formData.password}
          required
          name="password"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />

        {/* Image */}
        <input
          value={formData.image}
          name="image"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="Image URL (optional)"
        />

        {/* Register Button */}
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      <p className="text-sm">
        Already have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;