import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Admin/Dashboard';
import Sidebar from './Component/Admin/Sidebar';
import Header from './Component/Admin/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Sidebar />
          <Routes>
            <Route path="/admin/*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
