// Users.js

import React from 'react';

const Users = () => {
  // Dummy user data (replace with actual data)
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      university: 'XYZ University',
      department: 'Computer Science',
    },
    // Add more user objects as needed
  ];

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>University</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.university}</td>
              <td>{user.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
