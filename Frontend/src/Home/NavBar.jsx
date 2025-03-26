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
      <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
        <div className="text-3xl font-bold">
          <span className="text-blue-600">FinSight</span>
          <span className="text-gray-600">Bharat</span>
        </div>
        <div className="flex space-x-6 text-gray-700 font-medium ml-80 text-lg">
          <NavLink
            to="/mainpage/home"
            className=" font-bold transition-all duration-500  hover:scale-110 hover:text-blue-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/mainpage/dashboard"
            className="font-bold transition-all duration-500 hover:text-blue-600  hover:scale-110"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/mainpage/marketIntelegence"
            className="font-bold transition-all duration-500 hover:text-blue-600  hover:scale-110"
          >
            Market Intelligence
          </NavLink>
          <NavLink
            to="/mainpage/reports"
            className="font-bold transition-all duration-500 hover:text-blue-600  hover:scale-110"
          >
            Reports
          </NavLink>
          <NavLink
            to="/mainpage/exploreData"
            className="font-bold transition-all duration-500 hover:text-blue-600 hover:scale-110"
          >
            Explore Data
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink
          to='/'
            // onClick={handleSignOut}
            className=" bg-blue-600 p-2 rounded-2xl hover:bg-blue-800 "
          >
            Signout
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
