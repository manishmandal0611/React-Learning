import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1>Logo</h1>
      <div className='flex gap-6 items-center'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <button>Logo</button>
    </div>
  );
};

export default Navbar
