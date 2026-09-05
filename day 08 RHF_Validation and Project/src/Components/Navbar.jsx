import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 flex rounded items-center justify-between bg-black text-white'>
      <div>
        <img width={35} height={50} className='rounded-full' 
        src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" alt="" />
      </div>
      <div className='flex gap-6 font-semibold text-lg'>
        <p>Home</p>
        <p>About</p>
        <p>Contacts</p>
      </div>
        <button
        onClick={() => setToggle((prev) => !prev)}
        className="p-2 bg-blue-700 text-white cursor-pointer rounded"
      >
        Create user
      </button>
    </div>
  )
}

export default Navbar
