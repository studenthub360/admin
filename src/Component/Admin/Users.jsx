import React, { useState, useEffect } from "react";

const AdminUserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      // Fetch user list data from the API
      const response = await fetch(
        "https://student360-api.onrender.com/api/user/all",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user list");
      }

      const userData = await response.json([]);
      setUsers(userData["All users"] || []); // Ensure users array is defined or use an empty array
      console.log(userData);
    } catch (error) {
      console.error("Error fetching user list:", error);
      alert("Failed to fetch user list. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-8 ">
      <h1 className="text-3xl font-bold mb-8 text-[#3B50FE]">Admin</h1>

      <table className="table-auto border border-[#3B50FE] rounded-2xl p-4 text-left w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">University</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Level</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserDetail key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserDetail = ({ user }) => (
  <tr className="border-b">
    <td className="px-4 py-2">{user.full_name || "Not available"}</td>
    <td className="px-4 py-2">{user.email || "Not available"}</td>
    <td className="px-4 py-2">{user.university || "Not available"}</td>
    <td className="px-4 py-2">{user.department || "Not available"}</td>
    <td className="px-4 py-2">{user.level || "Not available"}</td>
  </tr>
);

export default AdminUserPage;
