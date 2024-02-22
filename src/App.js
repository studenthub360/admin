import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Admin/Dashboard";
import Sidebar from "./Component/Admin/Sidebar";
import Navbar from "./Component/Admin/Navbar";
// import Header from './Component/Admin/Header';
import NetworkingEvents from "./Component/Admin/NEventsdash";
import Login from "./Component/Login/login";
import NetworkingGroup from "./Component/Admin/NGrp";

const App = () => {
  return (
    <Router>
      <Routes>
<Route path="/" element={<Login />} />

            <Route path="/users" element={<Dashboard />} />
            <Route path="/Nevents" element={<NetworkingEvents/>}/>
            <Route path="/Ngroups" element={<NetworkingGroup/>}/>
          </Routes>
    
 
    </Router>
  );
};

export default App;
