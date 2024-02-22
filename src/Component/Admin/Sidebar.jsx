import React, { useState } from "react";
import { Link } from "react-router-dom";
import logout from "./images/logout.png";
import logoutblack from "./images/logoutblack.png";
import playlist from "./images/playlist.png";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:bg-[#3B50FE] bg-white h-2 lg:h-auto w-1/6 p-4 lg:p-0 overflow-hidden flex flex-col justify-between">
      <ul className={`hidden lg:block text-black p-5 lg:text-white font-bold`}>
        <div>
          <li className="p-4 ">
            <Link to="/users" className="flex gap-2">
              <FaUser className="w-8 h-6" />
              Users
            </Link>
          </li>
          <li className="p-4">
            <Link to="/Nevents" className="flex gap-2">
              <img src={playlist} alt="event" className="w-8 h-8" />
              Networking events
            </Link>
          </li>
          <li className="p-4">
            <Link to="/Ngroups" className="flex gap-2">
              <img src={playlist} alt="group" className="w-8 h-8" />
              Networking groups
            </Link>
          </li>
        </div>
      </ul>
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="text-[#3B4FFE] justify-start lg:hidden focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-full w-4/5 bg-white shadow-md p-5">
          <div className="flex flex-col space-y-2 text-black lg:text-white font-bold overflow-auto">
            <Link
              to="/users"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Users
            </Link>
            <Link
              to="/Nevents"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Networking events
            </Link>
            <Link
              to="/Ngroups"
              className="block p-4 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Networking groups
            </Link>
            <Link to="/" className="flex gap-2">
              <img src={logoutblack} alt="logout" className=" w-5 ml-4   " />
              Logout
            </Link>
          </div>
        </div>
      )}
      {/* Logout link */}
      <div className="p-6 items-center font-semibold">
        <Link to="/" className="flex text-white gap-2">
          <img src={logout} alt="logout" className="w-6 " />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
