import React, { useState, useEffect } from "react";

const AdminNetworkingGroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState({
    groupName: "",
    groupLink: "",
    description: "",
  });

  useEffect(() => {
    // Fetch networking groups data when the component mounts
    fetchNetworkingGroups();
  }, []);

  const fetchNetworkingGroups = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      // Fetch networking groups data from the API
      const response = await fetch(
        "https://student360-api.onrender.com/api/netgrp",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch networking groups");
      }

      const groupsData = await response.json([]);
      setGroups(groupsData || []); // Ensure groups array is defined or use an empty array
      console.log(groupsData);
    } catch (error) {
      console.error("Error fetching networking groups:", error);
      alert("Failed to fetch networking groups. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroup((prevGroup) => ({
      ...prevGroup,
      [name]: value,
    }));
  };

  const handleAddGroup = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      // Send a POST request to add a new networking group
      const response = await fetch(
        "https://student360-api.onrender.com/api/netgrp",
        {
          method: "POST",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGroup),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add networking group");
      }

      // Fetch the updated list of networking groups
      fetchNetworkingGroups();
    } catch (error) {
      console.error("Error adding networking group:", error);
      alert("Failed to add networking group. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-[#3B50FE]">
        Admin Networking Groups Page
      </h1>

      <div className="mb-6">
        {/* <h2 className="text-xl font-bold mb-4">Add New Networking Group</h2> */}
        <div className=" space-x-4">
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            value={newGroup.groupName}
            onChange={handleInputChange}
            className="p-2 border rounded-md w-1/4"
          />
          <input
            type="text"
            name="groupLink"
            placeholder="Group Link"
            value={newGroup.groupLink}
            onChange={handleInputChange}
            className="p-2 border rounded-md w-1/4"
          />
          <input
            type="text"
            name="description"
            placeholder="Group Description"
            value={newGroup.description}
            onChange={handleInputChange}
            className="p-2 border rounded-md w-1/4"
          />
          {/* <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newGroup.image}
            onChange={handleInputChange}
            className="p-2 border rounded-md w-1/4"
          /> */}
          <button
            onClick={handleAddGroup}
            className="bg-[#3B50FE] text-white px-4 py-2 rounded-md"
          >
            Add Group
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Networking Groups List</h2>
        <ul className=" list-inside">
          {groups.map((group, index) => (
            <li key={index}>
              <strong>Group Name:</strong> {group.groupName}
              <br />
              <strong>Group Link:</strong> {group.groupLink}
              <br />
              <strong>Description:</strong> {group.groupDescription}
              <br />
              <strong>Image:</strong>{" "}
              {group.image !== "null" ? (
                <img src={group.image} alt={group.groupName} />
              ) : (
                "Not available"
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminNetworkingGroupsPage;
