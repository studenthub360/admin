// TimeManagement.js
import React from "react";
import Sidebar from "./Sidebar";
import Nevents from "./NetworkingEvents";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const TimeManagement = () => {
  return (
    <div className="block min-h-screen lg:flex-row lg:w-full min-w-screen">
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-grow py-8 px-5">
          {/* Main Content for Time Management */}
          <div className="flex flex-row lg:flex-row justify-between">
            {/* <h1 className="lg:text-3xl text-lg  font-bold text-[#3B50FE] mb-4">
            Shared Playlist
            </h1> */}
            {/* <button className="bg-[#3B50FE] text-white font-semibold lg:py-2 lg:px-4 px-1 py-1 text-center h-1/2 rounded-lg">
              Forum
              <img
                src={forum}
                alt="forum"
                className="w-4 h-4 inline-block ml-2"
              />
            </button> */}
            {/* <Link
            to="/"
            className="text-2xl flex px-4 text-[#3D50FF] font-semibold mb-4 text-left lg:text-left"
          >
            <h1 className="font-serif ">Studenthub</h1>{" "}
            <h1 className="text-[#3B4FFE] font-magiona-display">360</h1>
          </Link> */}
          </div>
          <Nevents/>
        </div>
      </div>
    </div>
  );
};

export default TimeManagement;
