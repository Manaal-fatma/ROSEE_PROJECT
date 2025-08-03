import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setToken }) => {
  return (
    <div className="top-0 left-0 z-50 w-full bg-rose-100/50 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="flex items-center justify-between py-3 px-[5%]">
        <Link to={"/"}>
          {/* <img className="w-44" src={assets.logo} alt="Trendify" /> */}
          <p className="text-4xl sm:text-5xl font-bold tracking-wider text-rose-400 uppercase drop-shadow-sm">
            ROSÉÉ
          </p>
        </Link>
        <button
          onClick={() => setToken("")}
          className="px-5 py-2 text-sm font-medium text-rose-700 bg-rose-200 hover:bg-rose-300 rounded-full transition duration-300 shadow-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
