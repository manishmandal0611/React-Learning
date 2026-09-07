import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyShop);

  return (
    <div className="bg-black rounded p-5 flex items-center justify-between">
      <div className="text-2xl font-bold text-white">logo</div>
      <div className="flex gap-10 text-xl">
        <p onClick={() => setIsCartOpen(false)} className="text-white cursor-pointer">
          Home
        </p>
        <p onClick={() => setIsCartOpen(true)} className="text-white cursor-pointer">
          Cart
        </p>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded">Login</button>
    </div>
  );
};

export default Navbar;