import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/networkingevents">Networking Events</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
