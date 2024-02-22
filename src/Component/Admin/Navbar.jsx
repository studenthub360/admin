// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
// import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    
    <nav className="bg-white lg:block   text-white lg:py-4 py-1 px-4  border-b ">
      <div className="  flex justify-between items-center">
        <Link to="/dashboard" className=" lg:flex   text-[#3B4FFE]  font-semibold">
        <h1 className="font-serif">Studenthub</h1>{" "}
            <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16"></div>
        <div className="space-x-4 flex text-center justify-center items-center text-black">
          {/* <div className="w-5 lg:w-8">
            <img src={vector} alt="notification" />
          </div> */}
          <div className={` rounded-full justify-center items-center `}>
          {/* <Link to="/profile">
              <div
                // icon={<FaUser />}
                alt="profile"
                className="rounded-full w-8  lg:w-10 h-8 lg:h-10 bg-[#3b4efeec] border border-black flex items-center justify-center"
              >
                <FaUser />
              </div>
              <h1 className=" font-magiona-display font-medium">Profile</h1>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
