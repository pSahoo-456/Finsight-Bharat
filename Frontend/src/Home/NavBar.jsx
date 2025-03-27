import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../contentStore/authStore";

function NavBar() {
  const { logout } = useAuthStore();
  const handleSignOut = () => {
    console.log("Heyyyy");
    logout();
  };

  return (
    <>
      <nav className="relative flex justify-between items-center px-10 py-4 shadow-md bg-white">
        <div className="text-3xl font-bold">
          <span className="text-blue-600 drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)] font-bold">FinSight</span>
          <span className="text-gray-600 drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)] font-bold">Bharat</span>
        </div>
        <div className="flex space-x-6 text-gray-700 font-medium ml-80 text-lg">
          <NavLink to="/mainpage/home" className="font-bold transition-all duration-500 hover:scale-110 hover:text-blue-600">
            Home
          </NavLink>
          <NavLink to="/mainpage/dashboard" className="font-bold transition-all duration-500 hover:text-blue-600 hover:scale-110">
            Dashboard
          </NavLink>
          <NavLink to="/mainpage/marketIntelegence" className="font-bold transition-all duration-500 hover:text-blue-600 hover:scale-110">
            Market Intelligence
          </NavLink>
          <NavLink to="/mainpage/reports" className="font-bold transition-all duration-500 hover:text-blue-600 hover:scale-110">
            Reports
          </NavLink>
          <NavLink to="/mainpage/exploreData" className="font-bold transition-all duration-500 hover:text-blue-600 hover:scale-110">
            Explore Data
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink to='/' className="bg-blue-600 p-2 rounded-2xl hover:bg-blue-800">
            Signout
          </NavLink>
        </div>
        {/* Animated line below navbar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-[animateLine_10s_linear_infinite]"></div>
      </nav>
      <style>
        {`
          @keyframes animateLine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </>
  );
}

export default NavBar;
