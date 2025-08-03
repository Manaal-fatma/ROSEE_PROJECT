import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-[#f7f6f9] border-r border-gray-200 shadow-md">
      <div className="flex flex-col gap-6 pt-10 px-6 text-[15px]">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? "bg-[#d3cce3] text-[#4b3869]"
                : "bg-[#ebe7f0] hover:bg-[#e0dbec] text-gray-700"
            }`
          }
          to={"/add"}
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add Items" />
          <p className="text-base font-medium md:block">Add Items</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? "bg-[#d3cce3] text-[#4b3869]"
                : "bg-[#ebe7f0] hover:bg-[#e0dbec] text-gray-700"
            }`
          }
          to={"/list"}
        >
          <img className="w-5 h-5" src={assets.parcel_icon} alt="List Items" />
          <p className="text-base font-medium md:block">List Items</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? "bg-[#d3cce3] text-[#4b3869]"
                : "bg-[#ebe7f0] hover:bg-[#e0dbec] text-gray-700"
            }`
          }
          to={"/orders"}
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="View Orders" />
          <p className="text-base font-medium md:block">View Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
