import React from 'react'

const Usercard = () => {
  return (
    <div className="h-30 p-4 border-white rounded">
      <div className="h-60">
        <img className='object-fit h-full'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1pkbKtt3GVsy318SGRqPJ1vphR-w1TeIGcrxN-sb-vnD9PCwTmPVSRE&s=10" alt="" />
      </div>
      <div>
        <h1>Name</h1>
        <p>Email</p>
        <p>Contact</p>
      </div>
      <div>
        <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Delete</button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Update</button>
      </div>
    </div>
  )
}

export default Usercard
